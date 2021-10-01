import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from '../components/navigation/navbar/Navbar'
import HomePage from '../page/home/HomePage'

const AppRoutes = () => {
    return (
        <Router>
            <div>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                </Switch>
            </div>
        </Router>
    )
}

export default AppRoutes
