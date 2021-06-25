import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, isLoading, error } = useFetch(`http://localhost:8002/blogs/${id}`);
  const history = useHistory();
  const { deleteError, setDeleteError } = useState(null);
  
  const handleClick = () => {
    fetch(`http://localhost:8002/blogs/${blog.id}`, {
      method: 'DELETE'
    })
      .then(() => {
        console.log('blog successfully deleted permanently');
        history.push('/');
      })
      .catch(error => {
        setDeleteError(error.message);
      })
  }
  
  return (
    <div className="container">
      { isLoading && (
        <div className="row mt-3">
          <div className="col-lg-8 d-flex justify-content-center align-items-center">
            <div className="spinner-grow spinner-grow-sm m-1 text-warning" role="status"></div>
            <div className="spinner-grow spinner-grow-sm m-1 text-warning" role="status"></div>
            <div className="spinner-grow spinner-grow-sm m-1 text-warning" role="status"></div>
          </div>
        </div> )
      }
      
      { error && (
        <div className="row mt-3">
          <div className="col-lg-8 error_message">
            <h5 className="text-danger text-center">{ error }</h5>
          </div>
        </div> )
      }
      
      { deleteError && (
        <div className="row mt-3">
          <div className="col-lg-8 error_message">
            <h5 className="text-danger text-center">{ deleteError }</h5>
          </div>
        </div> )
      }
      
      { blog && (
        <div className="row mt-3">
          <div className="col-lg-8 mb-4">
            <h3 className="text-warning pb-0 mb-0">{ blog.title }</h3>
            <small>Written By: { blog.author }</small>
            
            <p className="mt-3 text-break lh-lg">{ blog.body }</p>
            
            <button type="button" className="btn btn-danger mt-3" onClick={ handleClick }>Delete Blog's</button>
          </div>
        </div> )
      }
    </div>
  )
}

export default BlogDetails;
                                                                                                                                                                                
