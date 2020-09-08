import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Navbar } from '../components/ui/NavBar'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { HeroeScreen } from '../components/heroes/HeroeScreen'
import { DcScreen } from '../components/dc/DcScreen'
import { SeachScreen } from '../components/search/SeachScreen'

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container mt-3">
                <Switch>

                    <Route exact path="/marvel" component={MarvelScreen} />
                    <Route exact path="/hero/:heroeId" component={HeroeScreen} />
                    <Route exact path="/dc" component={DcScreen} />
                    <Route exact path="/search" component={SeachScreen} />

                    <Redirect to="/marvel" />

                </Switch>
            </div>
        </>
    )
}
