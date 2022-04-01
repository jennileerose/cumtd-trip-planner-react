import './App.css';
import Header from './sections/header'
import Footer from './sections/footer'
import React, { useState, useEffect} from 'react';
import { GET_ROUTES, GET_ROUTE_BY_ID } from './api';

function App() {
   const [routes, setRoutes] = useState({})
   const [selectedRoute, setSelectedRoute] = useState('')
   const data = null
   
   useEffect(() => {
      fetch(GET_ROUTES)
       .then(resp => resp.json())
       .then(data => setRoutes(data))
      }, [data])

   const SelectRoute = (routeID) => {
      const routeIDProp = routeID.replace(/\s/g, '%20')
      const url = GET_ROUTE_BY_ID + routeIDProp
      console.log(url)
      // useEffect(() => {
      //    fetch(url)
      //  .then(resp => resp.json())
      //  .then(data => setSelectedRoute(data))
      // }, [data])
      // console.log(selectedRoute)
   }

  return (
   <div id="content" className="content-styling">
      <Header />
         <nav role="navigation" className="nav-styling">
            <ul className="nav-link-list">
               <li><a href="index.html">Plan Trip</a></li>
            </ul>
         </nav>
         <main role="main" className="main-styling" tabIndex="1">
            <div className="flex-item">
               <h1>Trip Planner</h1>
               <h2>This app is a work in progress...return soon for more features!</h2>
               <label className="input-label" htmlFor="route-dropdown">Routes</label>
               <select id="route-dropdown" onChange={(e) => {SelectRoute(e.target.value)}}>
               {routes.routes !== undefined && 
                  routes.routes.map((route, index) => (
                     <option key={index} value={route.route_id}>{route.route_long_name}</option>
                  ))
               }
               </select>
               <div id="route-info">
                  {/* {selectedRoute !== undefined && {selectedRoute.route_long_name}} */}
               </div>
            </div>
         </main>
         <Footer />
   </div>
  );
}

export default App;
