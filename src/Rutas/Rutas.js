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

            <div>
                <Switch>
                    <Route exact path="/marvel" components={MarvelScreen}/>
                    <Route exact path="/heroe/:heroeId" components={HeroesScreen}/>
                    <Route exact path="/dc" components={DcScreen}/>
                
                    <Redirect to="/marvel"/>
                </Switch>
            </div>
        </>
    )
}
