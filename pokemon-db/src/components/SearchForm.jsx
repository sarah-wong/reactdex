import React from 'react'

function SearchForm({query, setQuery}) {
    
    function handleChange(evt){
        evt.preventDefault();
        setQuery(evt.target.value.toLowerCase());
    }

    return (
        <input type="text" name="searchbar" value={query} onChange={handleChange} />
    )
}

export default SearchForm