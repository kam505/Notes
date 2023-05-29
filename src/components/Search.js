import React from 'react';
import { MdSearch } from 'react-icons/md';

const Search = ({handleSearchNote}) =>{
    return (
        <div className='search'>
            < MdSearch className='search-icons' size='1.5em'/>
            <input 
                onChange={(Event) => 
                    handleSearchNote(Event.target.value)
                }
                type='text'
                placeholder='Пошук'
            />
        </div>
    );
};

export default Search;