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
    
    const todoDelete = function(todo_id) {
      let _todo = Array.from(this.state.todo);
      for(var i=0; i<_todo.length; i++) {
        if(_todo[i].id === todo_id) {
          _todo.splice(i,1);
          this.setState({
            todo: _todo,
          });
        }
      }
    }

    const todoChecked = function(todo_id) {
      let _todo = Array.from(this.state.todo);
      for(var i=0; i<_todo.length; i++) {
        if(_todo[i].id === todo_id) {
          if(_todo[i].checked === true) {
            _todo[i].checked = false;
          } else {
            _todo[i].checked = true;
          }
          this.setState({
            todo: _todo,
          });
        }
      }
    }

    return (
      <div id='App'>
        <Form todoSubmit={todoAdd.bind(this)} />
        <ToDo
          todoList={this.state.todo}
          todoDelete={todoDelete.bind(this)}
          todoChecked={todoChecked.bind(this)}
        />
      </div>
    );
  }
}

export default App;