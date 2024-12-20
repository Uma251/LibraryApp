import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
  let adminForm = useRef()
  let navigate=useNavigate()
  let handleAdminForm=(e)=>{
    e.preventDefault()
   let adminEmail= adminForm.current[0].value 
   let adminPassword=adminForm.current[1].value
   //the values already stored in database
   let adminCredential={
    admin:"admin@gmail.com",
    password:"admin123"
   }
   let {admin,password}=adminCredential
   if(adminEmail===admin && adminPassword===password)
   {
    // alert("Login Successful")
    navigate('/adminportal')
   }
   else{
    alert("Invalid Credentials")
   }
  }
  return (
    <>
      <div className="admin-login">
        <h2>Admin Login Page</h2>
              <form ref={adminForm} onSubmit={handleAdminForm}>
                <input type="email" placeholder='Enter Email'/>
                <input type="password" placeholder='Enter Password' />
                <button>Admin Login</button>
              </form>
      </div>
    </>
  )
}

export default AdminLogin
