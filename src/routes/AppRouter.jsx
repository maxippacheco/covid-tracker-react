import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route  
} from "react-router-dom";
import { AvalaibleCountriesScreen } from "../components/AvalaibleCountriesScreen";
import { ContinentsScreen } from "../components/ContinentsScreen";
import {CountriesScreen} from '../components/CountriesScreen';
import { Navbar } from "../components/Navbar";
import { WorldScreen } from "../components/WorldScreen";


export const AppRouter = () => {
    return (
        
        <Router>
            
            <Navbar />

            <div>
            <Switch>
            <Route 
                exact path='/countries' 
                component={CountriesScreen} 
            />

            <Route 
                exact path='/world' 
                component={WorldScreen} 
            />

            <Route 
                exact path='/avalaibles'
                component={AvalaibleCountriesScreen}
            />

            <Route 
                exact path='/continents'
                component={ContinentsScreen}
            />

            
           </Switch>
           </div>

        </Router>
    )
}

//TODO: AUTH ROUTES