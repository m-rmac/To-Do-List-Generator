import React from "react";

import '../dropDown/dropDown.style.css';


export const DropDown = ({handleChange}) => (

    
    <select className="dropDown" id="status" name="status" onChange = {handleChange}>
          <option value="all">All</option>
          <option value="incomplete">Incomplete</option>
          <option value="completed">Completed</option>
    </select>

)
