import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todos extends Component {
    render() {
      return (
        <div>
          <TodoItem> </TodoItem> 
          <TodoItem> </TodoItem>
        </div>
      )
    }
  }

  export default Todos;