import React, {Fragment, useEffect, useState} from 'react';
import axios from 'axios';
import EditTodo from './EditTodo';

const  ListTodos = () => {

    const [todos, setTodos] = useState([]);

    // delete function
    const deleteTodo = (id) => {
        axios.delete(`https://postgres-todo.herokuapp.com/todos/${id}`)
        .then(response => {
            setTodos(todos.filter(todo => todo.todo_id != id))
        })
    }

    const getTodos = () => {
        axios.get('https://postgres-todo.herokuapp.com/todos')
        .then((response) => {
            setTodos(response.data);
        })
        .catch(err => console.error(err.message))
    }

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <Fragment>
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map(todo => (
                            <tr key={todo.todo_id}>
                                <td className="align-middle">{todo.description}</td>
                                <td><EditTodo todo = {todo} /></td>
                                <td><button className="btn btn-danger" onClick={() => deleteTodo(todo.todo_id)}>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </Fragment>
    )
}

export default ListTodos;