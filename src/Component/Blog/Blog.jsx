import PropTypes from 'prop-types';

const Blog = ({blog}) => {
  const {title, cover} = blog;
  console.log(blog);
    return (
        <div>
          <img src={cover} alt={`cover picture of the title ${title}`} />
            <h2 className="text-4xl">{title}</h2> 
        </div>
    );
};
 Blog.propTypes = {
   blog:PropTypes.object.isRequired
 };
export default Blog;