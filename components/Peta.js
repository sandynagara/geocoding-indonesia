import React, { useRef, useState, useEffect } from "react"
import * as ol from "ol";
import OLTileLayer from "ol/layer/Tile";
import XYZ from 'ol/source/XYZ';
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import GeoJSON from "ol/format/GeoJSON"
import TileWMS from 'ol/source/TileWMS';
import {Circle as CircleStyle, Fill, Stroke, Style} from 'ol/style';


const Peta = ({ zoom =19, dataInput = false,basemapUrl,menuSelect,setValue,setDataInput,setMenuSelect}) => {
  const mapRef = useRef();
  const [map, setMap] = useState(null);
  const [center, setCenter] = useState([110.41019027614477, -6.991410100761829]);
  
  const basemapLayer= new OLTileLayer({
    properties:"Basemap",
    source: new XYZ({
      
      url: basemapUrl
    })
  })

  const view = new ol.View({ zoom, center,projection: "EPSG:4326" })

  const sourceWMS = new TileWMS({
    url: 'https://ppids-ugm.com/geoserver/wms',
    params: {'LAYERS': 'geocoding:semarang', 'TILED': true},
    serverType: 'geoserver',
    // Countries have transparency, so do not fade tiles:
    transition: 0,
  })
  // on component mount
  useEffect(() => {
    let options = {
      view: view,
      layers: [basemapLayer,
        new OLTileLayer({
        zIndex:100,
        source: sourceWMS,
      }),]
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
      map.getView().setZoom(19);
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
    console.log(basemapUrl)
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
  

  var GeojsonInput = () => {
    if (!map || !dataInput) return;

    try{
      map.getLayers().forEach(layer => {
        if (layer.values_.title == 'testing'){
          map.removeLayer(layer)
        }
      });
    }catch(err){

    }
   

    map.getView().setCenter(dataInput["coordinates"][0][0])
    map.getView().setZoom(19);

    var geojsonData = new VectorLayer({
      zIndex:99,
      title:"testing",
      source: new VectorSource({
        features: new GeoJSON().readFeatures(dataInput),
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
  }

  var GetFeatureInfo = () => {
    if (!map) return;
    map.on('singleclick', function (evt) {
      const viewResolution = /** @type {number} */ (view.getResolution());
      const url = sourceWMS.getFeatureInfoUrl(
        evt.coordinate,
        viewResolution,
        'EPSG:4326',
        {'INFO_FORMAT': 'application/json'}
      );
     
      if (url) {
        fetch(url)
          .then((response) => response.json())
          .then((res) => {
            console.log(res)
          })
          .catch((err)=>{
            console.log(err)
          });
      }
    });
  }

  return (
      <div ref={mapRef} className="h-screen w-screen fixed ol-map">
        <GeojsonInput/>
        <GetFeatureInfo/>
      </div>
  )
}

export default Peta;
