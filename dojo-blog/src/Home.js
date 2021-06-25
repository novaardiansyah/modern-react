import React from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
  const { data: blogs, isLoading, error } = useFetch('http://localhost:8002/blogs');
  
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
      
      { blogs && ( <BlogList blogs={ blogs } title="All Blogs" /> ) }
    </div>
  )
}

export default Home;
                                                                                                                                                                                
