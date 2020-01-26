import React, { Component } from 'react';
import TodoItem from './TodoItem';
import { List } from "antd";

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