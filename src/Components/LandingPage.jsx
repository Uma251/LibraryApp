import React, { useState } from 'react'
import '../assets/Styles/LandingPage.css'
import AdminLogin from './Admin/AdminLogin'
import UsersLogin from './Users/UsersLogin'

const LandingPage = () => {
    let[bool,setBool]=useState(true)
    let handleBtn=()=>{
        setBool(!bool)
    }
  return (
    <>
     <div className="landingpage">
        <div className="login-container">
            <div className="header">Login Page</div>
            <div className="btn-box">
                <button onClick={handleBtn} className={bool?'ryt-btn':'lft-btn'}>
                  {bool?"Admin":"User"}
                    </button>
            </div>
            <div className="form-box">
             {bool?<AdminLogin/>:<UsersLogin/>}
            </div>

        </div>
        
         </div>
    </>
  )
}

export default LandingPage
