import React from 'react'
import useFields from './hooks/useFields'

const SearchBar = ({searchFor}) => {
    const [formData, handleChange, resetFormData]= useFields({
        search: ""
    })
    
    const handleSubmit = (e) => {
        e.preventDefault()
        searchFor(formData.search)
        resetFormData()
    }
  return (
    <div className='SearchBar'>
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            name="search" 
            value={formData.search}
            placeholder='Enter search term...'
            onChange={handleChange}/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default SearchBar