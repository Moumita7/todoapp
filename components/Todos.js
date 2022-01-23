 import React from 'react'
 import { ListGroupItem,ListGroup } from "reactstrap";
import {FaCheckDouble} from "react-icons/fa"

const Todos = ({Todos,markComplete}) => {
    return (
       <ListGroup className='mt-5 mb-2 items'>
       {Todos.map(todo=>(
        <ListGroupItem  key={todo.id}>
            {todo.todoString}
            <span className="float-right" onClick={()=>markComplete(todo.id)}>
                <FaCheckDouble/>
            </span>

            </ListGroupItem>
       ))}
          
       </ListGroup>
    )
}

export default Todos
