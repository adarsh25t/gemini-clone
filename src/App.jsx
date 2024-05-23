import { useEffect, useState } from 'react'
import './App.css'
import Sidebar from './components/Slidebar/Sidebar'
import Main from './components/Main/Main'
import { addTask, getResponse } from './store/ResponseSlice'

function App() {

  
  return (
    <section className='h-full bg-Gray flex'>
        <Sidebar />
        <Main />
    </section>
  )
}

export default App
