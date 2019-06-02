import React, { Component } from 'react'

export class ListTitle extends Component {

    constructor(props){
        super(props) 
            this.state = {
                listTitle: "Tout Doux List"
            }
     }

  
     handleSubmit = (event) => {
         event.preventDefault()
         const data = this.state
         console.log("final title is", data)
     }

     handleInputChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }
  

    render() {
       const {listTitle} = this.state
        return (
             
            <div>
                
                <form onSubmit={this.handleSubmit} style={{ display: 'flex' }}>
                <p style={{flex: '3'}}> Welcome to my  {listTitle}!</p>
               <input
                type="text" 
                name="listTitle" 
                style={{ flex: '10', padding: '5px' }}
                placeholder="Modify List Title..." 
               
                onChange={this.handleInputChange} 
                />
               <input 
               type="submit" 
               value="Edit"
               className= "btn"
               style={{flex: '1'}}
               />

           </form>
            </div>
        )
    }
}

export default ListTitle
