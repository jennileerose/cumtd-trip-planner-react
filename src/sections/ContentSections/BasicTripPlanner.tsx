import '../../App.css'
import Header from '../header'
import Footer from '../footer'
import Navigation from '../navigation'
import React, { ReactElement } from 'react'


export default function BasicTripPlanner(): ReactElement {
  return (
    <div id="content" className="content-styling">
      <Header />
      <Navigation />
      <main role="main" className="main-styling" tabIndex={1}>
         <div className="flex-item">
            <h1>Trip Planner</h1>
            <h2>This app is a work in progress...return soon for more features!</h2>
         </div>
      </main>
      <Footer />
   </div>
  )
}