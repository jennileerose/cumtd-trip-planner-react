import Header from '../header'
import Footer from '../footer'
import Navigation from '../navigation'
import React, { ReactElement, useState, useEffect } from 'react'
import { Container, Select } from '@chakra-ui/react'
import { GET_ALL_STOPS, GET_DEPARTURE_BY_STOP } from '../../api'
import { useColorMode } from '@chakra-ui/react'
import { CUMTDStop, StopDetails } from '../../types'
import { colors } from '../../theme/colors'

export default function CheckDeparturesByStop(): ReactElement {
  const colorMode = useColorMode()
  const [stops, setStops] = useState<CUMTDStop>()
  const [selectedStop, setSelectedStop] = useState<StopDetails>()
  const stopData = null
  // const routeData = null

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

  }

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
               <label className="input-label" htmlFor="route-dropdown">Stops</label>
               <Select
                  bg={colorMode.colorMode === 'light' ? colors.AliceBlue: colors.prussianBlue}
                  border="1px solid"
                  borderColor={colorMode.colorMode === 'light' ? colors.richBlack: colors.coolWhite}
                  color={colorMode.colorMode === 'light' ? colors.richBlack: colors.coolWhite}
                  placeholder='Select A Stop'
                  id="route-dropdown"
                  onChange={(e) => { selectStop(e.target.value); }}
                >
                  {stops.stops !== undefined &&
                     stops.stops.map((stop, index) => (
                        <option key={index} value={index}>{stop.stopName}</option>
                     ))}
                </Select>
               </>
            )}
            <div id="stop-info">
            </div>
         </Container>
      </main>
      <Footer />
   </div>
   </div>
  )
}