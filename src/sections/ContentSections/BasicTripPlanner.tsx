import Header from '../header'
import Footer from '../footer'
import Navigation from '../navigation'
import React, { ReactElement } from 'react'
import { Container } from '@chakra-ui/react'

export default function BasicTripPlanner(): ReactElement {
  return (
    <div id="content" className="content-styling">
      <Header />
      <Navigation />
      <main role="main">
        <Container variant="mainContent">
         <div className="flex-item">
            <h2>Trip Planner</h2>
            <p>This app is a work in progress...return soon for more features!</p>
         </div>
         </Container>
      </main>
      <Footer />
   </div>
  )
}