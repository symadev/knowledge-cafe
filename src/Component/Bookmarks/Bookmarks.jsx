import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/bookmark';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 bg-gray-100 mt-4 p-3 rounded-xl">
            <h2 className="text-3xl text-center">Bookmarked Blogs: {bookmarks.length}</h2>
{
      bookmarks.map(bookmark=> <Bookmark key= {bookmark.id} 
                        bookmark={bookmark} ></Bookmark>) 
}


        </div>
    );
};
Bookmarks.propTypes = {
  
    bookmarks: PropTypes.array
  };

export default Bookmarks;