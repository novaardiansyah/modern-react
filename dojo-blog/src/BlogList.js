import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = ({ blogs, title }) => {
  return (
    <div className="row mt-3">
      <div className="col-lg-8">
        <h3 className="text-warning mb-4">{ title }</h3>
      </div>
      
      { blogs.map((blog) => (
        <div className="col-lg-8 mb-4 card-blog" key={ blog.id }>
          <Link to={`blogs/${ blog.id }`}>
            <h2 className="blog-title">{ blog.title }</h2>
            <p className="blog-author pb-0 mb-0">Written By: { blog.author }</p>
          </Link>
        </div>
      )) }
    </div> 
  )
}

export default BlogList;
                                                                                                                                                                                
