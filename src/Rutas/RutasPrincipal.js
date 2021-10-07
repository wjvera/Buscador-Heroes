import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";


import LoginScreen from '../components/login/LoginScreen';
import { Rutas } from './Rutas';

export const RutasPrincipal = () => {
    return (
    <Router>
      <div> 

        <Switch>
          <Route exact path="/login" component={LoginScreen}/>
          <Route path="/" component={Rutas}/>
        </Switch>

      </div>
    </Router>
    )
}
