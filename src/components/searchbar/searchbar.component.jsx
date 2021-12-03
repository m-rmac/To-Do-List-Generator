import React from "react";

import './searchbar.style.css';


export const SearchBox = ({placeholder, handleChange}) => (

<input
    className='search'
    type='search'
    placeholder={placeholder}
    onChange={handleChange}
    />

    

)