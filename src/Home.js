import React from 'react'
import LoginOrSignUpButtons from './LoginOrSignUpButtons'

const Home = () => {
  return (
    <div className='Home'>
        <h1>Jobly</h1>
        <h3>All the jobs in one place.</h3>
        {user ? (<h2>Welcome back, {user.username}</h2>) : <LoginOrSignUpButtons />}
    </div>
  )
}

export default Home