import React, {useState, useEffect} from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import useLocalStorage from './hooks/useLocalStorage';
import Nav from './Nav';
import Routes from './Routes';
import LoadingSpinner from './LoadingSpinner';
import JoblyApi from '../api'
import jwt from 'jsonwebtoken';

export const TOKEN_STORAGE_ID = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
"SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
"FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

function App() {
    const [isLoaded, setIsLoaded] = useState(false)
    const [currUser, setCurrUser] = useState(null)
    const [applicationIds, setApplicationIds] = useState(new Set([]))
    const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID)

    useEffect(loadUser = () => {
        const getCurrUser = async () =>  {
            if(token){
                try{
                    let {username} = jwt.decode(token)
                    JoblyApi.token = token;

                    let currUser = await JoblyApi.getCurrUser(username);
                    setCurrUser(currUser)

                    setApplicationIds(new Set(currUser.applications))
                } catch(e) {
                    console.error('Error loading user:', err)
                }
            }
            setIsLoaded(true)
        }

        setIsLoaded(false);
        getCurrUser();
    }, [token])
    
    const logout = () => {
        setCurrUser(null)
        setToken(null)
    }

    const signup = (signUpData) => {
        try {
            const token = JoblyApi.signup(signUpData)
            setToken = token;
            return {success: true}
        } catch(e) {
            console.debug('SIGN UP ERROR:', e)
            return {success: false}
        }
    }

    const login = (loginData) => {
        try {
            const token = JoblyApi.login(loginData)
            setToken = token;
            return {success: true}
        } catch(e) {
            console.debug('LOG IN ERROR:', e)
            return {success: false}
        }
    }

    const hasAppliedToJob = (id) => {
        return applicationIds.has(id);
      }
    
      /** Apply to a job: make API call and update set of application IDs. */
      const applyToJob = (id) => {
        if (hasAppliedToJob(id)) return;
        JoblyApi.applyToJob(currUser.username, id);
        setApplicationIds(new Set([...applicationIds, id]));
      }
    
      if (!isLoaded) return <LoadingSpinner />;

  return (
    <BrowserRouter>
        <UserContext.Provider
            value={{currUser, setCurrUser, hasApplied, applyToJob}}>
            <div className="App">
                <Nav logout={logout} />
                <Routes login={login} signup={signup} />
        </div>
        </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;