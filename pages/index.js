import React,{useState,useEffect} from 'react'

import Peta from "../components/Peta"

import Sidebar from '../components/Sidebar/Sidebar';
import Info from '../components/info/Info';
import Header from '../components/Header/Header';
import Basemap from '../components/Sidebar/Basemap';

import InputAlamat from '../components/Toolbar/InputAlamat';
import Welcome from '../components/Sidebar/Welcome';

export default function Home() {
     
    const [value, setValue] = useState("")

    const [dataInput, setDataInput] = useState(false)

    const [menuSelect, setMenuSelect] = useState({nama:"Home",lebarSidebar:300})
    const [basemapSelect, setBasemapSelect] = useState("https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}")

 

  

    return (
        <div>
            <Header/>
            <div className='flex'>
                <Sidebar setMenuSelect={setMenuSelect}/>
                <Welcome menuSelect={menuSelect["nama"]}/>
                <Basemap menuSelect={menuSelect["nama"]} basemapSelect={basemapSelect} setBasemapSelect={setBasemapSelect}/>
                <div className=' mt-5 px-5 w-[300px] absolute z-10 duration-500' style={{marginLeft:`calc(${menuSelect["lebarSidebar"]}px + 88px)`} }>
                    <InputAlamat setValue={setValue} setDataInput={setDataInput} value={value}/>
                </div>
            </div>
            {/* <Sidebar/> */}
            <Peta dataInput={dataInput} basemapUrl={basemapSelect} menuSelect={menuSelect} setMenuSelect={setMenuSelect} setDataInput={setDataInput} setValue={setValue}/>
            <Info data={value}/>
        </div>
    )
}
