import React, { Component } from 'react';

class ToDo extends Component {

  render() {
    return (
      <ul>
        {this.props.todoList.map(item => {
          return (
            <li key={item.id} id={item.id}>
              {item.todo}
              <span className='right'>
                <button onClick={function(e) {
                  this.props.todoDelete(item.id);
                }.bind(this)}>×</button>
                <button onClick={function(e) {
                  document.getElementById(item.id).classList.toggle("checked");
                  this.props.todoChecked(item.id);
                }.bind(this)}>✓</button>
              </span>
            </li>
          )
        })}
    </ul>
    );
  }
}

export default ToDo;