
import { useState } from 'react'
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import Bookmarks from './Component/Bookmarks/Bookmarks'
import Header from './Component/Header/Header'

function App() {
 
const [bookmarks, setBookmarks] =useState([]);
const handleAddBookmark =blog =>{
console.log('bookmark adding soon');

}
  return (
    <>
      
    <Header></Header>
    <div className='md:flex max-w-7xl mx-auto'>
    <Blogs handleAddBookmark={handleAddBookmark}></Blogs>
    <Bookmarks></Bookmarks>
    </div>
    </>
  )
}

export default App
