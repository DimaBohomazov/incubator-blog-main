import React from "react";
import {Switch, Route} from 'react-router-dom'
import Authentication from "./pages/authentication";
import GlobalFeed from "./pages/globalFeed";

export default () => {
  return(
  <Switch>
    <Route path='/login' component={Authentication} />
    <Route path='/register' component={Authentication} />
    <Route path='/' component={GlobalFeed} exact />
  </Switch>
  )
}