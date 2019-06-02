import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import EditTodo from './EditTodo';

export class Task extends Component {
    

  constructor(props){
    super(props) 
        this.state = {
            // title: "",
           editing:false
        }
 }

componentDidMount () {
  console.log("component mounted");
  this.setState({ changedText: this.props.todo.title});
}

handleEditing (event) {
  console.log("Editing");
  this.setState({ editing: true, changedText: this.props.todo.title })
}

handleEditingDone (event) {
  event.preventDefault()
  console.log("Editing Done");
  this.setState({ editing: false })
}

handleEditingChange (event) {
  var _changedText = event.target.value;
 this.setState({ changedText: _changedText});
}




    getStyle = () => {
        return {
          textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
      }

     todoItemStyle = () => {
        return {
          background: '#f4f4f4',
          padding: '10px',
          borderBottom: '1px #ccc dotted'
          
        }
      }

    markComplete = (e) =>{
        console.log(this.props)
    }

    
    render() {

        const { id } = this.props.todo;


        var viewStyle = {};
        var editStyle = {};

        if (this.state.editing) {
          viewStyle.background = '#fafafa'
        } else {
          editStyle.background = '#fafafa'
        }

        return (
            
            <div style= {this.todoItemStyle()}>
               
               <div style={viewStyle} onDoubleClick={this.handleEditing.bind(this)}>
                <p>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> 
                { ' ' } 
                <span style= {this.getStyle()}>
                {/* { title } */}
                { this.state.changedText }
                { ' ' } 
                </span>
                { ' ' } 
                <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
                </p>


                <form onSubmit={this.handleEditingDone.bind(this)}>
                  <input 
                  type="text" 
                  placeholder="Edit Task..."
                  onChange={this.handleEditingChange.bind(this)} 
                  />
                  { ' ' } 
                  <button >Edit</button> 
                </form>

                </div>

                {/* <EditTodo/> */}
            
                
            </div>

          
        )
    }
}

// PropTypes
Task.propTypes = {
    todo: PropTypes.object.isRequired,
  }

 const btnStyle = {
     background: '#ff0000',
     color: '#fff',
     border:'none',
     width: '30px',
     height: '30px',
     padding:'8px 2px 11px 2px',
     margin:'3px 0px',
     textAlign: 'center',
     borderRadius: '50%',
     cursor:'pointer',
     float:'right'
 }

export default Task

