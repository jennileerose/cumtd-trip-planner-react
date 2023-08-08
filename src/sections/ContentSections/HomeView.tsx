import Header from '../header'
import Footer from '../footer'
import Navigation from '../navigation'
import React, { ReactElement } from 'react'
import {Container} from '@chakra-ui/react'


export default function HomeView(): ReactElement {
  return (
    <div id="content" className="content-styling">
      <Header />
      <Navigation />
      <main role="main">
        <Container variant="mainContent">
         <div className="flex-item">
            <h2>Welcome to my CUMTD Trip Planner</h2>
            <p>This is a trip planner designed using the Champaign-Urbana Mass Transit District API and it is designed to be accessible to WCAG 2.0 A level standard.</p>
         </div>
         </Container>
      </main>
      <Footer />
   </div>
  )
}