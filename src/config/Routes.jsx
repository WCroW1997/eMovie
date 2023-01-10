import React from 'react'
import {Route, Switch} from 'react-router-dom'


import Home from '../Pages/Home'
import Catalog from '../Pages/Catalog'
import Dateils from '../Pages/Dateils'

const Routes = () => {
  return (
    <Switch>
        <Route 
            path='/:category/seatch/:keyword'
            component={Catalog}
        />
        <Route 
            path='/:category/:id'
            component={Dateils}
        />
        <Route 
            path='/:category'
            component={Catalog}
        />
        <Route 
            path='/'
            exact
            component={Home}
        />
    </Switch>
  )
}

export default Routes