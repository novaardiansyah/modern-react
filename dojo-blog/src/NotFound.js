import React from 'react';
import { useHistory } from 'react-router-dom';

const NotFound = () => {
  const history = useHistory();
  
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-lg-8 mb-4">
          <h3 className="text-warning pb-0 mb-0">404 Page Not Found</h3>

          <p className="mt-3 text-warning">sorry the page you are going to is not available, please return to the start page by clicking the following button.</p>
          
          <button type="button" className="btn btn-outline-warning mt-3" onClick={ () => history.push('/') }>Back to Home</button>
        </div>
      </div>
    </div>
  )
}

export default NotFound;
                                                                                                                                                                                
