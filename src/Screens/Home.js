import React from 'react'
import { Main } from '../components/Main'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className='bg-success' style={{ minHeight: '100vh' }}>
        <Navbar/>
        <Main/>
    </div>
  )
}
