import React from 'react'
import { HiDotsVertical } from 'react-icons/hi'

function SearchHistoryItem({Icon,text}) {
    return (
        <div className="flex items-center justify-between gap-3  p-2 w-fit rounded-full hover:bg-zinc-900 w-full">
            <div className="flex items-center gap-3">
                <Icon className='text-gray-300 cursor-pointer text-2xl p-1' />
                <p className='text-gray-300 text-sm font-semibold'>JavaScript Code Analysis</p>
            </div>
            <HiDotsVertical className='text-gray-300 cursor-pointer text-2xl p-1' />
        </div>
       
  )
}

export default SearchHistoryItem