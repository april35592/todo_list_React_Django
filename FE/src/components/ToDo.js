import React, { Component } from 'react';

class ToDo extends Component {

  render() {

    return (
      <ul>
        {this.props.todoList.map(item => {
          return (
            <li id={item.id}>
              {item.todo}
              <button>×</button>
              <button>✓</button>
            </li>
          )
        })}
    </ul>
    );
  }
}

export default ToDo;