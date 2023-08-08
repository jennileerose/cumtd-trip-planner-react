// import '../../App.css'
import Header from '../header'
import Footer from '../footer'
import Navigation from '../navigation'
import React, { useState, useEffect, ReactElement } from 'react'
import { GET_ROUTES } from '../../api'
import { CUMTDRoute, RouteDetails } from '../../types'
import { Container, useColorMode, Select } from '@chakra-ui/react'
import { colors } from '../../theme/colors'

export default function RouteInformation(): ReactElement {
   const colorMode = useColorMode()
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
         // tempRouteArray.push({
         //    routeColor: 'none',
         //    routeID: 'none',
         //    routeLongName: 'Select A Route',
         //    routeShortName: 'none',
         //    routeTextColor: 'none'
         // })
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
   <div id="outer-content" className={colorMode.colorMode === 'light' ? "light-body-styles" : "dark-body-styles"}>
      <div id="content" className="content-styling">
         <Header />
         <Navigation />
         <main role="main">
            <Container variant="mainContent">
               <h2>Route Information</h2>
               <p>Please select a route from the drop-down menu</p>
               {routes !== undefined && (
                  <>
                  <label className="input-label" htmlFor="route-dropdown">Routes</label>
                  <Select
                     bg={colorMode.colorMode === 'light' ? colors.AliceBlue: colors.prussianBlue}
                     border="1px solid"
                     borderColor={colorMode.colorMode === 'light' ? colors.richBlack: colors.coolWhite}
                     color={colorMode.colorMode === 'light' ? colors.richBlack: colors.coolWhite}
                     placeholder='Select A Route'
                     id="route-dropdown"
                     onChange={(e) => { SelectRoute(e.target.value); } }
                  >
                     {routes.routes !== undefined &&
                        routes.routes.map((route, index) => (
                           <option key={index} value={index}>{route.routeLongName}</option>
                        ))}
                  </Select>
                  </>
               )}
               <div id="route-info">
                  <p>{selectedRoute.routeLongName} {selectedRoute.routeShortName}</p>
               </div>
            </Container>
         </main>
         <Footer />
      </div>
   </div>
  )
}