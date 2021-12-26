import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function Navbar(props) {
  useEffect(() => {
    props.getToast("Welcome!", "Thanks for choosing this website. Hope, you find some cool wallpapers here.!")
  }, []);
  
  return (
    <div>
      {/* navbar */}
      <nav className='navbar sticky-top navbar-dark bg-primary rounded-bottom px-5 py-3'>
          <a href='https://bgimg.netlify.app/' className='navbar-brand fw-bolder fs-2' style={{fontFamily: 'Libre Baskerville'}} target={'_blank'} rel="noreferrer">BgImg</a>
          
          <form className='d-flex' onSubmit={(event) => {event.preventDefault()}}>
              <input
                className='form-control me-2'
                type='text'
                placeholder='Search'
                aria-label='Search'
                value={props.query}
                onChange={(e) => {props.updateQuery(e.target.value)}}
              />
              <div className="dropdown col-3">
                <input type="text" value={props.orientation} className="btn btn-warning dropdown-toggle rounded-3 col-12" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false" />
                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                  <li className='dropdown-item' onClick={() => {props.updateOrientation('All')}}>All</li>
                  <li className='dropdown-item' onClick={() => {props.updateOrientation('Landscape')}}>Landscape</li>
                  <li className='dropdown-item' onClick={() => {props.updateOrientation('Portrait')}}>Potrait</li>
                  <li className='dropdown-item' onClick={() => {props.updateOrientation('Square')}}>Square</li>
                </ul>
              </div>
            <button type="button" className="btn btn-danger ms-2" id="liveToastBtn" onClick={() => {props.searchPics(true)}}>Search</button>
          </form>
      </nav>
    </div>
  );
  
};

export default Navbar;
