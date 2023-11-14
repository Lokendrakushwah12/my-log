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
