import React, { Component } from 'react';
import Form from './components/Form'
import ToDo from './components/ToDo'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    let todoLoaded = localStorage.getItem(ToDo);
    if(todoLoaded !== null) {
      todoLoaded = JSON.parse(todoLoaded);
      this.todo_id = todoLoaded[todoLoaded.length - 1].id + 1;
    } else {
      todoLoaded = [];
      this.todo_id = 1;
    }
    this.state = {
      todo: todoLoaded,
    }
  };

  render() {
    const todoAdd = (todo_text) => {
      const _todo = this.state.todo.concat({
        id: this.todo_id++,
        todo: todo_text,
        checked: false,
      });
      todoSaved(_todo);
    }
    
    const todoDelete = (todo_id) => {
      let _todo = Array.from(this.state.todo);
      for(var i=0; i<_todo.length; i++) {
        if(_todo[i].id === todo_id) {
          _todo.splice(i,1);
          todoSaved(_todo);
          break;
        }
      }
    }

    const todoChecked = (todo_id) => {
      let _todo = Array.from(this.state.todo);
      for(var i=0; i<_todo.length; i++) {
        if(_todo[i].id === todo_id) {
          if(_todo[i].checked === true) {
            _todo[i].checked = false;
          } else {
            _todo[i].checked = true;
          }
          todoSaved(_todo);
          break;
        }
      }
    }

    const todoSaved = (_todo) => {
      localStorage.setItem(ToDo, JSON.stringify(_todo));
      this.setState({
        todo: _todo,
      });
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