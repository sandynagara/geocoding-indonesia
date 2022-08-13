import React, { useRef, useState, useEffect } from "react"
import * as ol from "ol";
import OLTileLayer from "ol/layer/Tile";
import XYZ from 'ol/source/XYZ';
import {fromLonLat} from 'ol/proj';

const Peta = ({ zoom =10, center = fromLonLat([110,-7])}) => {
  const mapRef = useRef();
  const [map, setMap] = useState(null);
  // on component mount
  useEffect(() => {
    let options = {
      view: new ol.View({ zoom, center }),
      layers: [new OLTileLayer({
        source: new XYZ({
          url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        })
      })],
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

  return (
      <div ref={mapRef} className="h-screen w-screen ol-map">
        <ClickTes/>
      </div>
  )
}

export default Peta;
