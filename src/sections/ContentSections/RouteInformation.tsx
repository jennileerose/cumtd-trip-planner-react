// import '../../App.css'
import Header from '../header'
import Footer from '../footer'
import Navigation from '../navigation'
import React, { useState, useEffect, ReactElement } from 'react'
import { GET_ROUTES } from '../../api'
import { BasicRoutes } from '../../types'
import { Container, useColorMode, Select, Flex, Box, Button } from '@chakra-ui/react'
import { colors } from '../../theme/colors'
import {getTripData, getRouteList, getSubRoutesList, getTimetableStopData, getFormattedtimetableData} from './utils'

export default function RouteInformation(): ReactElement {
   const colorMode = useColorMode()
   const [routes, setRoutes] = useState<BasicRoutes[]>()
   const [selectedRoute, setSelectedRoute] = useState<BasicRoutes>({
      routeID: 'none',
      routeLongName: 'no routes found',
   })
   const data = null

   // called via button after selecting a route
   const getTimetableData = () => {
      // get all the subroutes based on the selected Base routes color
      const routeIDsAndTypes = getSubRoutesList(selectedRoute.routeID)
      // get the data and organize it
      let tripData = getTripData(routeIDsAndTypes)
      // console.log('selected trip data', tripData)
      let timetableData = getTimetableStopData(selectedRoute.routeID, tripData)
      // Now that I have the timetable data I need to check it against time translations, put it in order, and flag any hoppers/alt trips
      const formattedTimetable = getFormattedtimetableData(timetableData)
      console.log('blank formatted timetable ignore this for now', formattedTimetable)
   }

   const setDataAsType = (data: any) => {
      setRoutes(getRouteList())
   }

   useEffect(() => {
      fetch(GET_ROUTES)
       .then(resp => resp.json())
       .then(data => setDataAsType(data))
      }, [data])

   const SelectRoute = (routeArrayIndex: string) => {
      const index = Number(routeArrayIndex)
      let routeInfo = {} as BasicRoutes
      if(routes !== undefined) {
         routeInfo =  routes[index]
      } else {
         routeInfo = {
            routeID: 'none',
            routeLongName: 'no routes found',
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
                           {routes.map((route, index) => (
                              <option key={index} value={index}>{route.routeLongName}</option>
                           ))}
                        </Select>
                     </Box>
                  </Flex>
                  </>
               )}
               <Button variant="primary" onClick={() => getTimetableData()}>Check Data</Button>
               <div id="route-info">
                  <p>{selectedRoute.routeLongName}</p>
                   {/*{rawStopByTripData !== undefined && (
                     <p>{JSON.stringify(rawStopByTripData)}</p>
                   )} */}
               </div>
            </Container>
         </main>
         <Footer />
      </div>
   </div>
  )
}