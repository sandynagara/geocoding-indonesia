import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Peta from "../components/Peta";
import Head from "next/head";
import Info from "../components/info/Info";
import Header from "../components/Header/Header";
import Basemap from "../components/Sidebar/Basemap";
//import logo from "../components/images/logoUGM.png"
import InputAlamat from "../components/Toolbar/InputAlamat";
import Welcome from "../components/Sidebar/Welcome";
import Sidebar from "../components/Sidebar/Sidebar";
import BottomBar from "../components/BottomBar/BottomBar";
import useResponsive from "../components/utils/useResponsice";
import BasemapBottom from "../components/BottomBar/BasemapBottom";
import WelcomeBottom from "../components/BottomBar/WelcomeBottom";
import Informasi from "../components/Sidebar/Informasi";
import InformasiBottom from "../components/BottomBar/InfomasiBottom";

const server = process.env.SERVER;

export default function Home() {
  const [value, setValue] = useState("");
  const [dataInput, setDataInput] = useState(false);
  const [informasiPersil, setInformasiPersil] = useState(false);
  const [menuSelect, setMenuSelect] = useState({
    nama: "Home",
    lebarSidebar: 220,
  });
  const [basemapSelect, setBasemapSelect] = useState(
    "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  );

  const { isTablet } = useResponsive();

  return (
    <div>
      <Head>
        <title>Uji Implementasi SNI 9037:2021 tentang Alamat</title>
        <link rel="shortcut icon" href={"/geocoder2/ugm_favicon.png"} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex flex-col">
        <Header className="absolute" />
        <div className="flex flex-row h-[calc(100vh_-_80px)]">
          <div>
            {!isTablet && (
              <Sidebar
                setMenuSelect={setMenuSelect}
                menuSelect={menuSelect["nama"]}
              />
            )}
            {!isTablet && <Welcome menuSelect={menuSelect["nama"]} />}
            {!isTablet && (
              <Informasi
                menuSelect={menuSelect["nama"]}
                informasiPersil={informasiPersil}
              />
            )}
            {!isTablet && (
              <Basemap
                menuSelect={menuSelect["nama"]}
                basemapSelect={basemapSelect}
                setBasemapSelect={setBasemapSelect}
              />
            )}
            {!isTablet ? (
              <div
                className="mt-3 px-5 absolute z-10 duration-500"
                style={{
                  marginLeft: `calc(${menuSelect["lebarSidebar"]}px + 80px)`,
                }}
              >
                <InputAlamat
                  setValue={setValue}
                  setDataInput={setDataInput}
                  value={value}
                />
              </div>
            ) : (
              <div className="p-1 absolute z-10 duration-500">
                <InputAlamat
                  setValue={setValue}
                  setDataInput={setDataInput}
                  value={value}
                />
              </div>
            )}
          </div>
          <Peta
            dataInput={dataInput}
            basemapUrl={basemapSelect}
            menuSelect={menuSelect}
            setMenuSelect={setMenuSelect}
            setDataInput={setDataInput}
            setValue={setValue}
            setInformasiPersil={setInformasiPersil}
          />
        </div>
      </div>

      {!isTablet && <Info data={value} />}
      {isTablet && <BottomBar setMenuSelect={setMenuSelect} />}
      {isTablet && (
        <WelcomeBottom
          menuSelect={menuSelect["nama"]}
          setMenuSelect={setMenuSelect}
        />
      )}
      {isTablet && (
        <InformasiBottom
          menuSelect={menuSelect["nama"]}
          setMenuSelect={setMenuSelect}
          informasiPersil={informasiPersil}
        />
      )}
      {isTablet && (
        <BasemapBottom
          menuSelect={menuSelect["nama"]}
          setMenuSelect={setMenuSelect}
          basemapSelect={basemapSelect}
          setBasemapSelect={setBasemapSelect}
        />
      )}
    </div>
  );
}
