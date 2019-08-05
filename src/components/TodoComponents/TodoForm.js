import React , {Component}from 'react';

class TODOForm extends Component{
    constructor(props){
        super(props);
    } 
  render() { 
      return(
          <div>
            <form onSubmit = {this.props.add}>
              <input type = "text" value = {this.props.todoList.task} name = "task" onChange = {this.props.handleChange} />
              <button onClick = {this.props.add}> AddToDo</button>
              <button onClick = {this.props.clear}> ClearToDo</button>
            </form>
          </div>
      )
  }
}  
export default TODOForm;