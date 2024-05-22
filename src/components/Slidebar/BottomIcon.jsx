import React from 'react'

function BottomIcon({Icon,text,showText}) {
    return (
        <div className="hover:bg-zinc-900 transition-all duration-300 flex items-center justify-between rounded-full p-2 w-full">
            <div className="flex items-center gap-3">
                <Icon
                    className='text-gray-300 cursor-pointer text-2xl p-1' />
                {showText &&<p className='text-gray-300 text-sm'>{text}</p>}
            </div>
            <div className="w-2 h-2 bg-red-700 rounded-full" />
        </div>
    )
}

export default BottomIcon;