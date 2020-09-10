import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import 'bootstrap/dist/css/bootstrap.min.css';
// import * as HomeData from "./testdata/features.json";



function TheMap() {
    const [viewport, setViewport] = useState(
        {
            latitude: -1.284,
            longitude: 36.816,
            width: '100vw',
            height: '100vh',
            zoom: 10
        }
    );
    return (
        <div>
            <ReactMapGL {...viewport} 
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_PUBLIC_TOKEN}
                mapStyle="mapbox://styles/ryanwilliamske/ckeod2oiz44ed19ocgqay41f0"
                onViewportChange={viewport => {
                setViewport(viewport)
                }}> 

                {/* { HomeData.features.map((home) => (
                // console.log('Lat is..' + home.geometry.coordinates[1])
                // <Marker key={home.id} 
                // latitude={home.geometry.coordinates[1]} 
                // longitude={home.geometry.coordinates[0]}>

                // <button>
                // <img src="/home.svg" alt="Homes"/>
                // </button>

                // </Marker>
                )) } */}
            </ReactMapGL>
        </div>
    )
}

export default TheMap
