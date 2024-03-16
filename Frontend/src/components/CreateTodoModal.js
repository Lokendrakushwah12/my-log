import React, { useState, useEffect } from 'react'
// import Mylogs from './mylogs';

const CreateTodoModal = ({ closeModal }) => {
    // react-query
    const [heading, setHeading] = useState('');
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState('');
    const [headingError, setHeadingError] = useState(false);
    const [deadlineError, setDeadlineError] = useState(false);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'scroll';
        }
    }, []);

    const fetchTodo = () => {
        if (!heading.trim()) {
            setHeadingError(true);
            return;
        } else {
            setHeadingError(false);
        }

        if (!deadline.trim()) {
            setDeadlineError(true);
            return;
        } else {
            setDeadlineError(false);
        }

        fetch('http://localhost:8000/todo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                heading: heading,
                description: description || "No description",
                deadline: deadline
            })

        })
            .then(async (response) => {
                const data = await response.json();
                console.log(data);
                if (response.ok) {
                    closeModal();
                }
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
                    <div className="flex flex-col gap-1">
                        <input type="text" onChange={setHeadingValue} placeholder="Title" className="border p-2 rounded-md focus:border-[#c9c9c9] outline-none" />
                        {headingError && <p className="text-[12px] text-red-500 pl-2">*Heading is required</p>}
                    </div>
                    <textarea type="text" onChange={setDescriptionValue} placeholder="Description" className="border p-2 rounded-md focus:border-[#c9c9c9] outline-none" />
                    <div className="flex flex-col gap-1">
                        <input type="date" onChange={setDeadlineValue} placeholder="Deadline" className="border p-2 rounded-md focus:border-[#c9c9c9] outline-none" />
                        {deadlineError && <p className="text-[12px] text-red-500 pl-2">*Deadline is required</p>}
                    </div>
                </div>
                <div className="flex gap-4 justify-end">
                    <button onClick={closeModal} className="border py-1 px-2 rounded-md">Cancel</button>
                    <button onClick={() => { fetchTodo() }} className="border py-1 px-2 rounded-md bg-[#2B2B2B] text-white">Create</button>
                </div>
            </div>
        </div >
    )
}

export default CreateTodoModal
