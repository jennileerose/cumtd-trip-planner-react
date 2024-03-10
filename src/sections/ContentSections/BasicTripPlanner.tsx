import Header from '../header'
import Footer from '../footer'
import Navigation from '../navigation'
import React, { ReactElement } from 'react'
import { Container, useColorMode } from '@chakra-ui/react'

export default function BasicTripPlanner(): ReactElement {
  const colorMode = useColorMode()
  return (
    <div id="outer-content" className={colorMode.colorMode === 'light' ? "light-body-styles" : "dark-body-styles"}>
      <div id="content" className="content-styling">
        <Header />
        <Navigation />
        <main role="main">
          <Container variant="mainContent">
          <div className="flex-item">
              <h2>Trip Planner</h2>
              <p>This app is a work in progress and this feature has not yet been implemented.</p>
          </div>
          </Container>
        </main>
        <Footer />
    </div>
   </div>
  )
}