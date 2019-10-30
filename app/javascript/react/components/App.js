import React from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom"

import HomePage from './HomePage'
import CharitiesIndexContainer from './CharitiesIndexContainer'
import CharityShowPage from './CharityShowPage'
import EventIndexContainer from './EventIndexContainer'
import EventShowPage from './EventShowPage'
import NewEventContainer from './NewEventContainer'


export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={CharitiesIndexContainer}/>
        <Route exact path="/charities" component={CharitiesIndexContainer}/>
        <Route exact path="/charities/:id" component={CharityShowPage}/>
        <Route exact path="/events" component={EventIndexContainer}/>
        <Route exact path="/events/new" component={NewEventContainer}/>
        <Route exact path="/events/:id" component={EventShowPage}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
