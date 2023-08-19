import React, {useState, useEffect} from 'react'
import SearchBar from './SearchBar'
import Company from './Company'
import JoblyApi from '../api'
import useFetch from './hooks/useFetch'

const CompanyList = () => {
    const [companies, setCompanies] = useState(null)

    const getCompanies = () => {
        search()
    }

    useEffect(getCompanies, [])

    const search = async () => {
        let companies = await JoblyApi.getCompanies(name);
        setCompanies(companies);
    }
  return (
    <div className='CompanyList'>
        {!companies ? 
            (<h4>Loading...</h4>)
            :
            (<div>
                <SearchBar searchFor={search}/>
                <ul>
                    {companies.map(c => (
                        <Company 
                            key={c.handle} 
                            handle={c.handle}
                            name={c.name}
                            description={c.description}
                            logo={c.logoUrl}
                        />))}
                </ul>
            </div>)
        }
    </div>
  )
}

export default CompanyList