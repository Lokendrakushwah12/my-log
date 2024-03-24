import React, { useState, useEffect } from 'react'

const Card = ({ Todos, updateTodos }) => {

    const getRandomColor = () => {
        const colors = [
            "[#CEDDFC]",
            "[#FDECDB]",
            "[#F9CFD1]",
            "[#D5CDFE]",
            "[#C4F4E4]",
            "[#C3F1FB]",
            "[#FAF5CA]",
            "[#FBDCED]",
            "[#D4E9FE]",
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    const handleComplete = async (id) => {
        console.log(id);
        await fetch('http://localhost:8000/completed', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id
            })
        })
            .then(async (response) => {
                const data = await response.json();
                if (response.ok) {
                    updateTodos();
                } else {
                    console.error(data.error);
                }
            })
    }

    const handleDelete = async (id) => {
        await fetch('http://localhost:8000/delete', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id
            })
        })
            .then(async (response) => {
                const data = await response.json();
                if (response.ok) {
                    updateTodos();
                } else {
                    console.error(data.error);
                }
            })
    }

    // Drag n Drop

    return (
        <>
            {Todos.map((todo, index) => {
                const cardColors = getRandomColor();

                return (
                    <div className="relative">
                        <div className="hover:cursor-grab absolute w-[16px] border-r-0 h-[120px] -left-4 top-[15px] rounded-tl-lg rounded-bl-lg bg-[#f0f3f5] border  shadow-md shadow-[#00000010] ">
                            <svg className={`absolute fill-[#818181] top-12 -left-1`} width='24px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8.5 7C9.32843 7 10 6.32843 10 5.5C10 4.67157 9.32843 4 8.5 4C7.67157 4 7 4.67157 7 5.5C7 6.32843 7.67157 7 8.5 7ZM8.5 13.5C9.32843 13.5 10 12.8284 10 12C10 11.1716 9.32843 10.5 8.5 10.5C7.67157 10.5 7 11.1716 7 12C7 12.8284 7.67157 13.5 8.5 13.5ZM10 18.5C10 19.3284 9.32843 20 8.5 20C7.67157 20 7 19.3284 7 18.5C7 17.6716 7.67157 17 8.5 17C9.32843 17 10 17.6716 10 18.5ZM15.5 7C16.3284 7 17 6.32843 17 5.5C17 4.67157 16.3284 4 15.5 4C14.6716 4 14 4.67157 14 5.5C14 6.32843 14.6716 7 15.5 7ZM17 12C17 12.8284 16.3284 13.5 15.5 13.5C14.6716 13.5 14 12.8284 14 12C14 11.1716 14.6716 10.5 15.5 10.5C16.3284 10.5 17 11.1716 17 12ZM15.5 20C16.3284 20 17 19.3284 17 18.5C17 17.6716 16.3284 17 15.5 17C14.6716 17 14 17.6716 14 18.5C14 19.3284 14.6716 20 15.5 20Z"></path></svg>
                        </div>
                        <div key={index} className={`flex w-[300px] h-[150px]  p-2 items-start gap-[10px] bg-${cardColors} rounded-xl shadow-md shadow-[#00000010] border-[2px] border-[#ffffff50]`}>
                            <div className="flex w-full h-full flex-col items-start justify-between">
                                <div className="flex w-full flex-row justify-between items-center">
                                    {/* heading of to do */}
                                    <h2 className='font-medium text-[20px] text-[#2B2B2B]'>{todo.heading}</h2>
                                    {/* tick svg */}
                                    <svg onClick={() => handleComplete(todo._id)} className='cursor-pointer fill-opacity-50' width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.49982 -7.62939e-06C12.9181 -7.62939e-06 16.4998 3.58171 16.4998 7.99999C16.4998 12.4183 12.9181 16 8.49982 16C4.08154 16 0.499817 12.4183 0.499817 7.99999C0.499817 3.58171 4.08154 -7.62939e-06 8.49982 -7.62939e-06ZM12.5138 6.28717C12.7978 6.00316 12.7978 5.54267 12.5138 5.25865C12.2298 4.97462 11.7693 4.97461 11.4853 5.25862L7.54491 9.19879L5.83188 7.48589C5.54785 7.20188 5.08737 7.2019 4.80336 7.48593C4.51935 7.76996 4.51937 8.23044 4.8034 8.51445L7.03068 10.7416C7.31469 11.0256 7.77516 11.0256 8.05917 10.7416L12.5138 6.28717Z" fill="black" />
                                    </svg>
                                </div>
                                <h4 className='font-normal h-[65px] overflow-hidden text-[14px] text-[#000] opacity-70'>{todo.description}</h4>
                                {/* <svg className='cursor-pointer fill-opacity-50' xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6936 4.27934L12.2207 0.806445L12.3078 0.71926C13.2669 -0.239753 14.8217 -0.239753 15.7807 0.71926C16.7398 1.67827 16.7398 3.23314 15.7807 4.19216L15.6936 4.27934ZM14.2793 5.69355L5.01476 14.9581L0.5 16L1.54187 11.4852L10.8064 2.22066L14.2793 5.69355Z" fill="black" />
                                </svg> */}
                                {/* line svg */}
                                <svg width="276" height="1" viewBox="0 0 944 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" width="943" height="1" fill="#212121" />
                                </svg>
                                <div className="flex flex-row w-full justify-between items-center">
                                    <h4 className='font-normal text-[14px] text-[#000] opacity-70'>Deadline: {todo.deadline}</h4>
                                    {/* delete svg */}
                                    <svg onClick={() => handleDelete(todo._id)} className='cursor-pointer fill-opacity-50' xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                        <path d="M1.50195 3V4H15.5055V3C15.5055 2.44772 15.0578 2 14.5055 2H10.5C10.5 0.89543 9.6046 0 8.50003 0C7.39546 0 6.50003 0.89543 6.50003 2H2.50195C1.94967 2 1.50195 2.44772 1.50195 3Z" fill="black" />
                                        <path d="M13.5475 15.0499L14 6H3.00003L3.45253 15.0499C3.47914 15.5821 3.91841 16 4.45128 16H12.5488C13.0817 16 13.5209 15.5821 13.5475 15.0499Z" fill="black" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>

    )
}

export default Card