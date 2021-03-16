import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form action='/' method='post' onSubmit={function(e){
        e.preventDefault();
        this.props.todoSubmit(e.target.todo.value);
        e.target.todo.value = '';
      }.bind(this)}>
        <input type='text' name='todo' placeholder='오늘 할 일을 입력하세요' />
        <input type='submit' value='+' />
      </form>
    );
  }
}

export default Form;