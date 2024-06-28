import React from 'react';
import { useParams } from 'react-router-dom';
import  Blog  from '../api/index';
const BlogDetails = ({ }) => {
  const { id } = useParams();
  const blog = Blog.find(blog => blog.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found '${blog.id}'</div>;
  }

  return (
    <div className="container mt-4">
      <h2>{blog.name}</h2>
      <h5>{blog.author}</h5>
      <p>{blog.body}</p>
    </div>
  );
};

export default BlogDetails;