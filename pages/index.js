import React,{useState,useEffect} from 'react'
import Peta from "../components/Peta"
import InputAlamat from '../components/Toolbar/InputAlamat'
import Autosuggest from 'react-autosuggest';
import Sidebar from '../components/Sidebar/Sidebar';
import Info from '../components/info/Info';
import Header from '../components/Header/Header';

export default function Home() {
     
    const [value, setValue] = useState("")
    const [suggestion, setSuggestions] = useState([])
    const [dataInput, setDataInput] = useState(false)

    var getDataAlamat = async (newValue) => {
      var url = `http://localhost:3000/api/geocoding/${newValue}`
      fetch(url,{
          method:"GET",
      }).then(res=>res.json()).then(res=>{
        if(!res["Hasil"]){
            return
        }
        setSuggestions(res["Data"]["hits"])
    })
      .catch(err=>console.log(err))
    }

    var onSuggestionsFetchRequested = (e) => {
        getDataAlamat(e.value)
    }
    var onSuggestionsClearRequested = (e) => {
        setSuggestions([])
    }
    var getSuggestionValue = (e) => {
        setDataInput(e._source.geometry)
        return e._source.ALAMAT;
    }
    var renderSuggestion = (e) => {
        return <div className='text-sm'>{e._source.ALAMAT}</div>
    }

    var onChange = (event, { newValue, method }) => {
        setValue(newValue)
    }

    const inputProps = {
        placeholder: 'Cari Alamat',
        value,
        onChange: onChange
    };

    return (
        <div>
            <Header/>
            <div className='p-5 w-[300px] absolute z-10'>
            <Autosuggest
                suggestions={suggestion}
                onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                onSuggestionsClearRequested={onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
            />
            </div>
            {/* <Sidebar/> */}
            <Peta dataInput={dataInput}/>
            <Info data={value}/>
        </div>
    )
}
