import React from "react";

import "../to-doCards/toDoCards.style.css";
import { Card } from "../card/card.component";

export const ToDoCards = props => (

    <div className = "card-list">
        
      {/* {props.toDoList.map(toDo => (
        <Card key={toDo.id} toDo ={toDo}/>
        ))} */}

        {props.toDoList.map(toDo => (

          <Card key = {toDo.id} toDo = {toDo}/>

        ))}

    </div>


)