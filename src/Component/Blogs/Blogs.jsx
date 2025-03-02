//here we can load the blogs data

import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleAddBookmark}) => {
    const[blogs, setBlogs] = useState([]);//just because the object inside the array thats why here must take the empty array


    useEffect(()=>{//for load the data
        fetch('Blog.json')
        .then(res=> res.json())
        .then(data=>setBlogs(data));

    },[]);

    return (
        <div className="md:w-2/3">
            <h2 className="text-4xl">Blogs:{blogs.length}</h2>
            {/* now showing for blog data */}
            {

                blogs.map(blog=> <Blog key= {blog.id} 
                    blog={blog} handleAddBookmark={handleAddBookmark}></Blog>) 
            }
        </div>
    );
};

export default Blogs;