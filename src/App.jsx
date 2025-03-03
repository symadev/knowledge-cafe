
import { useState } from 'react'
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import Bookmarks from './Component/Bookmarks/Bookmarks'
import Header from './Component/Header/Header'

function App() {
 
const [bookmarks, setBookmarks] =useState([]);
const [readingTime, setreadingTime] =useState(0);
const handleAddBookmark =blog =>{
const newBookmarks = [...bookmarks,blog];
setBookmarks(newBookmarks);
}


const handleMarkAsRead =(time, id) =>{
  const newreadingTime = readingTime+ time;

  setreadingTime(newreadingTime);

//remove the rad blog from bookmark
// console.log('remove bookmarks',id);
const remainingBookmarks= bookmarks.filter(bookmark=>bookmark.id!== id);
setBookmarks(remainingBookmarks);
//problem------!
}
//this process is for amra jokhon mark as read korbo tokhon oi id ta chole jabe means remove hoye jabe
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
