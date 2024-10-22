import React, { useEffect, useState } from 'react';
import Block from '../block/block';

const Blogs = ({handleAddToBookmark, handleReadingTime}) => {
    // fake data fetch
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(response => response.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className='md:w-2/3  mr-5'>
            {
                blogs.map(blog=><Block key={blog.id}blog={blog} handleAddToBookmark={handleAddToBookmark} handleReadingTime={handleReadingTime}></Block>)
            }
        </div>
    );
};

export default Blogs;
