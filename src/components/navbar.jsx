import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className='navbar sticky-xl-top navbar-dark bg-primary'>
          <div className='container-fluid'>
            <a href='www.google.com' className='navbar-brand fw-bold fs-1' >BgImg</a>
            {/* <form className='d-flex' action='#' method='post'>
              <input
                className='form-control me-2'
                type='search'
                placeholder='Search'
                aria-label='Search'
              />
              <button className='btn btn-danger' type='submit'>
                Search
              </button>
            </form> */}
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
