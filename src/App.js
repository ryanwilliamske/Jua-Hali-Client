import React, { useState } from 'react';

import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import Navbar from './components/nav/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


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
          <Navbar  />
        <ReactMapGL {...viewport} 
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/ryanwilliamske/ckeod2oiz44ed19ocgqay41f0"
        onViewportChange={viewport => {
            setViewport(viewport)
        }}> 
        </ReactMapGL>
       
      </div>
    );
  }

export default App;
