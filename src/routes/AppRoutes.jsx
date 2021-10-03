import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from '../components/navigation/navbar/Navbar'
import SearchBar from '../components/navigation/searchbar/SearchBar'
import AnimePage from '../page/animes/AnimePage'
import HomePage from '../page/home/HomePage'

const AppRoutes = () => {
    return (
        <Router>
            <div>
                <Navbar/>
                <SearchBar/>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/anime/:id" component={AnimePage} />
                </Switch>
            </div>
        </Router>
    )
}

export default AppRoutes
