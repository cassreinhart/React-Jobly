import React from 'react'
import SearchBar from './SearchBar'
import Job from './Job'

const JobList = () => {
  return (
    <div>
        <SearchBar />
        <ul>
            {jobs.forEach(j => <Job key={j.id} props={j}/>)}
        </ul>
    </div>
  )
}

export default JobList