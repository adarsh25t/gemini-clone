import React from 'react'

function MainCard({ text, Icon }) {
    return (
        <div className="max-w-[200px] h-44 bg-zinc-800 rounded-lg p-3 text-left flex flex-col justify-between hover:bg-zinc-700 transition-all duration-300 cursor-pointer">
            <h1 className='text-gray-300 font-medium'>{text}</h1>
            <div className="flex justify-end">
                <div className=" p-3 bg-zinc-900 rounded-full w-fit">
                    <Icon />
                </div>
            </div>
        </div>
    )
}

export default MainCard