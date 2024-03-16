import React from 'react'
import Avatar from '../assets/Avatar.png';

const nav = () => {

    return (
        <>
            <div className="w-[200px] overflow-hidden h-screen p-3 border-r flex flex-col justify-between" >
                {/* top part */}
                <div className="flex items-start gap-12 flex-col w-[180px]">
                    <div className="head flex flex-row gap-[6px] p-3">
                        <div className="flex items-center justify-center gap-2 cursor-pointer">
                            <svg className='h-[30px] w-[30px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.6 0C0.716344 0 0 0.716343 0 1.6V38.4C0 39.2837 0.716343 40 1.6 40H38.4C39.2837 40 40 39.2837 40 38.4V1.6C40 0.716344 39.2837 0 38.4 0H1.6ZM9.99329 24.4767C10.039 24.1263 10.1939 23.8064 10.444 23.5567C12.4544 21.5497 21.9249 12.0942 26.473 7.53176C27.0981 6.90468 28.1085 6.9085 28.7346 7.53459L32.1255 10.9255C32.7503 11.5503 32.7503 12.5634 32.1255 13.1882L16.1054 29.2083C15.8559 29.4578 15.5309 29.6179 15.181 29.6635L9.73088 30.3744C9.47047 30.4083 9.24854 30.1864 9.2825 29.926L9.99329 24.4767Z" fill="#2B2B2B" />
                            </svg>
                            <h1 className='font-semibold text-2xl text-[#2B2B2B]'>ml</h1>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[6px] items-start justify-center">
                        <div className="flex flex-row items-center gap-4 w-[180px] p-3 rounded hover:bg-[#f0f3f5] cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <rect x="8.57159" width="2.85714" height="20" fill="#2B2B2B" />
                                <rect y="11.4287" width="2.85715" height="20" transform="rotate(-90 0 11.4287)" fill="#2B2B2B" />
                            </svg>
                            <h2 className='font-medium text-[20px] text-[#2B2B2B]'>Create log</h2>
                        </div>
                        <div className="flex flex-row items-center gap-4 w-[180px] p-3 rounded hover:bg-[#f0f3f5] cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.07088 0.413805C9.53271 -0.0993327 10.3231 -0.140931 10.8362 0.320893C11.3493 0.782717 11.3909 1.57308 10.9291 2.08622L5.30412 8.33622C4.82503 8.86854 3.99752 8.8903 3.49112 8.38389L0.366117 5.25889C-0.122039 4.77074 -0.122039 3.97928 0.366117 3.49113C0.854272 3.00297 1.64573 3.00297 2.13388 3.49113L4.32726 5.6845L9.07088 0.413805ZM20 12.5C20 11.8097 19.4404 11.25 18.75 11.25H3.75L3.60422 11.2584C2.98255 11.3306 2.5 11.859 2.5 12.5C2.5 13.1904 3.05964 13.75 3.75 13.75H18.75L18.8958 13.7416C19.5174 13.6694 20 13.1411 20 12.5ZM20 18.75C20 18.0597 19.4404 17.5 18.75 17.5H3.75L3.60422 17.5084C2.98255 17.5806 2.5 18.109 2.5 18.75C2.5 19.4404 3.05964 20 3.75 20H18.75L18.8958 19.9916C19.5174 19.9194 20 19.3911 20 18.75ZM18.75 5.00001H12.5L12.3542 5.00842C11.7325 5.08063 11.25 5.60897 11.25 6.25001C11.25 6.94037 11.8096 7.50001 12.5 7.50001H18.75L18.8958 7.4916C19.5174 7.41939 20 6.89106 20 6.25001C20 5.55965 19.4404 5.00001 18.75 5.00001Z" fill="#2B2B2B" />
                            </svg>
                            <h2 className='font-medium text-[20px] text-[#2B2B2B]'>Task</h2>
                        </div>
                        <div className="flex flex-row items-center gap-4 w-[180px] p-3 rounded hover:bg-[#f0f3f5] cursor-pointer">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.833333" y="0.833333" width="18.3333" height="18.3333" rx="9.16667" stroke="#2B2B2B" stroke-width="1.66667" />
                                <path d="M14.0103 7.44812L8.90609 12.5521L6.354 10.0002" stroke="#2B2B2B" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <h2 className='font-medium text-[20px] text-[#2B2B2B]'>Completed</h2>
                        </div>
                    </div>
                </div>

                {/* bottom part */}
                <div className="flex items-start gap-12 flex-col w-[180px]">

                    <div className="flex flex-col gap-[6px] items-start justify-center">
                        <div className="flex flex-row items-center gap-4 w-[180px] p-3 rounded hover:bg-[#f0f3f5] cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.14096 16.8369L8.42595 19.8768C8.93872 19.9579 9.46444 20 10 20C10.5356 20 11.0613 19.9579 11.574 19.8768L11.859 16.8369C12.4463 16.6776 13.0033 16.4446 13.5194 16.1485L15.8704 18.0965C16.7243 17.4763 17.4763 16.7243 18.0965 15.8704L16.1485 13.5194C16.4446 13.0033 16.6776 12.4463 16.8369 11.859L19.8768 11.574C19.9579 11.0613 20 10.5356 20 10C20 9.46444 19.9579 8.93872 19.8768 8.42595L16.8369 8.14096C16.6776 7.5537 16.4446 6.99675 16.1485 6.48062L18.0965 4.12965C17.4763 3.27572 16.7243 2.52372 15.8704 1.9035L13.5194 3.85145C13.0033 3.55539 12.4463 3.32244 11.859 3.16314L11.574 0.123173C11.0613 0.0421008 10.5356 0 10 0C9.46444 0 8.93872 0.0421008 8.42595 0.123173L8.14096 3.16314C7.5537 3.32244 6.99675 3.55539 6.48062 3.85145L4.12965 1.9035C3.27572 2.52372 2.52372 3.27572 1.9035 4.12965L3.85145 6.48062C3.55539 6.99675 3.32244 7.5537 3.16314 8.14096L0.123173 8.42595C0.0421008 8.93872 0 9.46444 0 10C0 10.5356 0.0421008 11.0613 0.123173 11.574L3.16314 11.859C3.32244 12.4463 3.55539 13.0033 3.85145 13.5194L1.9035 15.8704C2.52372 16.7243 3.27572 17.4763 4.12965 18.0965L6.48062 16.1485C6.99675 16.4446 7.5537 16.6776 8.14096 16.8369ZM13.75 10C13.75 12.0711 12.0711 13.75 10 13.75C7.92893 13.75 6.25 12.0711 6.25 10C6.25 7.92893 7.92893 6.25 10 6.25C12.0711 6.25 13.75 7.92893 13.75 10Z" fill="#2B2B2B" />
                            </svg>
                            <h2 className='font-medium text-[20px] text-[#2B2B2B]'>Settings</h2>
                        </div>
                        <div className="flex flex-row items-center gap-4 w-[180px] p-3 rounded hover:bg-[#f0f3f5] cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 21.5C4.70101 21.5 0 16.799 0 11C0 5.20101 4.70101 0.5 10.5 0.5C16.299 0.5 21 5.20101 21 11C21 16.799 16.299 21.5 10.5 21.5ZM18.2545 6.07065C17.5311 4.93496 16.565 3.96889 15.4293 3.24545L13.7459 5.29515C14.7697 5.87891 15.6211 6.73031 16.2048 7.75408L18.2545 6.07065ZM5.57065 3.24545L7.25408 5.29515C6.23031 5.87891 5.37891 6.73031 4.79515 7.75408L2.74545 6.07065C3.46889 4.93496 4.43496 3.96889 5.57065 3.24545ZM2.74545 15.9293L4.79515 14.2459C5.37891 15.2697 6.23031 16.1211 7.25408 16.7048L5.57065 18.7545C4.43496 18.0311 3.46889 17.065 2.74545 15.9293ZM15.4293 18.7545L13.7459 16.7048C14.7697 16.1211 15.6211 15.2697 16.2048 14.2459L18.2545 15.9293C17.5311 17.065 16.565 18.0311 15.4293 18.7545ZM15.75 11C15.75 13.8995 13.3995 16.25 10.5 16.25C7.60051 16.25 5.25 13.8995 5.25 11C5.25 8.10051 7.60051 5.75 10.5 5.75C13.3995 5.75 15.75 8.10051 15.75 11Z" fill="#2B2B2B" />
                            </svg>
                            <h2 className='font-medium text-[20px] text-[#2B2B2B]'>Support</h2>
                        </div>
                    </div>
                    <div className="flex items-center w-[180px] justify-between rounded p-[5px] bg-[#f0f3f5] cursor-pointer">
                        <img src={Avatar} alt="avatar" />
                        <div className="flex flex-col w-[130px]">
                            <h1 className='font-semibold text-[18px] text-[#2B2B2B]'>Bulma</h1>
                            <h6 className='font-normal text-[12px] text-[#878EA6]'>bulma@gmail.com</h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default nav
