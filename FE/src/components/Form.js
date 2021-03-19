import React, { Component } from 'react';

class Form extends Component {
  render() {
    let value = this.props.modeModify.todo;
    return (
      <form action='/' method='post' onSubmit={function(e){
        e.preventDefault();
        this.props.todoSubmit(e.target.todo.value);
        e.target.todo.value = '';
      }.bind(this)}>
        <input type='text' name='todo' className={this.props.modeModify.mode?'modify':''} placeholder='오늘 할 일을 입력하세요' defaultValue={value}/>
        <input type='submit' value='+' />
      </form>
    );
  }
}

export default Form;