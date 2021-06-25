import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
  const [ title, setTitle ] = useState('');
  const [ body, setBody ] = useState('');
  const [ author, setAuthor ] = useState('Anonymous');
  const [ isLoading, setIsLoading ] = useState(false);
  const history = useHistory();
  
  const handleSubmit = (e) => {
    const blog = { title, body, author };
    e.preventDefault();
    
    setIsLoading(true);
    
    fetch('http://localhost:8002/blogs', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    })
      .then(res => {
        if (!res.ok) 
        {
          throw Error("cannot save data to that source");
        }
        
        return res.json();
      })
      .then(data => {
        console.log("new data successfully added", data);
        setIsLoading(false);
        
        // redirect to home page
        history.push('/');
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });
  }
  return (
    <div className="container">
      <div className="row mt-3">  
        <div className="col-md-10 offset-md-1">
          <h3 className="text-warning mb-4 text-md-center">Add New Blog</h3>
          
          <form onSubmit={ handleSubmit }>
            <div className="row mb-3">
              <label htmlFor="title" className="form-label col-md-2 text-md-end">Title</label>
              <div className="col-md-10">
                <input type="text" className="form-control" id="title" 
                  value={ title }
                  onChange={ (e) => setTitle(e.target.value) }
                />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="body" className="form-label col-md-2 text-md-end">Body</label>
              
              <div className="col-md-10">
                <textarea className="form-control" id="body" rows="3"
                  value={ body }
                  onChange={ (e) => setBody(e.target.value) }
                ></textarea>
              </div>
            </div>
            
            <div className="row mb-4">
              <label htmlFor="author" className="form-label col-md-2 text-md-end">Author</label>
              <div className="col-md-10">
                <select className="form-select" id="author"
                  onChange={ (e) => setAuthor(e.target.value) }
                >
                  <option value={ author }>Select Author</option>
                  <option value="Pooh Fitzsimons">Pooh Fitzsimons</option>
                  <option value="Siana Cowie">Siana Cowie</option>
                  <option value="Charlean Vonasek">Charlean Vonasek</option>
                  <option value="Killian Clipson">Killian Clipson</option>
                  <option value="Cob Preston">Cob Preston</option>
                  <option value="Kirstyn De Paoli">Kirstyn De Paoli</option>
                  <option value="Trevar Shalloo">Trevar Shalloo</option>
                  <option value="Mohandas Starie">Mohandas Starie</option>
                </select>
              </div>
            </div>
            
            <div className="mb-3 row">
              <div className="col text-md-center">
                { !isLoading && ( <button type="submit" className="btn btn-outline-warning">save blog</button> ) }
                
                { isLoading && 
                  ( <button className="btn btn-warning" disabled>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    &nbsp;saving blog...
                  </button> )
                }
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Create;
                                                                                                                                                                                
