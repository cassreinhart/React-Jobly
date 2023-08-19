import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import CompanyList from './CompanyList';
import CompanyDetail from './CompanyDetail'
import JobList from './JobList';
import ProfileForm from './ProfileForm';

const Routes = () => {
  return (
    <Switch>
        <Route exact path='/'>
            <Home />
        </Route>
        <Route exact path='/login'>
            <LoginForm />
        </Route>
        <Route exact path='/signup'>
            <SignUpForm />
        </Route>
        <Route exact path='/companies'>
            <CompanyList />
        </Route>
        <Route exact path='/companies/:handle'>
            <CompanyDetail />
        </Route>
        <Route exact path='/jobs'>
            <JobList />
        </Route>
        <Route exact path='/profile'>
            <ProfileForm />
        </Route>
        <Redirect to='/' />
    </Switch>
  )
}

export default Routes