import './App.css';
import Header from './sections/header'
import Footer from './sections/footer'
import React, { useState, useEffect} from 'react';
import { GET_ROUTES } from './api';

function App() {
   const [routes, setRoutes] = useState({})
   const data = null
   
   useEffect(() => {
      fetch(GET_ROUTES)
       .then(resp => resp.json())
       .then(data => setRoutes(data))
      }, [data])

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
               {routes.routes !== undefined && 
                  routes.routes.map((route, index) => (
                     <p key={index}>{route.route_id} - {route.route_long_name}</p>
                  ))
               }
            </div>
         </main>
         <Footer />
   </div>
  );
}

export default App;
