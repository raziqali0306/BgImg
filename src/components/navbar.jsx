import React, { Component } from 'react';
import { Toast } from 'bootstrap';


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
        <nav className='navbar sticky-top navbar-dark bg-primary rounded-bottom px-5'>
            <a href='www.google.com' className='navbar-brand fw-bolder fs-2' style={{fontFamily: 'Libre Baskerville'}} >BgImg</a>
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
              <button type="button" class="btn btn-danger" id="liveToastBtn" onClick={this.getToast}>Search</button>

            </form>
        </nav>

        {/* Toast code */}
        <div class="position-fixed bottom-0 end-0 p-3" style={{zIndex: 11}}>
          <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
              <img src="..." class="rounded me-2" alt="..." />
              <strong class="me-auto">Alert</strong>
              <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
            Searching option will be available soon.! Thanks for your patience.
            </div>
          </div>
        </div>

      </div>
    );
  }

  getToast = () => {
    var toastLiveExample = document.getElementById('liveToast')
    var toast = new Toast(toastLiveExample)
    toast.show()
  }
};

export default Navbar;
