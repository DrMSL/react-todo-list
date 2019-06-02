import React, { Component } from 'react'

export class EditTodo extends Component {
   
    constructor(props){
        super(props) 
            this.state = {
                title: ""
            }
     }

  
     handleSubmit = (event) => {
         event.preventDefault()
         const data = this.state
         console.log("final title is", data)
        //  this.props.editTodo(this.state.title);
        // this.setState({ title: '' });
     }

     handleInputChange = (event) => {
        event.preventDefault()
        // console.log(event)
        // console.log(event.target.name)
        // console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }
  




    // editTodo = (e) =>{
    //     console.log(this.props)
    // }
    render() {
        // const { id, title } = this.props.todo;
        return (
            <form onSubmit={this.handleSubmit}>
               <input 
               type="text" 
               name="title" 
               placeholder="Edit Task..."
            //    value={this.state.title}
            onChange={this.handleInputChange} 
                />
                { ' ' } 
                <button >Edit</button> 
            </form>
        )
    }
}



export default EditTodo
