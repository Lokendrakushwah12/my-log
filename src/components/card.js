import React from 'react'

const card = () => {
    return (
        <>
            <div className="flex w-[300px] p-3 items-start gap-[10px] bg-[#CEDDFC] rounded-xl shadow-md shadow-[#00000010] border-[2px] border-[#ffffff50]">
                <div className="flex flex-col items-start gap-[10px]">
                    <h2 className='font-medium text-[20px] text-[#2B2B2B]'>Create a crypto landing page</h2>
                    <h4 className='font-normal text-[14px] text-[#000] opacity-70'>Deadline: 24th Nov</h4>
                </div>
                <div className="flex flex-col justify-between h-full items-start">
                    <svg className='cursor-pointer fill-opacity-50' xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6936 4.27934L12.2207 0.806445L12.3078 0.71926C13.2669 -0.239753 14.8217 -0.239753 15.7807 0.71926C16.7398 1.67827 16.7398 3.23314 15.7807 4.19216L15.6936 4.27934ZM14.2793 5.69355L5.01476 14.9581L0.5 16L1.54187 11.4852L10.8064 2.22066L14.2793 5.69355Z" fill="black" />
                    </svg>
                    <svg className='cursor-pointer fill-opacity-50' width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.49982 -7.62939e-06C12.9181 -7.62939e-06 16.4998 3.58171 16.4998 7.99999C16.4998 12.4183 12.9181 16 8.49982 16C4.08154 16 0.499817 12.4183 0.499817 7.99999C0.499817 3.58171 4.08154 -7.62939e-06 8.49982 -7.62939e-06ZM12.5138 6.28717C12.7978 6.00316 12.7978 5.54267 12.5138 5.25865C12.2298 4.97462 11.7693 4.97461 11.4853 5.25862L7.54491 9.19879L5.83188 7.48589C5.54785 7.20188 5.08737 7.2019 4.80336 7.48593C4.51935 7.76996 4.51937 8.23044 4.8034 8.51445L7.03068 10.7416C7.31469 11.0256 7.77516 11.0256 8.05917 10.7416L12.5138 6.28717Z" fill="black" />
                    </svg>
                    <svg className='cursor-pointer fill-opacity-50' xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                        <path d="M1.50195 3V4H15.5055V3C15.5055 2.44772 15.0578 2 14.5055 2H10.5C10.5 0.89543 9.6046 0 8.50003 0C7.39546 0 6.50003 0.89543 6.50003 2H2.50195C1.94967 2 1.50195 2.44772 1.50195 3Z" fill="black" />
                        <path d="M13.5475 15.0499L14 6H3.00003L3.45253 15.0499C3.47914 15.5821 3.91841 16 4.45128 16H12.5488C13.0817 16 13.5209 15.5821 13.5475 15.0499Z" fill="black" />
                    </svg>
                </div>
            </div>
        </>
    )
}

export default card
