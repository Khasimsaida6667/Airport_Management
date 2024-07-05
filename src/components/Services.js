import React from 'react';
// import './Services.css';

function Services() {
  return (
    <div className="container">
      <h1>Services</h1>
      <div className='link-group'>
          <a href="#" className="link">Lost & Found</a>
          <button type='button'>eg</button>
        
        </div>
        <hr/>
        
      <form className="service-form">

        <div className="form-group">
          <label htmlFor="serviceName">Service Name</label>
          <input type="text" id="serviceName" value="Lost & found" />
        </div>
        
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select id="category">
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="subCategory">Sub Category</label>
          <select id="subCategory">
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        </div>

        <div className="form-group1 upload-group1">
          <div>
               <button type="button" className="upload-button">Upload Image</button>
          </div>
          <div>
              <input type="checkbox" id="showImage" />
              <label htmlFor="showImage" className="show-image-label">Show image</label>
          </div>
        </div>
        <button type="submit" className="save-button">Save</button>
        
        <div className="form-group description-group">
          <label htmlFor="description">Description</label>
          <input type="text" id="description" placeholder="type here" />
        </div>
        
        
      </form>
      
      <div className="links">
        <div className='link-group'>
          <a href="#" className="link">Lounge</a>
          <button type='button'>eg</button>
        </div>
        <hr/>
        <div className='link-group'>
          <a href="#" className="link">Money Exchange</a>
          <button type='button'>eg</button>
        </div>
        <hr/>
        
      </div>
    </div>
  );
}

export default Services;
