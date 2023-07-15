import React from 'react'
import useFields from './hooks/useFields'

const ProfileForm = () => {
    const [data, handleChange, resetFormData] = useFields({
        username: '',
        firstName: '',
        lastName: '',
        email: ''
    }) //change this later to have currentUser data
  return (
    <div className='ProfileForm'>
        <form>
            <label htmlFor="username">Username</label>
            <input 
                type="text" 
                name="username"
                value={data.username}
                onChange={handleChange}
            />
            <label htmlFor="firstName">First Name</label>
            <input 
                type="text" 
                name="firstName"
                value={data.firstName}
                onChange={handleChange}
            />
            <label htmlFor="lastName">Last Name</label>
            <input 
                type="text" 
                name="lastName"
                value={data.lastName}
                onChange={handleChange}
            />
            <label htmlFor="email">Email</label>
            <input 
                type="text" 
                name="email"
                value={data.email}
                onChange={handleChange}
            />
        </form>
    </div>
  )
}

export default ProfileForm