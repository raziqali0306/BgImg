import React, { useState } from 'react';
import { useEffect } from 'react';

function Navbar(props) {

  const [query, setQuery] = useState('');
  
  const queryValidation = () => {
    if(query === "") {
      props.getToast("Alert", "Enter Tags to search <strong>Eg.: Nature, Cars</strong>")
    }
    else {
      setQuery('');
      props.searchPics(query);
    }
  }

  useEffect(() => {
    props.getToast("Welcome!", "Thanks for choosing this website. Hope, you find some cool wallpapers here.!")
  }, [])

  
  return (
    <div>
      {/* navbar */}
      <nav className='navbar sticky-top navbar-dark bg-primary rounded-bottom px-5 py-3'>
          <a href='bgimg.netlify.app' className='navbar-brand fw-bolder fs-2' style={{fontFamily: 'Libre Baskerville'}} >BgImg</a>
          <form className='d-flex' onSubmit={(event) => {event.preventDefault()}}>
            <input
              className='form-control me-2'
              type='text'
              placeholder='Search'
              aria-label='Search'
              value={query}
              onChange={(e) => (setQuery(e.target.value))}
            />
            <button type="button" className="btn btn-danger" id="liveToastBtn" onClick={() => (queryValidation())}>Search</button>
          </form>
      </nav>
    </div>
  );

};

export default Navbar;
