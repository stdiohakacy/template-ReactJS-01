import React from 'react'
import './App.css'
import { Route, Switch, Link } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'

const HatsPage = () => (
    <div>
        Hats page
    </div>
)

function App() {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/hats' component={HatsPage} />
            </Switch>
        </div>
    )
}

export default App
