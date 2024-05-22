import React, { useState } from 'react'
import { FaBars } from "react-icons/fa6";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { FaClockRotateLeft } from "react-icons/fa6";
import BottomIcon from './BottomIcon';
import { FaPlus } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import SearchHistoryItem from './SearchHistoryItem';


function Sidebar() {

  const [sidebar, setSidebar] = useState(false)

  return (
    <div className={`p-5 h-screen ${sidebar ? 'w-80' : 'w-20'} bg-Dark transition-all duration-300 flex flex-col justify-between space-y-10`}>

      <div className="space-y-10">
        <div className="hover:bg-zinc-900 transition-all duration-300 rounded-full p-2 w-fit" onClick={() => setSidebar(!sidebar)}>
          <FaBars
            className='text-gray-300 cursor-pointer text-2xl p-1' />
        </div>

        <div className="">
          <div className="flex items-center gap-3 px-4 py-2 bg-zinc-900 w-fit rounded-full">
            <FaPlus className='text-gray-300 cursor-pointer text-2xl p-1' />
            {sidebar && <p className='text-gray-300 text-sm font-semibold transition-all duration-300'>New Chat</p>}
          </div>

          {sidebar && <div className="transition-all duration-300">
            <h1 className='text-gray-300 text-base font-semibold mt-6 p-2'>Recent</h1>
            <div className="">
              <SearchHistoryItem Icon={FaRegMessage} text={'JavaScript Code Analysis'} />
              <SearchHistoryItem Icon={FaRegMessage} text={'JavaScript Code Analysis'} />
            </div>
          </div>}
        </div>
      </div>



      <div className="space-y-1">
        <BottomIcon Icon={IoMdHelpCircleOutline} text={'Help'} showText={sidebar} />
        <BottomIcon Icon={IoSettings} text={'Settings'} showText={sidebar} />
        <BottomIcon Icon={FaClockRotateLeft} text={'Logout'} showText={sidebar} />
      </div>
    </div>
  )
}

export default Sidebar