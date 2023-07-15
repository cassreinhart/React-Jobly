import React from 'react'
import SearchBar from './SearchBar'
import Company from './Company'
import useFetch from './hooks/useFetch'

const CompanyList = () => {
  return (
    <div className='CompanyList'>
        {isLoading ? 
            (<h4>Loading...</h4>)
            :
            (<div>
                <SearchBar />
                <ul>
                    {companies.forEach(c => <Company key={c.handle} props={c}/>)}
                </ul>
            </div>)
        }
    </div>
  )
}

export default CompanyList