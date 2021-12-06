import React from 'react';

import "../../components/card/card.style.css";

export const Card = ({toDo, onDelete, onComplete}) => (

    <div className = {toDo.complete}>

        <p>{toDo.content}</p>
        <input  className="complete" 
        type="checkbox"
        onClick={() => onComplete(toDo.id)}></input>
        <button className="delete" onClick={() => onDelete(toDo.id)}><i className = "fas fa-trash"></i></button>

    </div>

)

