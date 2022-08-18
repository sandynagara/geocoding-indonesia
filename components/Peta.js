import React, { useRef, useState, useEffect } from "react"
import * as ol from "ol";
import OLTileLayer from "ol/layer/Tile";
import XYZ from 'ol/source/XYZ';
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Polygon from "ol/geom/Polygon"
import GeoJSON from "ol/format/GeoJSON"
import TileWMS from 'ol/source/TileWMS';
import {Circle as CircleStyle, Fill, Stroke, Style} from 'ol/style';

const Peta = ({ zoom =16, dataInput = false}) => {
  const mapRef = useRef();
  const [map, setMap] = useState(null);
  const [center, setCenter] = useState([110.41019027614477, -6.991410100761829]);
  // on component mount
  useEffect(() => {
    let options = {
      view: new ol.View({ zoom, center,projection: "EPSG:4326" }),
      layers: [new OLTileLayer({
        source: new XYZ({
          //url: 'http://mt1.google.com/vt/lyrs=s&hl=pl&&x={x}&y={y}&z={z}'
          url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
        })
      }),new OLTileLayer({
        source: new TileWMS({
          url: 'https://ppids-ugm.com/geoserver/wms',
          params: {'LAYERS': 'geocoding:semarang', 'TILED': true},
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
    map.getView().setZoom(zoom);
  }, [zoom]);
  // center change handler
  useEffect(() => {
    if (!map) return;
    map.getView().setCenter(center)
  }, [center])

  var ClickTes = () => {
    if (!map) return;
    map.on('click', function(event) {
      console.log(event)
    });
  }

  var GeojsonInput = () => {
    if (!map) return;
    console.log(dataInput)
    if(!dataInput){
      return
    }

    map.getLayers().forEach(layer => {
      if (layer.values_.title == 'testing'){
        map.removeLayer(layer)
      }
    });

    map.getView().setCenter(dataInput["coordinates"][0][0])
    map.getView().setZoom(19);

    console.log(dataInput["coordinates"])
    var plygon = new Polygon(dataInput["coordinates"])
    var geojsonData = new VectorLayer({
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

  return (
      <div ref={mapRef} className="h-screen w-screen ol-map">
        <ClickTes/>
        <GeojsonInput/>
      </div>
  )
}

export default Peta;
