import React, { useState, useEffect } from 'react'
import Card from './Card'
import CreateTodoModal from './CreateTodoModal'
import Pending from './Pending';
import Completed from './Completed';

const Mylogs = () => {
    const [OpenCreateTodo, setOpenCreateTodo] = useState(false);
    const [Todos, setTodos] = useState([]);

    const closeModal = () => {
        setOpenCreateTodo(false);
    }

    const fetchTodos = async () => {
        await fetch('http://localhost:8000/todos')
            .then(async (response) => {
                const data = await response.json();
                setTodos(data.todos);
            })
    }
    useEffect(() => {
        fetchTodos();
    }, []);

    const updateTodos = () => {
        fetchTodos();
    }

    return (
        <>

            {OpenCreateTodo && <CreateTodoModal closeModal={closeModal} updateTodos={updateTodos} />}
            <div className="flex flex-row w-[750px] gap-5 items-start">
                <Pending />
                <Completed />
            </div>
        </>
    )
}

export default Mylogs
