import '../../App.css'
import Header from '../header'
import Footer from '../footer'
import Navigation from '../navigation'
import React, { ReactElement } from 'react'


export default function LandingPage(): ReactElement {
  return (
    <div id="content" className="content-styling">
      <Header />
      <Navigation />
      <main role="main" className="main-styling" tabIndex={1}>
         <div className="flex-item">
            <h2>Welcome to my Trip Planner!</h2>
            <p>This is an accessible trip planner designed and developed by Jennilee Rose Designs.</p>
         </div>
      </main>
      <Footer />
   </div>
  )
}