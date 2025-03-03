
import { useState } from 'react'
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import Bookmarks from './Component/Bookmarks/Bookmarks'
import Header from './Component/Header/Header'

function App() {
 
const [bookmarks, setBookmarks] =useState([]);
const [readingTime, setreadingTime] =useState([]);
const handleAddBookmark =blog =>{
const newBookmarks = [...bookmarks,blog];
setBookmarks(newBookmarks);
}


const handleMarkAsRead =time =>{
  const newreadingTime = readingTime+ time;

  setreadingTime(newreadingTime);
}
  return (
    <>
      
    <Header></Header>
    <div className='md:flex max-w-7xl mx-auto'>
  <Blogs  handleMarkAsRead={handleMarkAsRead} handleAddBookmark={handleAddBookmark}></Blogs> 
    <Bookmarks bookmarks={bookmarks}  readingTime={ readingTime}></Bookmarks>
    {/* //we send the bookmarks value in Bookmarks */}
    </div>
    </>
  )
}

export default App
