import React from 'react'
import { observer, inject } from 'mobx-react'
import {Route, Redirect} from 'react-router-dom'

const PrivateRoute = ({component: Component, auth, ...rest}) => (
  <Route {...rest}
         render={props => (
           auth.logged ?
             <Component {...props} />
             :
             <Redirect to={{pathname: "/login", state: {from: props.location}}}/>
         )}
  />
);

export default inject("auth")(observer(PrivateRoute));