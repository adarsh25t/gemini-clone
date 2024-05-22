import { useState } from 'react'
import './App.css'
import Sidebar from './components/Slidebar/Sidebar'
import Main from './components/Main/Main'

function App() {
  

  return (
    <section className='max-h-screen bg-Gray flex'>
        <Sidebar />
        <Main />
    </section>
  )
}

export default App
