import React from "react";
import Authentication from "./pages/authentication";
import GlobalFeed from "./pages/globalFeed";

import {Switch, Route} from 'react-router-dom'


export default () => {
  return(
  <Switch>
    <Route path='/login' component={Authentication} />
    <Route path='/register' component={Authentication} />
    <Route path='/' component={GlobalFeed} exact />
  </Switch>
  )
}