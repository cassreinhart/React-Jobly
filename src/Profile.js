import React from 'react'
import ProfileForm from './ProfileForm'
import useFields from './hooks/useFields'

const Profile = () => {
  return (
    <div className='Profile'>
        <h2>Profile</h2>
        <ProfileForm />
    </div>
  )
}

export default Profile