import React from 'react'
import Navbar from '../Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Books from '../Books'
import Users from '../Admin/Users'
import ReadBooks from '../ReadBooks'
import CartItems from './CartItems'

const UsersPortal = () => {
  return (
    <>
     <Navbar/>
     <Routes>
      <Route element={<Home/>} path='/'/>
      <Route element={<Books/>} path='/books'/>
      <Route element={< Users/>} path='/users'/>
      <Route element={<ReadBooks/>} path='/readbooks/:id'/>
      <Route element={<CartItems/>} path='/cartitems'/>
     </Routes>
    </>
  )
}

export default UsersPortal
