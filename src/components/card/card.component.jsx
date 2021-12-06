import React from 'react';

import "../../components/card/card.style.css";

export const Card = ({toDo, onDelete, onComplete}) => (

    <div className = {toDo.complete}>

        <p>{toDo.content}</p>
        <label className="container">
            <input  className="complete" 
            type="checkbox"
            defaultChecked={toDo.checkedStatus}
            onClick={() => onComplete(toDo.id)}></input>
            <span className="checkmark"></span>
        </label>

        <button className="delete" onClick={() => onDelete(toDo.id)}><i className = "fas fa-trash"></i></button>

    </div>

)

