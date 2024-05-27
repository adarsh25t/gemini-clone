import React from 'react'
import { HiDotsVertical } from 'react-icons/hi'
import { changeStatus, getResponse } from '../../store/ResponseSlice'
import { useDispatch } from 'react-redux'

function SearchHistoryItem({ Icon, text }) {

    const dispatch = useDispatch()

    const getNewResponse = (text) => {
        dispatch(changeStatus("start"))
        dispatch(getResponse(text))
    }

    return (
        <div className="flex items-center cursor-pointer justify-between gap-3  p-2 w-fit rounded-full hover:bg-zinc-900" onClick={()=> getNewResponse(text)}>
            <div className="flex items-center gap-3">
                <Icon className='text-gray-300 cursor-pointer text-2xl p-1' />
                <p className='text-gray-300 text-sm font-semibold'>{text}</p>
            </div>
            <HiDotsVertical className='text-gray-300 cursor-pointer text-2xl p-1' />
        </div>

    )
} 

export default SearchHistoryItem