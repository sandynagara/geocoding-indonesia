import React,{useEffect,useState} from 'react'
import Autosuggest from 'react-autosuggest';
import Image from "next/image"
import LoadingLogo from "../images/loading.svg"
import {AiOutlineSearch,AiOutlineClose} from "react-icons/ai"

function InputAlamat({setValue,setDataInput,value}) {

  const [loading, setLoading] = useState(false)
  const [suggestion, setSuggestions] = useState([])


  var getDataAlamat = async (newValue) => {
    var url = `http://localhost:3000/api/geocoding/${newValue}`
    setLoading(true)
    fetch(url,{
        method:"GET",
    }).then(res=>res.json()).then(res=>{
      if(!res["Hasil"]){
          return
      }
      setLoading(false)
      setSuggestions(res["Data"]["hits"])
  })
    .catch(err=>{
      setLoading(false)
  })
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

  return ( <div className='flex w-screen items-center'>
      <Autosuggest
          suggestions={suggestion}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
          
      />
      <div className='pr-2 ml-[-2px] h-[46px]  border-primary border-r-[3px] border-y-[3px] bg-white flex items-center justify-center'>  
      {loading && <Image src={LoadingLogo} width={25}/>}
      {value !== "" ? <AiOutlineClose size={25} color="red" onClick={()=>setValue("")} className="hover:cursor-pointer"/>: <AiOutlineSearch size={25}/>}
      
    </div>
  </div>
  )
}

export default InputAlamat