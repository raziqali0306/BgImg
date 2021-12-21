import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Toast } from 'bootstrap';

import ToastPopUp from './components/toast.jsx';
import Navbar from './components/navbar.jsx';
import Pics from './components/pics.jsx';

function App() {
  const [pics, setPics] = useState([]);
  const [page, setpage] = useState(1);
  const [loading, setLoading] = useState(true);
  const defaultApi =
    'https://api.pexels.com/v1/curated?page=' + page + '&per_page=54';

  const searchPics = () => {
    getToast(
      'Note',
      'Search option will be available soon!<br/>Thank you for your patience.',
    );
  };

  const getPics = (url = defaultApi) => {
    let myHeaders = new Headers();
    myHeaders.append(
      'Authorization',
      '563492ad6f91700001000001183fe298d19746e7b065458c7f79c6b1',
    );
    setpage(page + 1);
    fetch(url, {
      method: 'GET',
      headers: myHeaders,
    })
      .then((res) => res.json())
      .then((json) => {
        let updatedPics = [...pics];
        json['photos'].forEach((element) => {
          updatedPics.push(element['src']['original']);
        });
        setLoading(false);
        setPics(updatedPics);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const download = (item) => {
    axios({
      url: item,
      method: 'GET',
      responseType: 'blob',
    }).then((res) => {
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute(
        'download',
        `bgimg_${Math.floor(Math.random() * 100000)}.png`,
      );
      link.click();
    });
  };

  const getToast = (toastHead = '', toastBody = '') => {
    var toastLiveExample = document.getElementById('liveToast');
    document.getElementById('toastHead').innerHTML = toastHead;
    document.getElementById('toastBody').innerHTML = toastBody;
    var toast = new Toast(toastLiveExample);
    toast.show();
  };

  useEffect(() => {
    getPics();
  }, []);

  return (
    <div>
      <Navbar searchPics={searchPics} getToast={getToast} />
      <Pics
        pics={pics}
        loading={loading}
        getPics={getPics}
        download={download}
      />
      <ToastPopUp />
    </div>
  );
}

export default App;
