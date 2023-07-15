import React from 'react'

const Job = (job) => {
    const applyForJob = () => {

    }
  return (
    <div className='Job'>
        <li key={job.id}>
            <h3>{job.title}</h3>
            <p>{job.salary}</p>
            <>{job.equity}</>
            <button onClick={applyForJob}>Apply</button>
        </li>
    </div>
  )
}

export default Job