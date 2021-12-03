import React, {Component} from 'react';
import './App.css';


import { SearchBox } from './components/searchbar/searchbar.component';
import { ToDoCards } from './components/to-doCards/toDoCards.component';

class App extends Component {

  constructor(){
    super();

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

      searchField: ''
    }


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

        />

      
      <ToDoCards toDoList = {filteredToDoList}></ToDoCards>

      </div>
    );
  }

}

export default App;
