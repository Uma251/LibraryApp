import React from 'react'
import '../assets/Styles/home.css'
import libraryImage from '../Images/library.jpg'

const Home = () => {
  return (
    <>
     <div className="library-home">
      <header className="library-header">
        <h1>Welcome to Our Library</h1>
        <p>Your gateway to knowledge and imagination</p>
      </header>
      <main className="library-content">
        <img 
          src={libraryImage} 
          alt="" 
          className="library-image" 
        />
        <p>
          Explore our vast collection of books, journals, and digital resources.
          Whether you're looking for academic materials or your next favorite novel, we have something for everyone!
        </p>
      </main>
      <footer className="library-footer">
        <p>© 2024 Our Library. All rights reserved.</p>
      </footer>
    </div>
    </>
  )
}

export default Home
