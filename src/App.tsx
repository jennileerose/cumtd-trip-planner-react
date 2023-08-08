import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react';
import HomeView from './sections/ContentSections/HomeView';
import RouteInformation from './sections/ContentSections/RouteInformation';
import BasicTripPlanner from './sections/ContentSections/BasicTripPlanner';

const App = () => (
   <ChakraProvider theme={theme}>
      <Router>
         <Switch>
            <Route path="/" exact>
               <HomeView />
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
