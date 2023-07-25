import './App.css';
import Header from './sections/header'
import Footer from './sections/footer'
import React, { useState, useEffect} from 'react';
import { GET_ROUTES } from './api';
import { CUMTDRoute, RouteDetails } from './types';
import Navigation from './sections/navigation';

function App() {
   const [routes, setRoutes] = useState<CUMTDRoute>()
   const [selectedRoute, setSelectedRoute] = useState<RouteDetails>({
      routeColor: 'none',
      routeID: 'none',
      routeLongName: 'no routes found',
      routeShortName: '',
      routeTextColor: 'none'
   })
   const data = null

   const setDataAsType = (data: any) => {
      if(data !== null || data !== undefined) {
         let routeListObject = {} as CUMTDRoute
         let tempRouteInfo = {} as RouteDetails
         const tempRouteArray = [] as RouteDetails[]
         tempRouteArray.push({
            routeColor: 'none',
            routeID: 'none',
            routeLongName: 'Select A Route',
            routeShortName: 'none',
            routeTextColor: 'none' 
         })
         data.routes.forEach((routeData: any) => {
            tempRouteInfo = {
               routeColor: routeData.route_color,
               routeID: routeData.route_id,
               routeLongName: routeData.route_long_name,
               routeShortName: routeData.route_short_name,
               routeTextColor: routeData.route_text_color 
            }
            tempRouteArray.push(tempRouteInfo)
         })
         routeListObject = {
            time: data.time,
            changesetID: data.changeset_id,
            newChangeset: data.new_changeset,
            status: data.status,
            rqst: data.rqst,
            routes: tempRouteArray
         }
         setRoutes(routeListObject)
      } else {
         setRoutes({
            time: '',
            changesetID: '',
            newChangeset: false,
            status: {
               code: 500,
               msg: 'error',
            },
            rqst: {
               method: 'none',
               params: {
                     routeID: 'no routes found'
               }
            },
            routes: [
               {
                  routeColor: 'none',
                  routeID: 'none',
                  routeLongName: 'no routes found',
                  routeShortName: '',
                  routeTextColor: 'none'
               } 
            ]
         })
      }
   }
   
   useEffect(() => {
      fetch(GET_ROUTES)
       .then(resp => resp.json())
       .then(data => setDataAsType(data))
      }, [data])

   const SelectRoute = (routeArrayIndex: string) => {
      const index = Number(routeArrayIndex)
      let routeInfo = {} as RouteDetails
      if(routes !== undefined) {
         routeInfo =  routes.routes[index]
      } else {
         routeInfo = {
            routeColor: 'none',
            routeID: 'none',
            routeLongName: 'no routes found',
            routeShortName: 0,
            routeTextColor: 'none'
         } 
      }
      setSelectedRoute(routeInfo)
   }

  return (
   <div id="content" className="content-styling">
      <Header />
      <Navigation />
      <main role="main" className="main-styling" tabIndex={1}>
         <div className="flex-item">
            <h1>Trip Planner</h1>
            <h2>This app is a work in progress...return soon for more features!</h2>
            {routes !== undefined && (
               <>
               <label className="input-label" htmlFor="route-dropdown">Routes</label>
               <select id="route-dropdown" onChange={(e) => { SelectRoute(e.target.value); } }>
                  {routes.routes !== undefined &&
                     routes.routes.map((route, index) => (
                        <option key={index} value={index}>{route.routeLongName}</option>
                     ))}
               </select>
               </>
            )}
            <div id="route-info">
               <p>{selectedRoute.routeLongName} {selectedRoute.routeShortName}</p>
            </div>
         </div>
      </main>
      <Footer />
   </div>
  );
}

export default App;
