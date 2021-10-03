import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import Navbar from '../components/navigation/navbar/Navbar'
import SearchBar from '../components/navigation/searchbar/SearchBar'
import AnimePage from '../page/animes/AnimePage'
import HomePage from '../page/home/HomePage'

const DashboardRoute = () => {
    return (
        <div>
        <Navbar/>
        <SearchBar/>
            <div>
                <Switch>
                    <Route exact path="/anime/:animeId" component={AnimePage}/>
                    <Route to="/" exact component={HomePage}/>
                    <Redirect to="/" component={HomePage}/>
                </Switch>
            </div>
        </div>
    )
}

export default DashboardRoute

