import Header from '../header'
import Footer from '../footer'
import Navigation from '../navigation'
import React, { ReactElement, useState, useEffect } from 'react'
import { Container } from '@chakra-ui/react'
import { GET_ALL_STOPS, GET_DEPARTURE_BY_STOP } from '../../api'
import { useColorMode } from '@chakra-ui/react'

export default function CheckDeparturesByStop(): ReactElement {
  const colorMode = useColorMode()
  const [stops, setStops] = useState<any>()
  const [selectedStop, setSelectedStop] = useState<any>()
  const stopData = null
  // const routeData = null

  const setStopDataAsType = (data: any) => {
    console.log(data)
  }

  useEffect(() => {
    fetch(GET_ALL_STOPS)
     .then(resp => resp.json())
     .then(stopData => setStopDataAsType(stopData))
    }, [stopData])

  // const selectStop = (stopArrayIndex: string) => {
  //   console.log(stopArrayIndex)
  // }

  return (
    <div id="outer-content" className={colorMode.colorMode === 'light' ? "light-body-styles" : "dark-body-styles"}>
      <div id="content" className="content-styling">
      <Header />
      <Navigation />
      <main role="main">
        <Container variant="mainContent">
 
         <h2>Departures By Stop</h2>
            <p>Please select a stop from the drop-down menu</p>
            {/* {stops !== undefined && (
               <>
               <label className="input-label" htmlFor="route-dropdown">Routes</label>
               <select id="route-dropdown" onChange={(e) => { selectStop(e.target.value); } }>
                  {routes.routes !== undefined &&
                     routes.routes.map((route, index) => (
                        <option key={index} value={index}>{route.routeLongName}</option>
                     ))}
               </select>
               </>
            )} */}
            <div id="route-info">
            </div>
         </Container>
      </main>
      <Footer />
   </div>
   </div>
  )
}