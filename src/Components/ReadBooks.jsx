import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import '../assets/Styles/readbooks.css'

const ReadBooks = () => {
  let params=useParams()
  let bookId=params.id

 let[bookData,setBookData] =useState({})

  let fetchBookId=async()=>{
    let fetchBookById=await axios.get(`http://localhost:4000/books/${bookId}`)
   setBookData(fetchBookById.data)
  }
  fetchBookId()
  // console.log(params.id)
  console.log(bookData)
  let{id,title,isbn,pageCount,thumbnailUrl,longDescription,status,authors,shortDescription}=bookData
  return (
    <>
     <div className="readBook">
      <div className="card">
        <div className="img-leftfix"><img src={thumbnailUrl} alt="" /></div>
        <div className="content-leftscroll">
         <h1><span>ID:</span>{id}</h1>
         <h1>
          <span>Title:</span>{title}</h1>
         <h1><span>Isbn:</span>{isbn}</h1>
         <h1><span>PageCount:</span>{pageCount}</h1>
         <h1><span>Status:</span>{status}</h1>
         <h1><span>Authors:</span>{authors}</h1>
         {/* <h1><span>ShortDescription:</span>{shortDescription}</h1> */}
         <h1><span>LongDescription:</span>{longDescription}</h1>
        </div>
        
      </div>
     </div>
    </>
  )
}

export default ReadBooks
