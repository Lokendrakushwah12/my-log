import React, { useState, useEffect } from 'react'

const CreateTodoModal = ({ closeModal }) => {
    // react-query
    const [heading, setHeading] = useState('');
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState('');

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'scroll';
        }
    }, []);

    const fetchTodo = () => {
        fetch('http://localhost:8000/todo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                heading: heading,
                description: description,
                deadline: deadline
            })

        })
            .then(async (response) => {
                const data = await response.json()
                console.log(data);
                alert("todo created successfully")
            })
    }

    const setHeadingValue = (e) => {
        setHeading(e.target.value);
    }
    const setDescriptionValue = (e) => {
        setDescription(e.target.value);
    }
    const setDeadlineValue = (e) => {
        setDeadline(e.target.value);
        console.log(e.target.value);
    }

    return (
        < div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center" >
            <div className="bg-white p-2 rounded-lg flex flex-col gap-4">
                <h2 className='font-medium text-[24px] text-[#2B2B2B]'>Create a new Log</h2>
                <div className="flex flex-col gap-4 w-[400px]">
                    <input type="text" onChange={setHeadingValue} placeholder="Title" className="border p-2 rounded-md focus:border-[#c9c9c9] outline-none" />
                    <input type="text" onChange={setDescriptionValue} placeholder="Description" className="border p-2 rounded-md focus:border-[#c9c9c9] outline-none" />
                    <input type="date" onChange={setDeadlineValue} placeholder="Deadline" className="border p-2 rounded-md focus:border-[#c9c9c9] outline-none" />
                </div>
                <div className="flex gap-4 justify-end">
                    <button onClick={closeModal} className="border py-1 px-2 rounded-md">Cancel</button>
                    <button onClick={() => { fetchTodo(); closeModal(); }} className="border py-1 px-2 rounded-md bg-[#2B2B2B] text-white">Create</button>
                </div>
            </div>
        </div >
    )
}

export default CreateTodoModal
