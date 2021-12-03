import React from "react";

import "../to-doCards/toDoCards.style.css";
import { Card } from "../card/card.component";

export const ToDoCards = ({toDoList, onDelete}) => (


    <div className = "card-list">

        {toDoList.map(toDo => (

          <Card key = {toDo.id} toDo = {toDo} onDelete={onDelete}>

          </Card>
          
         

        ))}
       
    </div>


)