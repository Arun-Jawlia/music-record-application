import React from 'react'
import {Routes, Route} from 'react-router-dom'
import MusicRecords from './MusicRecords'
import Login from './Login'
export const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<MusicRecords/>} /> 
        <Route path='/login' element={<Login/>} /> 
    </Routes>
  )
}
