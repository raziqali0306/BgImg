import React, { Component } from 'react';
import { Toast } from 'bootstrap';
import ToastPopUp from './toast.jsx';

class Navbar extends Component {
  
  render() {
    return (
      <div>
        {/* Welcome Note */}
        <div className='alert alert-info mb-0 text-center' role='alert'>
          Welcome! Thanks for choosing this website. Hope, you find some cool wallpapers
          here.!
        </div>

        {/* navbar */}
        <nav className='navbar sticky-top navbar-dark bg-primary rounded-bottom px-5 py-3'>
            <a href='bgimg.netlify.app' className='navbar-brand fw-bolder fs-2' style={{fontFamily: 'Libre Baskerville'}} >BgImg</a>
            <form className='d-flex'>
              <input
                className='form-control me-2'
                type='search'
                placeholder='Search'
                aria-label='Search'
              />
              {/* <button className='btn btn-danger' type='button' onClick={this.getToast}>
                Search
              </button> */}
              <button type="button" className="btn btn-danger" id="liveToastBtn" onClick={() => (this.getToast())}>Search</button>

            </form>
        </nav>
        <ToastPopUp 
          body={"Searching option will be available soon.! Thanks for your patience."}
        />
        
      </div>
    );
  }

  getToast = () => {
    var toastLiveExample = document.getElementById('liveToast');
    var toast = new Toast(toastLiveExample);
    toast.show();
  };
};

export default Navbar;
