import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import Navbar from './components/nav/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as HomeData from "./testdata/features.json";
import TheMap from './components/map/TheMap'
import Tabs from "./components/Tabs"
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Disaster from './components/Disaster';


import Fab from './components/Fab';



function App() {

    // const [viewport, setViewport] = useState(
    //     {
    //         latitude: -1.284,
    //         longitude: 36.816,
    //         width: '100vw',
    //         height: '100vh',
    //         zoom: 10
    //     }
    // );
  
    return (
      <Router>
        <Route />
        <div className="container">
          <Navbar  />
          <Tabs>
            <div label="Map">
              Map will be here.
              <TheMap />
            </div>
            <div label="List">
              <Disaster />
            </div>
          </Tabs>
          {/* <TheMap /> */}
          <Fab />
        </div>
      </Router>
    );
  }

export default App;
