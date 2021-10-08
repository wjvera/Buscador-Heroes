import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import DcScreen from '../components/dc/DcScreen'

import { HeroesScreen } from '../components/Heroes/HeroesScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { Navbar } from '../components/navbar/Navbar'

export const Rutas = () => {
    return (
        <>
            <Navbar />
            
            <div className="container mt-3">
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen}/>
                    <Route exact path="/heroe/:heroeId" component={HeroesScreen}/>
                    <Route exact path="/dc" component={DcScreen}/>
                
                    <Redirect to="/marvel"/>
                </Switch>
            </div>
        </>
    )
}
