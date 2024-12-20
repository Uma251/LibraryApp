import React, { useRef } from 'react'
import '../../assets/Styles/addbooks.css'

const AddBooks = () => {
    //to target all the html elements
    let formData=useRef()
    let handleSubmit=(e)=>{
        e.preventDefault()
        let newBook={
            id:" ",
            title:formData.current[0].value,
            isbn:formData.current[1].value,
            pageCount:formData.current[2].value,
            thumbnailUrl:formData.current[3].value,
            shortDescription:formData.current[4].value,
            longDescription:formData.current[5].value,
            status:formData.current[6].value,
            authors:formData.current[7].value,
            categories:formData.current[8].value
        }

        fetch(`http://localhost:4000/books`,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(newBook)
        })
    }
  return (
    <>
      <div className="addbooks">
        <h2>ADD BOOKS</h2>
        <div className="container">
            <form action="" ref={formData} onSubmit={handleSubmit}>
                <input type="text"  placeholder='Enter title of the book'/>
                <input type="number"  placeholder='Enter RegNo' />
                <input type="number" placeholder='Enter Page Count'/>
                <input type="text" placeholder='Enter  Url of the Image'/>
                <input type="text" placeholder='Enter Short  Description'/>
                <input type="text" placeholder='Enter Long Description' />
                <input type="text"  placeholder='Enter Status'/>
                <input type="text"  placeholder='Enter autors'/>
                <input type="text" placeholder='Enter Categories'/>
                <button>Submit</button>
            </form>
        </div>
      </div>
    </>
  )
}

export default AddBooks
