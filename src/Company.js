import React from 'react'

const Company = (company) => {
  return (
    <div className='Company'>
        <li key={company.handle}>
            <h3>{company.name}</h3>
            <p>{company.description}</p>
        </li>
    </div>
  )
}

export default Company