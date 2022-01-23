import React, { useState } from 'react'
import {
    FormGroup,
    Input,
    InputGroup,
    InputGroupAddon,
    Button,
    Form,
   
  } from "reactstrap"
  import { v4 as uuidv4 } from 'uuid';


const TodoForm = ({addTodos}) => {
    const[todoString,setTodoString]=useState("")
    const handleSubmit = e => {
        e.preventDefault();
        if (todoString === "") {
          return alert("Please fill some value");
        }
        const todo = {
          todoString,
          id:uuidv4()
        };
    
        addTodos(todo);
    
        setTodoString("");
      };
    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                    <Input
                        type='text'
                        name='todo'
                        placeholder='Enter a todo string'
                        id='todo'
                        value={todoString}
                        onChange={(e)=>(setTodoString(e.target.value))}

                    />
                </InputGroup>
                <InputGroupAddon adontype="prepend">
                    <Button color="success">Add Todo</Button>
                </InputGroupAddon>
            </FormGroup>
        </Form>
    )
}

export default TodoForm
