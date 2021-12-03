import React from "react";

export const NewToDo = ({placeholder, handleChange, onSubmit}) => (

    <form onSubmit={onSubmit}>
        <input 
        ref={_inputElement}
        onChange={handleChange}
        placeholder={placeholder}>
            
        </input>
        <button type="submit"  className="submit"><i className = "fas fa-plus"></i></button>
    </form>



)