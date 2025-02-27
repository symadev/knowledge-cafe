import PropTypes from 'prop-types';

const Blog = ({blog}) => {
  const {title, cover,author, author_img, posted_date,reading_time ,hashtags} = blog;
  console.log(blog);
    return (
        <div>
          
          <img src={cover} alt={`cover picture of the title ${title}`} />
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