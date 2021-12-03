import React, {Component} from 'react';
import './App.css';


import { SearchBox } from './components/searchbar/searchbar.component';
import { ToDoCards } from './components/to-doCards/toDoCards.component';
import { NewToDo } from './components/newToDo/newToDo';

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

      addItemField:''
    }
    this.deleteTodo = this.deleteTodo.bind(this);
      this.addItem = this.addItem.bind(this);


  }

  // To Do List Functions (modifying the list)

  deleteTodo(id) {
    this.setState((prevState) => ({
        toDoList: prevState.todos.filter(item => item.id !== id),
    }))
};

addItem(e, _inputElement){
  if(_inputElement.value !==""){
    var newItem = {
        content: this._inputElement.value,
        id: Date.now(),
        complete:false
    };
  console.log(_inputElement.value)

  this.setState((prevState) => {
    
      return{
        toDoList: prevState.toDoList.concat(newItem)
      };
      
    
  });

  _inputElement.value ="";
}
console.log(this.state.toDoList);
console.log(this.state.addItemField);
e.preventDefault();

}

  render(){

    const { toDoList, searchField} = this.state;
    const filteredToDoList = toDoList.filter(toDo =>
      toDo.content.toLowerCase().includes(searchField.toLowerCase())
      )

    return (
      <div className="App">
        <h1>To-Do List Generator</h1>

        <SearchBox
          placeholder="Find to-do items"
          handleChange = {e => this.setState({searchField: e.target.value})}

        ></SearchBox>

      <NewToDo
        placeholder="add more items"
        handleChange= {e => this.setState({addItemField: e.target.value})}
        onSubmit = {this.addItem}
      />
             
      
      <ToDoCards toDoList = {filteredToDoList} onDelete = {this.deleteTodo}></ToDoCards>

      </div>
    );
  }

}

export default App;
