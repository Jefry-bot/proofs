import React from 'react'
import { Routes, Route } from 'react-router'

export const App = () => {
  return (
    <Routes>
      <Route path='/about' element={<div className='flex justify-center items-center w-screen h-screen bg-gradient-to-tr from-indigo-600 to-blue-500 font-bold text-4xl text-white'>About class</div>}></Route>
      <Route path='/' element={<div className='flex justify-center items-center w-screen h-screen bg-gradient-to-tr from-indigo-600 to-blue-500 font-bold text-4xl text-white'>Home class</div>}></Route>
    </Routes>
  )
}
