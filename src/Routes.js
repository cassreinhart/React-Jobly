import React from 'react'
import { Route, Switch } from 'react-router-dom';

const Routes = () => {
  return (
    <Switch>
        <Route exact path='/companies'>
            <CompanyList />
        </Route>
        <Route exact path='/jobs'>
            <JobList />
        </Route>
        <Route exact path='/profile'>
            <Profile />
        </Route>
        <Route exact path='/login'>
            <LoginForm />
        </Route>
        <Route exact path='/signup'>
            <SignUpForm />
        </Route>
        <Route exact path='/' >
            <Home />
        </Route>
    </Switch>
  )
}

export default Routes