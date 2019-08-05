import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component { 
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state 
    constructor(props){
      super(props); 
      this.state =  {  
                   task: {
                      task : "",
                      id : "",
                      completed :false
                   },

                  data:[
                      {
                        task: 'Organize Garage',
                        id: 1528817077286,
                        completed: false
                      }
                    ] 
                  }
               }    
                 
     add = (event) => {
       event.preventDefault();
       this.setState({
                     data: [...this.state.data , this.state.task]})
     }  

     clear = () => {
       this.setState({data: [{ task: 'Organize Garage',
                               id: 1528817077286,
                              completed: false}] 
                            })}  

      handleChange = (event) => {
        event.preventDefault();
        this.setState({ 
                      task: {[event.target.name]: event.target.value ,
                        id : Date.now(), 
                        completed: false}})
      }                    
  render() 
  {  
    console.log(this.state.data);
    return (
      <div>
         <TodoList todoList = {this.state.data}/>
        <TodoForm clear = {this.clear}  add = {this.add} todoList = {this.state.data} handleChange = {this.handleChange}/>
      </div>
    );
  }
}

export default App;
