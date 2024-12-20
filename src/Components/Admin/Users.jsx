import axios from 'axios'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const Users = () => {
    let [users,setUsers]=useState([])
    let fetchUsers=async()=>{
        let fetchUserData=await axios.get('http://localhost:4000/users')
         await setUsers(fetchUserData.data)
    }
    fetchUsers()
    console.log(users)
    let loc=useLocation()
    let bool=loc.pathname.startsWith('/adminportal')
  return (
    <>
       <div className="users1">
<h1>Users</h1>
<div className="containerN">
  <table border={1}>
    <thead>
      <tr>
        <th>SI.NO</th>
        <th>User Name</th>
        <th>Contact</th>
        {bool && <th>Email</th>}
       {bool &&  <th>Password</th>}
        <th>DOB</th>
        <th>Age</th>
        <th>Place</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((elem,index)=>{
          let {username,contact,email,password,dob,place,}=elem
          let dateObj=new Date()
          let age=dateObj.getFullYear()-dob.slice(0,4)
          return(
            <tr>
             <td>{index+1}</td>
             <td>{username}</td>
             <td>{contact}</td>
           {bool &&  <td>{email}</td>}
           {bool &&  <td>{password}</td>}
             <td>{dob}</td>
             <td>{age}</td>
             <td>{place}</td>
            </tr>
          )
        })
      }
    </tbody>
  </table>
</div>
   </div>
   
   
    </>
  )
}

export default Users
