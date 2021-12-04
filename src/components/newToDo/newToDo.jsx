import React from "react";

import '../newToDo/newToDo.css';

export const NewToDo = ({placeholder, onSubmit, handleChange}) => (


    <form>
        <input 
        name= "newInput"
        className="newItem" 
        handleChange={handleChange}
        type = "text"
        placeholder={placeholder}>
            
        </input>
        <button type="button"  className="submit" onClick={onSubmit}><i className = "fas fa-plus"></i></button>
    </form>



)