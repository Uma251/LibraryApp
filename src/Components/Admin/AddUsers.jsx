import React, { useRef } from 'react'
  
function AddUsers() {
    //delete function
    // let deleteUsers=(id)=>{
    //     let bool=window.confirm('Do you want to delete this user')
    //     if(bool)
    //     {
    //      fetch(`http://localhost:4000/books/${id}`,{method:'DELETE'})
    //      alert('')
    //     }
       
    // }
    let userformData=useRef()
    let addUsers=(e)=>{
      e.preventDefault()
      let newUser={
        username:userformData.current[0].value,
        contact:userformData.current[1].value,
        email:userformData.current[2].value,
        password:'user123',
        dob:userformData.current[4].value,
        place:userformData.current[5].value,
      }

      fetch('http://localhost:4000/users',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(newUser)
      })
    }

  return (
    <>
      <div className="addusers">
        <h1>Add Users</h1>
        <div className="container">
            <form onSubmit={addUsers} ref={userformData}>
                <input type="text" placeholder='Enter User name' />
                 <input type="phone" placeholder='Enter Contact Number' />
                 <input type="email" placeholder='Enter Email' />
                 <input type="password" placeholder='Enter Password' disabled/>
                 <input type="date"  />
                  <input type="text" placeholder='Enter place' />
                  <button>Add Users</button>
            </form>
        </div>
        </div>
    </>
  )
}

export default AddUsers
