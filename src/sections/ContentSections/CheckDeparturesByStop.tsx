import Header from '../header'
import Footer from '../footer'
import Navigation from '../navigation'
import React, { ReactElement, useState, useEffect } from 'react'
import { Container, Select, Flex, Box, Button, Spacer } from '@chakra-ui/react'
import { GET_ALL_STOPS, GET_DEPARTURE_BY_STOP } from '../../api'
import { useColorMode } from '@chakra-ui/react'
import { CUMTDStop, DepartureDetails, RouteDeparture, StopDetails } from '../../types'
import { colors } from '../../theme/colors'
// import StopMap from './StopMap'
import { getStopCoords } from './utils'
import L, { LatLngExpression } from 'leaflet';

export default function CheckDeparturesByStop(): ReactElement {
  const colorMode = useColorMode()
  const [stops, setStops] = useState<CUMTDStop>()
  const [selectedStop, setSelectedStop] = useState<StopDetails>({
    stopID: 'none',
    stopName: 'No Stop Selected',
    code: 'none',
    stopPoints: [{
      code: 'none',
      stopID: 'none',
      stopLat: 0,
      stopLon: 0,
      stop_name: 'none'
    }]
  })
  const stopData = null
  const [departureData, setDepartureData] = useState<RouteDeparture>()

  const setStopDataAsType = (data: any) => {
    console.log(data)
    if(data !== null || data !== undefined) {
      let stopListObject = {} as CUMTDStop
      let tempStopInfo = {} as StopDetails
      const tempStopArray = [] as StopDetails[]
      data.stops.forEach((stopListData: any) => {
        tempStopInfo = {
            stopID: stopListData.stop_id,
            stopName: stopListData.stop_name,
            code: stopListData.code,
            stopPoints: stopListData.stop_points
         }
         tempStopArray.push(tempStopInfo)
      })
      stopListObject = {
         time: data.time,
         changesetID: data.changeset_id,
         newChangeset: data.new_changeset,
         status: data.status,
         rqst: data.rqst,
         stops: tempStopArray
      }
      setStops(stopListObject)
   } else {
      setStops({
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
         stops: [
            {
              stopID: '',
              stopName: '',
              code: '',
              stopPoints: []
            }
         ]
      })
   }
  }

  useEffect(() => {
    fetch(GET_ALL_STOPS)
     .then(resp => resp.json())
     .then(stopData => setStopDataAsType(stopData))
    }, [stopData])

  const selectStop = (stopArrayIndex: string) => {
    console.log(stopArrayIndex)
    const index = Number(stopArrayIndex)
    let stopInfo = {} as StopDetails
    if(stops !== undefined) {
      stopInfo = stops.stops[index]
    } else {
      stopInfo = {
        stopID: 'none',
        stopName: 'No Stop Selected',
        code: 'none',
        stopPoints: [{
          code: 'none',
          stopID: 'none',
          stopLat: 0,
          stopLon: 0,
          stop_name: 'none'
        }]
      }
    }
    setSelectedStop(stopInfo)
  }

  const getDeparturesByStop = (stopID: string) => {
    console.log(stopID)
    if(stopID !== 'none') {
      fetch(GET_DEPARTURE_BY_STOP + stopID)
     .then(resp => resp.json())
     .then(routeData => setDepartureList(routeData))
    } else {
      setDepartureData({
        time: 'none',
        changesetID: 'none',
        newChangeset: false,
        status: {
            code: 0,
            msg: 'none',
        },
        rqst: {
            method: 'none',
            params: {
                routeID: 'none'
            }
        },
        departures: []
          })
        }
    }

  const setDepartureList = (data: any) => {
    if(data !== null || data !== undefined) {
      let departureListObject = {} as RouteDeparture
      let tempDepartureInfo = {} as DepartureDetails
      const tempDepartureArray = [] as DepartureDetails[]
      data.departures.forEach((departureData: any) => {
        tempDepartureInfo = {
          stopID: departureData.stop_id,
          headSign: departureData.headsign,
          route: {
            routeColor: departureData.route.route_color,
            routeID: departureData.route.route_id,
            routeLongName: departureData.route.route_long_name,
            routeShortName: departureData.route.route_short_name,
            routeTextColor: departureData.route.route_text_color
          },
          trip: departureData.trip,
          vehicleID: departureData.vehicle_id,
          origin: departureData.origin,
          destination: departureData.destination,
          isMonitored: departureData.is_monitored,
          isScheduled: departureData.is_scheduled,
          isIStop: departureData.is_istop,
          scheduled: departureData.scheduled,
          expected: departureData.expected,
          expectedMins: departureData.expected_mins,
          location: departureData.location
        }
        tempDepartureArray.push(tempDepartureInfo)
      })
      departureListObject = {
        time: data.time,
        changesetID: data.changeset_id,
        newChangeset: data.new_changeset,
        status: data.status,
        rqst: data.rqst,
        departures: tempDepartureArray
      }
      console.log(departureListObject.departures)
      setDepartureData(departureListObject)
    } else {
      setDepartureData({
      time: 'none',
      changesetID: 'none',
      newChangeset: false,
      status: {
          code: 0,
          msg: 'none',
      },
      rqst: {
          method: 'none',
          params: {
              routeID: 'none'
          }
      },
      departures: []
        })
    }
  }

  // const setUpMap = () => {
  //   if(selectedStop !== undefined && selectedStop.stopID !== 'none') {
  //     const stopCoordinates = getStopCoords(selectedStop.stopPoints)
  //       console.log(selectedStop, stopCoordinates)
  //       const map = L.map('map').setView(stopCoordinates[0], 0);
  //       L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //         maxZoom: 19,
  //         attribution:
  //           '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  //       }).addTo(map);
  //       const stopMarker = L.marker(stopCoordinates[0]).addTo(map);
  //       stopMarker
  //       .bindPopup('<p>' + selectedStop.stopName + '</p>')
  //       .openPopup();
  //     }
  // }

  // useEffect(() => {
  //   if(selectedStop !== undefined && selectedStop.stopID !== 'none') {
  //   const stopCoordinates = getStopCoords(selectedStop.stopPoints)
  //     console.log(selectedStop, stopCoordinates)
  //     const map = L.map('map').setView(stopCoordinates[0], 0);
  //     L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //       maxZoom: 19,
  //       attribution:
  //         '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  //     }).addTo(map);
  //     const stopMarker = L.marker(stopCoordinates[0]).addTo(map);
  //     stopMarker
  //     .bindPopup('<p>' + selectedStop.stopName + '</p>')
  //     .openPopup();
  //   }
  // })

  return (
    <div id="outer-content" className={colorMode.colorMode === 'light' ? "light-body-styles" : "dark-body-styles"}>
      <div id="content" className="content-styling">
      <Header />
      <Navigation />
      <main role="main">
        <Container variant="mainContent">
         <h2>Departures By Stop</h2>
            <p>Please select a stop from the drop-down menu</p>
            {stops !== undefined && (
               <>
               <Flex direction="row">
                <Box>
                  <label className="input-label" htmlFor="route-dropdown">Stops</label>
                </Box>
                <Box>
                  <Select
                    bg={colorMode.colorMode === 'light' ? colors.AliceBlue: colors.prussianBlue}
                    border="1px solid"
                    borderColor={colorMode.colorMode === 'light' ? colors.richBlack: colors.coolWhite}
                    color={colorMode.colorMode === 'light' ? colors.richBlack: colors.coolWhite}
                    placeholder='Select A Stop'
                    id="route-dropdown"
                    onChange={(e) => {
                      selectStop(e.target.value);
                      // setUpMap();
                    }}
                  >
                    {stops.stops !== undefined &&
                      stops.stops.map((stop, index) => (
                          <option key={index} value={index}>{stop.stopName}</option>
                      ))}
                  </Select>
                </Box>
                <Box>
                  <Button variant="primary" onClick={() => getDeparturesByStop(selectedStop.stopID)}>Get Routes</Button>
                </Box>
               </Flex>
               </>
            )}
            <Flex direction="column" id="stop-info">
              <Box>
                <h3>{selectedStop.stopName}</h3>
              </Box>
              <Box>
                <div id="map" />
                {/* <StopMap stopPoints={selectedStop.stopPoints} stopName={selectedStop.stopName} /> */}
              </Box>
              <Box>
                <Flex direction="column">
                  <Box>
                    {departureData === undefined && (
                        <p>No data to display</p>
                      )}
                    {departureData !== undefined &&
                      departureData.departures.map((departure, index) => (
                        <Flex key={index} marginTop="0.25em" border="1px solid" borderColor={colorMode.colorMode === 'light' ? colors.richBlack : colors.coolWhite}>
                          <Box
                            bg={'#' + departure.route.routeColor}
                            color={'#' + departure.route.routeTextColor}
                            width="45%"
                          >
                            <p className="route-data">{departure.route.routeShortName} {departure.trip.direction} {departure.route.routeLongName}</p>
                          </Box>
                          <Spacer />
                          <Box>
                            <p className="route-data">In {departure.expectedMins} minutes </p>
                          </Box>
                        </Flex>
                      ))
                    }
                  </Box>
                </Flex>
              </Box>
            </Flex>
         </Container>
      </main>
      <Footer />
   </div>
   </div>
  )
}