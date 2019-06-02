import React, { Component } from 'react';
import Task from './Task';
import PropTypes from 'prop-types';


class Todos extends Component {


  render() {
    

    return this.props.todos.map((todo) => (
     
     <Task key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} editTodo={this.props.editTodo}  />

   

    ));



   

  }
}

// PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  // markComplete: PropTypes.func.isRequired,
  // delTodo: PropTypes.func.isRequired,
}

export default Todos;