import React, { Component } from 'react';
import Form from './components/Form'
import ToDo from './components/ToDo'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.todo_id = 3;
    this.state = {
      todo: [
        {id: 0, todo: '운동', checked: false},
        {id: 1, todo: '독서', checked: false},
        {id: 2, todo: '영단어 암기', checked: false},
      ]
    }
  };



  render() {
    const todoAdd = function(_todo) {
      this.setState({
        todo: this.state.todo.concat({
          id: this.todo_id++,
          todo: _todo,
          checked: false,
        })
      });
    }
    
    const todoDelete = function(e) {

    }

    const todoChecked = function(e) {

    }

    return (
      <div>
        <Form todoSubmit={todoAdd.bind(this)} />
        <ToDo todoList={this.state.todo} todoDelete={todoDelete} todoChecked={todoChecked} />
      </div>
    );
  }
}

export default App;