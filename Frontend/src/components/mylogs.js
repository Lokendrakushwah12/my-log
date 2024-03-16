import React, { useState } from 'react'
import Card from './Card'
import CreateTodoModal from './CreateTodoModal'

const Mylogs = () => {
    const [OpenCreateTodo, setOpenCreateTodo] = useState(false);
    const [Todos, setTodos] = useState([]);

    const closeModal = () => {
        setOpenCreateTodo(false);
    }

    fetch('http://localhost:8000/todos')
        .then(async (response) => {
            const data = await response.json()
            setTodos(data.todos);
        })


    return (
        <>
            {OpenCreateTodo && <CreateTodoModal closeModal={closeModal} />}
            <div className="flex flex-col p-6 w-[990px] gap-4 rounded-xl border items-start">
                <div className="head flex justify-between w-full items-center">
                    <h2 className='font-medium text-[24px] text-[#2B2B2B]'>my logs</h2>
                    <svg onClick={() => setOpenCreateTodo(true)} className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                        <rect x="9.07153" y="0.5" width="2.85714" height="20" fill="#2B2B2B" />
                        <rect x="0.5" y="11.9287" width="2.85715" height="20" transform="rotate(-90 0.5 11.9287)" fill="#2B2B2B" />
                    </svg>
                </div>
                <svg width="944" height="1" viewBox="0 0 944 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" width="943" height="1" fill="#D9D9D9" />
                </svg>
                <div className="flex flex-wrap gap-5">
                    <Card Todos={Todos} />
                </div>
            </div>
        </>
    )
}

export default Mylogs
