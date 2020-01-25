import React, { Component } from 'react';
import CreateTodo from '../Todos/CreateTodo';

class TodosContainer extends Component {
    render() { 
      return (
        <div>
            <CreateTodo></CreateTodo>
        </div>
        )
    }
      
  }

  export default TodosContainer;