import React, {useState} from 'react'
import useFields from './hooks/useFields'

const SearchBar = () => {
    const [formData, handleChange, resetFormData]= useFields({
        search: ""
    })
    
    const search = async (term) => {
        const res = await axios.get(term);
        return res.data //this won't work yet- need to integrate backend route
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        search(formData.search)
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
            <button>Submit</button>
        </form>
    </div>
  )
}

export default SearchBar