import React,{Component} from 'react';

class ToDo extends Component {
    constructor(props){
        super(props); 
        this.state = {
                     toDo :{task: ""}
        };
    }  

    render(){
        return (
            <div> 
                <p>{this.props.todo.task}</p>
                 </div>
        )
    }
}  

export default ToDo;