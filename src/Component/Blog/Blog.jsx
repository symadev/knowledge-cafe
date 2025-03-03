import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';//put the element name must  in the box for implementation

const Blog = ({blog, handleAddBookmark,handleMarkAsRead}) => {
  const {id, title, cover,author, author_img, posted_date,reading_time ,hashtags} = blog;
  console.log(blog);
    return (
        <div className='mb-20  space-y-4'>
          
          <img className='w-full mb-8 mt-2' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4'>

              <div className='flex gap-4'>
                <img className='w-14' src={author_img} alt="" />
                <div className='ml-6'>
                <h2 className="text-2xl">{author}</h2> 
                <p>{posted_date}</p>
                </div>

              </div>
              <div>
              <span>{reading_time} min read</span>
            <button  onClick ={() =>handleAddBookmark(blog)} className='ml-2 text-sky-300'><FaBookmark></FaBookmark></button>
            {/* whole blog k pathanor jonne and sathe arrow function o add korte hobe */}
              </div>
            </div>
            <h2 className="text-4xl">{title}</h2> 
            <p>
              {
             hashtags.map(hash => (
              <span key={blog.id}>
                <a href="">#{hash} </a>
              </span> ))
           
          }
            </p>

            <button onClick={()=>handleMarkAsRead(id,reading_time)} className='text-purple-900 font-bold underline'>Mark AS Read</button>
            {/* we sent reading-time as perameter */}
        </div>
    );
};
//here show all the propstypes
 Blog.propTypes = {
   blog: PropTypes.object.isRequired,
   handleAddBookmark: PropTypes.func,
   handleMarkAsRead: PropTypes.func 
 };
export default Blog;