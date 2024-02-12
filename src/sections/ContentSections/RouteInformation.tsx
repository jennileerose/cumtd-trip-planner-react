// import '../../App.css'
import Header from '../header'
import Footer from '../footer'
import Navigation from '../navigation'
import React, { useState, useEffect, ReactElement } from 'react'
import { GET_ROUTES, GET_TRIPS_BY_ROUTE, GET_STOPTIMES_BY_TRIP } from '../../api'
import { CUMTDRoute, RouteDetails, TripInfo, StopTimesByTrip, StopPoint } from '../../types'
import { Container, useColorMode, Select, Flex, Box, Button } from '@chakra-ui/react'
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
   const [rawTripData, setRawTripData] = useState()
   const [tripData, setTripData] = useState<TripInfo[]>()
   const [rawStopByTripData, setRawStopByTripData] = useState<any>()
   const [stopsByTripData, setStopsByTripData] = useState()

   const fetchTripsByRoute = () => {
      fetch(GET_TRIPS_BY_ROUTE + selectedRoute.routeID)
      .then(resp => resp.json())
      .then(data => setRawTripData(data))
   }

   const fetchStopTimesByTrip = (tripID: string) => {
      fetch(GET_STOPTIMES_BY_TRIP + tripID)
      .then(resp => resp.json())
      .then(data => setRawStopByTripData(data))
   }

   // setting trip IDs into data from JSON string
   const structureTripData = (data: any) => {
      const tempTripsArray = [] as TripInfo[]
      if(data !== null || data !== undefined) {
         console.log(data.trips)
         data.trips.forEach((tripData: any) =>{
            tempTripsArray.push({
               trip_id: tripData.trip_id,
               trip_headsign: tripData.trip_headsign,
               route_id: tripData.route_id,
               block_id: tripData.block_id,
               direction: tripData.direction,
               service_id: tripData.service_id,
               shape_id: tripData.shape_id
            })
         })
         console.log('temp trip array', tempTripsArray)
      }
      else {
         tempTripsArray.push({
            trip_id: '',
            trip_headsign: 'No trips found',
            route_id: '',
            block_id: '',
            direction: '',
            service_id: '',
            shape_id: ''
         })
      }
      setTripData(tempTripsArray)
   }  
   
   const getTripIDs = () => {
      // fetch trips here
      fetchTripsByRoute()
      // re-structure the data here
      if(rawTripData !== undefined) {
         structureTripData(rawTripData)
      }
   }
   
   const getStopTimesByTrips = () => {
      if(tripData !== undefined) {
         if(tripData[0].trip_id !== '') {
            getStopTimesByTrips()
            console.log(tripData)
            const StopsByTripArray = [] as StopTimesByTrip[]
            tripData.forEach((trip: TripInfo) => {
               fetchStopTimesByTrip(trip.trip_id)
               if (rawStopByTripData !== undefined) {
                  console.log(rawStopByTripData.stop_times)
               } else {
                  console.log('no stop times')
               }
            })
         }
      }
   }

   // called via button after selecting a route
   const getTimetableData = () => {
      getTripIDs()
      getStopTimesByTrips()
   }

   const setDataAsType = (data: any) => {
      if(data !== null || data !== undefined) {
         let routeListObject = {} as CUMTDRoute
         let tempRouteInfo = {} as RouteDetails
         const tempRouteArray = [] as RouteDetails[]
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
                  <Flex direction="row" flexWrap="wrap">
                     <Box>
                        <label className="input-label" htmlFor="route-dropdown">Routes</label>
                     </Box>
                     <Box>
                        <Select
                           className="dropdown-option"
                           bg={colorMode.colorMode === 'light' ? colors.AliceBlue: colors.prussianBlue}
                           border="1px solid"
                           borderColor={colorMode.colorMode === 'light' ? colors.richBlack: colors.coolWhite}
                           color={colorMode.colorMode === 'light' ? colors.richBlack: colors.coolWhite}
                           placeholder='Select A Route'
                           id="route-dropdown"
                           onChange={(e) => { SelectRoute(e.target.value); }}
                        >
                           {routes.routes.map((route, index) => (
                              <option key={index} value={index}>{route.routeLongName}</option>
                           ))}
                        </Select>
                     </Box>
                  </Flex>
                  </>
               )}
               <Button variant="primary" onClick={() => getTimetableData()}>Check Data</Button>
               <div id="route-info">
                  <p>{selectedRoute.routeLongName} {selectedRoute.routeShortName}</p>
                   {rawStopByTripData !== undefined && (
                     <p>{JSON.stringify(rawStopByTripData)}</p>
                  )}
                  {/* {tripData !== undefined && 
                     <>
                        <p>{tripData[0].trip_id}</p>
                        <p>{tripData[0].trip_headsign}</p>
                     </>
                  } */}
                  {/* {rawTripData !== undefined && (
                     <p>{JSON.stringify(rawTripData)}</p>
                  )} */}
               </div>
            </Container>
         </main>
         <Footer />
      </div>
   </div>
  )
}