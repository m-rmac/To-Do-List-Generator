import React from 'react';

import "../../components/card/card.style.css";

export const Card = props => (

    <div className = "card-container">

        <p>{props.toDo.content}</p>

    </div>

)

