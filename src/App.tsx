import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react';
import LandingPage from './sections/ContentSections/LandingPage';
import RouteInformation from './sections/ContentSections/RouteInformation';
import BasicTripPlanner from './sections/ContentSections/BasicTripPlanner';

const App = () => (
   <ChakraProvider theme={theme}>
      <Router>
         <Switch>
            <Route path="/" exact>
               <LandingPage />
            </Route>
            <Route path="/route-info">
               <RouteInformation />
            </Route>
            <Route path="/basic-trip-planner">
               <BasicTripPlanner />
            </Route>
         </Switch>
      </Router>
   </ChakraProvider>
)

export default App;
