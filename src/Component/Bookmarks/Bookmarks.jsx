import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-100 m-4 p-3 rounded-xl">
            <div className='text-4xl  text-center'>
                <h3>Reading-Time:{ readingTime}</h3>
            </div>
            <h2 className="text-3xl text-center">Bookmarked Blogs: {bookmarks.length}</h2>
{
      bookmarks.map((bookmark,idx)=> <Bookmark key= {idx} 
                        bookmark={bookmark} ></Bookmark>) 
}


        </div>
    );
};
Bookmarks.propTypes = {
  
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number 
  };

export default Bookmarks;