import React, { useRef, useState, useEffect } from "react"
import * as ol from "ol";
import OLTileLayer from "ol/layer/Tile";
import XYZ from 'ol/source/XYZ';
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Polygon from "ol/geom/Polygon"
import GeoJSON from "ol/format/GeoJSON"


const geojsonObject = {
  'type': 'FeatureCollection',
  'crs': {
    'type': 'name',
    'properties': {
      'name': 'EPSG:3857',
    },
  },
  'features': [
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [0, 0],
      },
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'LineString',
        'coordinates': [
          [4e6, -2e6],
          [8e6, 2e6],
        ],
      },
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'LineString',
        'coordinates': [
          [4e6, 2e6],
          [8e6, -2e6],
        ],
      },
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Polygon',
        'coordinates': [
          [
            [-5e6, -1e6],
            [-3e6, -1e6],
            [-4e6, 1e6],
            [-5e6, -1e6],
          ],
        ],
      },
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'MultiLineString',
        'coordinates': [
          [
            [-1e6, -7.5e5],
            [-1e6, 7.5e5],
          ],
          [
            [1e6, -7.5e5],
            [1e6, 7.5e5],
          ],
          [
            [-7.5e5, -1e6],
            [7.5e5, -1e6],
          ],
          [
            [-7.5e5, 1e6],
            [7.5e5, 1e6],
          ],
        ],
      },
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'MultiPolygon',
        'coordinates': [
          [
            [
              [-5e6, 6e6],
              [-3e6, 6e6],
              [-3e6, 8e6],
              [-5e6, 8e6],
              [-5e6, 6e6],
            ],
          ],
          [
            [
              [-2e6, 6e6],
              [0, 6e6],
              [0, 8e6],
              [-2e6, 8e6],
              [-2e6, 6e6],
            ],
          ],
          [
            [
              [1e6, 6e6],
              [3e6, 6e6],
              [3e6, 8e6],
              [1e6, 8e6],
              [1e6, 6e6],
            ],
          ],
        ],
      },
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'GeometryCollection',
        'geometries': [
          {
            'type': 'LineString',
            'coordinates': [
              [-5e6, -5e6],
              [0, -5e6],
            ],
          },
          {
            'type': 'Point',
            'coordinates': [4e6, -5e6],
          },
          {
            'type': 'Polygon',
            'coordinates': [
              [
                [1e6, -6e6],
                [3e6, -6e6],
                [2e6, -4e6],
                [1e6, -6e6],
              ],
            ],
          },
        ],
      },
    },
  ],
};

const Peta = ({ zoom =10, dataInput = false}) => {
  const mapRef = useRef();
  const [map, setMap] = useState(null);
  const [center, setCenter] = useState([110,-7]);
  // on component mount
  useEffect(() => {
    let options = {
      view: new ol.View({ zoom, center,projection: "EPSG:4326" }),
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
      })
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
