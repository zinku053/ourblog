import React from 'react'
import { Main } from '../components/Main'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'


export default function Home() {
  return (
    <div className='home' style={{ minHeight: '100vh' }}>
        <Navbar/>
        <div className="d-flex" >
        <Sidebar />
        <Main />
      </div>
    </div>
  )
}
