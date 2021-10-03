import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import DashboardRoute from './DashboardRoutes'

const AppRoutes = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route  path="/" component={DashboardRoute} />
                </Switch>
            </div>
        </Router>
    )
}

export default AppRoutes
