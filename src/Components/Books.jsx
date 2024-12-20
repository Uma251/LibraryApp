import React, { useState } from 'react'
import '../assets/book.css'
import { useLocation, useNavigate } from 'react-router-dom'
const Books = () => {
   let loc=useLocation()
   let bool=loc.pathname.startsWith('/adminportal')
  
    let[books,setBooks]=useState([])
    let fetchapi=async()=>{
        let fetchApi=await fetch(`http://localhost:4000/books`)
        let apidata= await fetchApi.json()
        setBooks(apidata)
    }
    fetchapi()
    console.log(books)
    let navigate=useNavigate()

    let readMore=(id)=>{
      if(bool)
      {
        navigate(`/adminportal/readbooks/${id}`)
      }
      else{
        navigate(`/usersportal/readbooks/${id}`)
      }
    

    }
    let deleteBook=(id,title)=>{
    //  alert(`hi +${id}`)
    // fetch(`http://localhost:4000/books/${id}`,{method:'DELETE'})
    let bool=window.confirm(`Do you wanna delete ${title} book`)
    if(bool)
    {
      fetch(`http://localhost:4000/books/${id}`,{method:'DELETE'})
      alert(`Book is deleted`)

    }
    else{
      alert("Book is not deleted")
    }
    }
  return (
    <>
    <div className="books">
      <div className="header"><h1>BOOKS</h1></div>
      <div className="container">
        {
          books.map((elem)=>{
            let{id, title,isbn,pageCount,thumbnailUrl,status,authors,categories}=elem
            return(
              <>
                 <div className="card">
                  <div className="img-left"><img src={thumbnailUrl} alt="" /></div>
                     <div className="details-right">
                        <table>
                             <thead>
                                 
                                  <tr><th> {id}.{title}</th></tr>
                                  <tr><th>{isbn}</th></tr>
                                  <tr><th>{pageCount}</th></tr>
                                  <tr><th>{status}</th></tr>
                                  <tr><th>{authors}</th></tr>
                                  <tr><th>{categories}</th></tr>
                                  <tr><th><button onClick={()=>readMore(id)}>ReadMore</button></th></tr>
                                  {
                                    bool?
                                    <button onClick={()=>deleteBook(id,title)}> 
                                    Delete
                                    </button>
                                    :
                                    <></>
                                  }
                             </thead>

                        </table>
                     </div>
     
                 </div>
              </>
            )
          })
        }
      </div>
    </div>
      
    </>
  )
}

export default Books
