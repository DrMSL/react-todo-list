import React, { Component } from 'react';
import {  BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/layout/Header';
import ListTitle from './components/ListTitle';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import uuid from 'uuid';

import './App.css';


class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Learn React',
        completed: true
      },
      {
        id: uuid.v4(),
        title: 'Figure out states',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Figure out more',
        completed: true
      }
    ]

  }


  // Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
    console.log(localStorage.getItem('todos'));
  }

    // Delete Todo
    delTodo = async (id) => {
      await  this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
      console.log(localStorage.getItem('todos'));
    }

     // Add Todo
     addTodo = async (title) => {
       const newTodo = {
         id: uuid.v4(),
         title: title,
         completed: false
       }
      await this.setState({ todos: [...this.state.todos, newTodo] });
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
      console.log(localStorage.getItem('todos'));
     }

   

     
  

  render() {
    // console.log(this.state.todos)

    // console.log(this.state.todos[0].title);
    return (
      <Router>
        <div className="App">
          <div className="container">
          <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <ListTitle />
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
                <AddTodo addTodo= {this.addTodo}/>
              </React.Fragment>
            )} />
            <Route path="/about" component= { About }/>
          </div>
        </div>
      </Router>
    );
  }
}


export default App;
