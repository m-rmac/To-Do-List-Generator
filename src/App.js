import React, {Component} from 'react';
import './App.css';


import { SearchBox } from './components/searchbar/searchbar.component';
import { ToDoCards } from './components/to-doCards/toDoCards.component';
import{ DropDown } from './components/dropDown/dropDown.component';


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      // To do list contents and searchbar field contents
      toDoList: [
        {
          "id":1,
          "content": "Complete To-do list application",
          "complete": "completed",
          "checkedStatus": true
        },

        {
          "id":2,
          "content": "File taxes",
          "complete": "incomplete",
          "checkedStatus": false
        }
      ],

      searchField: '',

      completeStatus: "all"
    }
    
   
    this.addItem = this.addItem.bind(this);

  }

// To Do List Functions (modifying the list)

  // Delete an item

deleteTodo = (id) => {
  const updatedTodos = this.state.toDoList.filter((todo) => {
    return todo.id !== id;
  });

  this.setState({
    toDoList: updatedTodos
  });
}


// Adding a new item
addItem(e){

  console.log(this._inputElement.value);
  console.log(e);
  if(this._inputElement.newinput !==""){
    var newItem = {
        content: this._inputElement.value,
        id: Date.now(),
        complete:"incomplete",
        checkedStatus: false
    };
  

  this.setState((prevState) => {
    
      return{
        toDoList: prevState.toDoList.concat(newItem)
      };
      
    
  });

  this._inputElement.value ="";
}

e.preventDefault();

}

// Changing item status (complete or not complete)

completeToDo = (id) => {

  const updateStatus = this.state.toDoList.map((toDo) => {
    

    if(id === toDo.id){

      if(toDo.complete === "incomplete")

      return{...toDo, complete:"completed", checkedStatus:true}

      else if(toDo.complete === "completed")

      return{...toDo, complete:"incomplete", checkedStatus:false}
      
    }
    
    return toDo;
  });

  this.setState({
    toDoList: updateStatus
    
  });
  
}


  render(){

    // filter based on search field

    const { toDoList, searchField, completeStatus} = this.state;

    

    var searchFilter = [];

    searchFilter = toDoList.filter(toDo =>
      toDo.content.toLowerCase().includes(searchField.toLowerCase())
      
      );


      if (completeStatus === "completed"){
        
        searchFilter = searchFilter.filter(toDo =>
          toDo.complete.match("completed")
          
          );
      }
    
      if (completeStatus === "incomplete"){
        searchFilter = searchFilter.filter(toDo =>
          toDo.complete.match("incomplete")
          
          )
      }
    
    
      
    
  
    return (
      <div className="App" >
        
        <h1 id="app-name">To-Do List Generator</h1>
        
      
    <form onSubmit={this.addItem}>
        <input 
        className="newItem"
        ref={(a) => this._inputElement = a} 
        type = "text"
        placeholder="add more items">   
        </input>

        <button type="submit"  className="submit"><i className = "fas fa-plus"></i></button>
    </form>
    
    <SearchBox
        
          placeholder={'Find to-do items'}
          handleChange = {e => this.setState({searchField: e.target.value})}

    ></SearchBox>

    <DropDown
      handleChange={e => this.setState({completeStatus: e.target.value})}
    />
      
    <ToDoCards toDoList = {searchFilter} onDelete = {this.deleteTodo} onComplete={this.completeToDo}></ToDoCards>
      

      </div>
    );
  }

}

export default App;
