// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js   
import React , {Component} from 'react';
import ToDo from '../TodoComponents/Todo';

class TodoComponent extends Component {
    constructor(props){
        super(props); 
    }  

   render(){ 
      console.log(this.props.todoList);
       return(
           <div>  
               {this.props.todoList.map(todo => {
                return <ToDo todo={todo} key={todo.id}/> 
               })}
           </div>
       )
   }
}  

export default TodoComponent;
