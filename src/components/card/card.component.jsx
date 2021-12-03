import React from 'react';

import "../../components/card/card.style.css";

export const Card = ({toDo, onDelete}) => (

    <div className = "card-container">

        <p>{toDo.content}</p>
        <button className="complete"><i className = "fas fa-check-square"></i></button>
        <button className="delete" onClick={() => 
           onDelete(toDo.id)}><i className = "fas fa-trash"></i></button>

    </div>

)

