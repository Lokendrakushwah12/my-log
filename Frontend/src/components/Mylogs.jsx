import React, { useState, useEffect } from 'react'
import Card from './Card.jsx'
import CreateTodoModal from './CreateTodoModal.jsx'
import Pending from './Pending.jsx';
import Completed from './Completed.jsx';

const Mylogs = () => {
    const [OpenCreateTodo, setOpenCreateTodo] = useState(false);
    const [Todos, setTodos] = useState([]);

    const closeModal = () => {
        setOpenCreateTodo(false);
    }

    const fetchTodos = async () => {
        await fetch('https://my-log-backend.onrender.com/todos')
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
            <div className="flex flex-row w-[750px] grp gap-5 items-start">
                <Pending />
                <Completed />
            </div>
        </>
    )
}

export default Mylogs
