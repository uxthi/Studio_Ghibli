import React from 'react'
import { Redirect, Route, Switch, Router } from 'react-router-dom'
import { routes } from './routes'
import { history } from './history'

export const Navigation = () => {
  return (
    <Router history={history}>
      <Switch>
        {routes.map(item => (
          <Route key={item.path} path={item.path} exact component={item.component} />
        ))}
        <Redirect to="/" exact />
      </Switch>
    </Router>
  )
}
