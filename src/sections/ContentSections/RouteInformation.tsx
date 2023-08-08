// import '../../App.css'
import Header from '../header'
import Footer from '../footer'
import Navigation from '../navigation'
import React, { useState, useEffect, ReactElement } from 'react'
import { GET_ROUTES } from '../../api'
import { CUMTDRoute, RouteDetails } from '../../types'
import { Container } from '@chakra-ui/react'

export default function RouteInformation(): ReactElement {
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
      <main role="main">
         <Container variant="mainContent">
            <h2>Trip Planner</h2>
            <p>Please select a route from the drop-down menu</p>
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
         </Container>
      </main>
      <Footer />
   </div>
  )
}