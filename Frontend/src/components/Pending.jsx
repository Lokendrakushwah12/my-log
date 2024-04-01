import React, { useState, useEffect } from 'react'
import Loader from './Loader.jsx';
import Card from './Card.jsx'
import CreateTodoModal from './CreateTodoModal.jsx'

const Pending = () => {
    const [OpenCreateTodo, setOpenCreateTodo] = useState(false);
    const [Todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true); // New loading state

    const closeModal = () => {
        setOpenCreateTodo(false);
    }

    const fetchTodos = async () => {
        setLoading(true); // Set loading to true before fetching
        await fetch('https://my-log-backend.onrender.com/todos')
            .then(async (response) => {
                const data = await response.json();
                setTodos(data.todos);
                setLoading(false); // Set loading to false after fetching
            })
    }
    useEffect(() => {
        fetchTodos();
    }, []);

    const updateTodos = () => {
        fetchTodos();
    }
    const colors = [
        "bg-[#CEDDFC]",
        "bg-[#FDECDB]",
        "bg-[#F9CFD1]",
        "bg-[#D5CDFE]",
        "bg-[#C4F4E4]",
        "bg-[#C3F1FB]",
        "bg-[#FAF5CA]",
        "bg-[#FBDCED]",
        "bg-[#D4E9FE]",
    ];
    return (
        <>
            {OpenCreateTodo && <CreateTodoModal closeModal={closeModal} updateTodos={updateTodos} />}
            <div className="flex flex-col p-6 w-full max-w-[1000px] grp gap-4 rounded-xl border items-start bg-[#f4f5f6]">
                <div className="head flex justify-between w-full items-center">
                    <h2 className='font-medium text-[24px] text-[#2B2B2B]'>Pending</h2>
                    <svg onClick={() => setOpenCreateTodo(true)} className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                        <rect x="9.07153" y="0.5" width="2.85714" height="20" fill="#2B2B2B" />
                        <rect x="0.5" y="11.9287" width="2.85715" height="20" transform="rotate(-90 0.5 11.9287)" fill="#2B2B2B" />
                    </svg>
                </div>
                <hr className='w-full' />
                <div className="ml-4 flex flex-wrap w-full justify-start gap-6">
                    {loading && (<Loader />)}
                    {Todos.map((todo, index) => (
                        <Card index={index} todo={todo} updateTodos={updateTodos} bg={colors[(index + 4) % colors.length]} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Pending
