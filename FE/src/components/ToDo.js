import React, { Component } from 'react';

class ToDo extends Component {

  render() {
    return (
      <ul>
        {this.props.todoList.map(item => {
          return (
            <li id={item.id}>
              {item.todo}
              <button onClick={function(e) {
                this.props.todoDelete(item.id)
              }.bind(this)}>×</button>
              <button onClick={function(e) {
                this.props.todoChecked(item.id)
              }.bind(this)}>✓</button>
            </li>
          )
        })}
    </ul>
    );
  }
}

export default ToDo;