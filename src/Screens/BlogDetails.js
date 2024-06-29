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
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">{blog.name}</h2>
              <h5 className="card-subtitle mb-3 text-muted">{blog.author}</h5>
              <p className="card-text">{blog.body}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default BlogDetails;