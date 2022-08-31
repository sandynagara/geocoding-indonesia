import React, { useRef, useState, useEffect } from "react"
import * as ol from "ol";
import OLTileLayer from "ol/layer/Tile";
import XYZ from 'ol/source/XYZ';
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import GeoJSON from "ol/format/GeoJSON"
import TileWMS from 'ol/source/TileWMS';
import { Fill, Stroke, Style} from 'ol/style';

const Peta = ({zoom=16, dataInput = false,basemapUrl,menuSelect,setValue,setDataInput,setMenuSelect,setInformasiPersil}) => {
  const mapRef = useRef();
  const [map, setMap] = useState(null);
  const [clickCoordinate, setClickCoordinate] = useState();
  
  const basemapLayer= new OLTileLayer({
    properties:"Basemap",
    source: new XYZ({
      url: basemapUrl
    })
  })
  var center = [106.825030,-6.163826]

  const sourceWMS = new TileWMS({
    url: 'https://ppids-ugm.com/geoserver/wms',
    params: {'LAYERS': 'geocoding', 'TILED': true},
    serverType: 'geoserver',
    // Countries have transparency, so do not fade tiles:
    transition: 0,
  })
  // on component mount
  useEffect(() => {
    let options = {
      view: new ol.View({ zoom, center,projection: "EPSG:4326" }),
      layers: [new OLTileLayer({
        properties:"Basemap",
        source: new XYZ({
          //url: 'http://mt1.google.com/vt/lyrs=s&hl=pl&&x={x}&y={y}&z={z}'
          url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        })
      }),new OLTileLayer({
        zIndex:99,
        source: new TileWMS({
          url: 'https://ppids-ugm.com/geoserver/wms',
          params: {'LAYERS': 'geocoding', 'TILED': true,'CRS':4326},
          serverType: 'geoserver',
          // Countries have transparency, so do not fade tiles:
          transition: 0,
        }),
      }),],
      controls: [],
      overlays: []
    };
    let mapObject = new ol.Map(options);
    mapObject.setTarget(mapRef.current);
    setMap(mapObject);
    return () => mapObject.setTarget(undefined);
  }, []);
  // zoom change handler
  useEffect(() => {
    if (!map) return;
    if(menuSelect["nama"] == "Reset View"){
      setMenuSelect({nama:"reset",lebarSidebar:0})
      map.getView().setCenter(center)
      map.getView().setZoom(16);
      setInformasiPersil(false)
      setValue("")
      setDataInput(false)
      try{
        map.getLayers().forEach(layer => {
          if (layer.values_.title == 'testing'){
            map.removeLayer(layer)
          }
        });
      }catch(err){
  
      }
    }
  }, [menuSelect]);

  useEffect(() => {
  
    if (!map) return;
    map.getLayers().forEach(layer => {
      if (layer && layer.values_.properties == 'Basemap' ){
        map.removeLayer(layer)
      }
    });

    var basemapLayer= new OLTileLayer({
      properties:"Basemap",
      source: new XYZ({
        
        url: basemapUrl
      })
    })
    map.addLayer(basemapLayer)
  }, [basemapUrl])
  
  useEffect(() => {
    if (!map || !dataInput) return;
    console.log(dataInput)
    try{
      map.getLayers().forEach(layer => {
        if (layer.values_.title == 'testing'){
          map.removeLayer(layer)
        }
      });
    }catch(err){

    }
   

    if(dataInput["zoom"]){
      map.getView().setCenter(dataInput["geometry"]["coordinates"][0][0][0])
      map.getView().setZoom(19);
    }

    var geojsonData = new VectorLayer({
      zIndex:99,
      title:"testing",
      source: new VectorSource({
        features: new GeoJSON().readFeatures(dataInput["geometry"]),
      }),
      style:new Style({
        stroke: new Stroke({
          color: 'blue',
          width: 3,
        }),
        fill: new Fill({
          color: 'rgba(255, 255, 0, 0.1)',
        }),
      }),
    })
    map.addLayer(geojsonData)
  }, [dataInput])
  
  useEffect(() => {
    if (!map) return;
      const zoomWMS = 20
      const view = new ol.View({ zoomWMS, center,projection: "EPSG:4326" })
      const viewResolution = /** @type {number} */ (view.getResolution());
      const url = sourceWMS.getFeatureInfoUrl(
        clickCoordinate,
        viewResolution,
        'EPSG:4326',
        {'INFO_FORMAT': 'application/json'}
      );
      
      if (url) {
        fetch(url)
          .then((response) => response.json())
          .then((res) => {
            if(res["features"].length == 0) return
            setDataInput({geometry:res["features"][0]["geometry"],zoom:false})
            setInformasiPersil(res["features"][0]["properties"])
          })
          .catch((err)=>{
            console.log(err)
          });
      }
  }, [clickCoordinate])
  

  var GetFeatureInfo = () => {
    if (!map) return;
    map.on('singleclick', function (evt) {
      setClickCoordinate(evt.coordinate)
    })
  }

  return (
      <div ref={mapRef} className="h-full w-screen flex flex-grow relative ol-map">
        <GetFeatureInfo/>
      </div>
  )
}

export default Peta;
