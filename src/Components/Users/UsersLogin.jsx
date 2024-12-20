import axios from 'axios'
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UsersLogin = () => {
  let[users,setUsers]=useState([])
  let formData=useRef()
  let navigate=useNavigate()
    let fetchUsers=async()=>{
      let usersdata=await axios.get(`http://localhost:4000/books/users`)
      setUsers(usersdata.data)
    }
    fetchUsers()
     let usersEmail=users.map(elem=>elem.email)
    // console.log(usersEmail)
    // console.log(users)
   let handleLogin=()=>{
    let emailVal=formData.current[0].value;
    let passwordValu=formData.current[1].value;
      let emails=usersEmail.includes(emailVal)
      let pswd=(passwordValu==='user123')
      if(emails && pswd)
      {
        // alert('welcome to login page')
        navigate('/usersportal')
      }
      else{
        alert('Moye Moye')
      }
   }
  return (
    <>
      <div className="users-login">
        <h2>User Login Page</h2>
             <form onSubmit={handleLogin} ref={formData}>
                <input type="email" placeholder='Enter Email'/>
                <input type="password" placeholder='Enter Password' />
                <button>User Login</button>
              </form>
      </div>
    </>
  )
}

export default UsersLogin
