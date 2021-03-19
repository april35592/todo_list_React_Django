import React, { Component } from 'react';

class ToDo extends Component {

  render() {
    return (
      <ul>
        {this.props.todoList.map(item => {
          return (
            <li key={item.id} id={item.id} class={item.checked?'checked':''}>
              {item.todo}
              <span className='right'>
                <button onClick={function(e) {
                  this.props.todoModify(item);
                }.bind(this)}>Edit</button>
                <button onClick={function(e) {
                  this.props.todoDelete(item);
                }.bind(this)}>×</button>
                <button onClick={function(e) {
                  this.props.todoChecked(item);
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