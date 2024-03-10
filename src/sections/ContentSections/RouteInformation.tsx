import Header from '../header'
import Footer from '../footer'
import Navigation from '../navigation'
import React, { useState, useEffect, ReactElement } from 'react'
import { GET_ROUTES } from '../../api'
import { BasicRoutes, TimeTableConstants, TripDataBySubRouteType } from '../../types'
import { Container, useColorMode, Select, Flex, Box, Button, Spacer } from '@chakra-ui/react'
import { colors } from '../../theme/colors'
import {getTripData, getRouteList, getSubRoutesList} from './utils'
import TimetablesTabs from './TimetablesTabs'
import { TimePointConstants } from '../../staticData/timepoints';

export default function RouteInformation(): ReactElement {
   const colorMode = useColorMode()
   const [routes, setRoutes] = useState<BasicRoutes[]>()
   const [selectedRoute, setSelectedRoute] = useState<BasicRoutes>({
      routeID: 'none',
      routeLongName: 'no routes found',
   })
   const [fullTripsList, setFullTripsList] = useState<TripDataBySubRouteType[]>()
   const [timePointConstantsData, setTimePointConstantsData] = useState<TimeTableConstants>()
   const data = null

   // called via button after selecting a route
   const getTimetableData = () => {
      if(selectedRoute.routeID !== 'none') {
         // get all the subroutes based on the selected Base routes color
         const routeIDsAndTypes = getSubRoutesList(selectedRoute.routeID)
         // get the data and pass it to the timetables component
         setFullTripsList(getTripData(routeIDsAndTypes))
         let tempTimePointConstantsData = {} as TimeTableConstants
         TimePointConstants.forEach((data) => {
            if(data.basicRouteID === selectedRoute.routeID) {
               tempTimePointConstantsData = {
                  basicRouteID: data.basicRouteID,
                  service: data.service
               }
            }
         })
         setTimePointConstantsData(tempTimePointConstantsData)
      }
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
      setFullTripsList(undefined)
      setTimePointConstantsData(undefined)
   }
  return (
   <div id="outer-content" className={colorMode.colorMode === 'light' ? "light-body-styles" : "dark-body-styles"}>
      <div id="content" className="content-styling">
         <Header />
         <Navigation />
         <main role="main">
            <Container variant="mainContent">
               <Flex direction="column">
                  <Box>
                     <h2>Route Information</h2>
                     <p>Please select a route from the drop-down menu. Once selected, click Show timetables and then select from the list on the left side. Please allow a minute for larger routes such as the Green or Yellow</p>
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
                           <Box>
                              <Button variant="primary" onClick={() => getTimetableData()}>Show Timetables</Button>
                           </Box>
                        </Flex>
                        </>
                     )}
                  </Box>
                  <Spacer />
                  <br />
                  <Box>
                     <div id="route-info">
                        {fullTripsList !== undefined && timePointConstantsData && (
                           <TimetablesTabs basicRouteID={timePointConstantsData.basicRouteID} timetableConstants = {timePointConstantsData} fullTripsList = {fullTripsList} />
                        )}
                     </div>
                  </Box>
               </Flex>
            </Container>
         </main>
         <Footer />
      </div>
   </div>
  )
}