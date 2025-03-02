import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';//put the element name must  in the box for implementation

const Blog = ({blog, handleAddBookmark}) => {
  const {title, cover,author, author_img, posted_date,reading_time ,hashtags} = blog;
  console.log(blog);
    return (
        <div className='mb-20'>
          
          <img className='w-full mb-8 mt-2' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between'>

              <div className='flex gap-4'>
                <img className='w-14' src={author_img} alt="" />
                <div>
                <h2 className="text-2xl">{author}</h2> 
                <p>{posted_date}</p>
                </div>

              </div>
              <div>
              <span>{reading_time} min read</span>
            <button  onClick ={handleAddBookmark} className='ml-2 text-sky-300'><FaBookmark></FaBookmark></button>
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
        </div>
    );
};
 Blog.propTypes = {
   blog:PropTypes.object.isRequired
 };
export default Blog;