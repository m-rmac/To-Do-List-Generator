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
          "complete": false
        },

        {
          "id":2,
          "content": "File taxes",
          "complete": false
        }
      ],

      searchField: '',

      filteredToDo: this.toDoList,

      completeStatus: "all"
    }
    
    // this.deleteTodo = this.deleteTodo.bind(this);
    this.addItem = this.addItem.bind(this);
    // this.completeToDo = this.completeToDo.bind(this);




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
        complete:false
    };
  

  this.setState((prevState) => {
    
      return{
        toDoList: prevState.toDoList.concat(newItem)
      };
      
    
  });

  this._inputElement.value ="";
}
console.log(this.state.toDoList);

e.preventDefault();

}

// Changing item status (complete or not complete)

completeToDo = (id) => {

  const updateStatus = this.state.toDoList.map((toDo) => {
    console.log(toDo.complete);

    if(id === toDo.id){
      return{...toDo, complete:!toDo.complete}
      
    }
    return toDo;
  });

  this.setState({
    toDoList: updateStatus
  });
}

// DropDown status
toDoStatus = () =>{


 const updatedTodos = this.state.toDoList.filter((todo) => {


  if (this.state.completeStatus === "completed")
    return todo.complete === true

  if (this.state.completeStatus === "incomplete")
    return todo.complete === false

  return todo;
});

this.setState({
  filteredToDo: updatedTodos
});


}




  render(){

    // filter based on search field

    // this.toDoStatus();

    const { toDoList, searchField} = this.state;
    const searchFilter = toDoList.filter(toDo =>
      toDo.content.toLowerCase().includes(searchField.toLowerCase())
      )
      
      

  
    return (
      <div className="App">
        <h1>To-Do List Generator</h1>
        <SearchBox
          placeholder="Find to-do items"
          handleChange = {e => this.setState({searchField: e.target.value})}

        ></SearchBox>

      <DropDown
      handleChange={e => this.setState({completeStatus: e.target.value})}
      />
      
    <form onSubmit={this.addItem}>
        <input 
        className="newItem"
        ref={(a) => this._inputElement = a} 
        type = "text"
        placeholder="add more items">   
        </input>

        <button type="submit"  className="submit"><i className = "fas fa-plus"></i></button>
    </form>
             
      
      <ToDoCards toDoList = {searchFilter} onDelete = {this.deleteTodo} onComplete={this.completeToDo}></ToDoCards>
      

      </div>
    );
  }

}

export default App;
