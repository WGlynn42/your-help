import React from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom"

import CharitiesIndexContainer from './CharitiesIndexContainer'
import CharityShowPage from './CharityShowPage'


export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={CharitiesIndexContainer}/>
        <Route exact path="/charities" component={CharitiesIndexContainer}/>
        <Route exact path="/charities/:id" component={CharityShowPage}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
