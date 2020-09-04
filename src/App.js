import React, { useState } from 'react';

import ReactMapGL from 'react-map-gl';


function App() {
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
      <div className="App">
        <ReactMapGL {...viewport} 
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={viewport => {
            setViewport(viewport)
        }}> Map goes here</ReactMapGL>
       
      </div>
    );
  }

export default App;
