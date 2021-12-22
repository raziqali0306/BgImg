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
  const [query, setQuery] = useState('');
  const updateQuery = (q) => {
    setQuery(q);
  };

  const urls = {
    default: `https://api.pexels.com/v1/curated?page=${page}&per_page=54`,
    search: `https://api.pexels.com/v1/search?query=${query}&page=${page}&per_page=56`,
  };

  const searchPics = (newItems = false) => {
    if (query !== '' && newItems) {
      setLoading(true);
      setPics([]);
      setpage(1);
    }

    if (newItems && query === '') {
      getToast(
        'Alert',
        'Enter Tags to search <strong>Eg.: Nature, Cars</strong>',
      );
    } else if (newItems && query !== '') {
      getPics(urls['search'], newItems);
    } else if (query === '') {
      getPics();
    } else {
      getPics(urls['search'], newItems);
    }
  };

  const getPics = (url = urls['default'], newItems = false) => {
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
        let updatedPics = [];
        if (!newItems) {
          updatedPics = [...pics];
        }
        json['photos'].forEach((element) => {
          updatedPics.push(element['src']['original']);
        });
        setLoading(false);
        if (updatedPics.length === 0) {
          getPics(urls['default']);
          getToast('Info', `We Couldn't Find Anything For "${query}"`);
          setQuery('');
        }
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
    searchPics();
  }, []);

  return (
    <div>
      <Navbar
        query={query}
        updateQuery={updateQuery}
        searchPics={searchPics}
        getToast={getToast}
      />
      <Pics
        pics={pics}
        loading={loading}
        searchPics={searchPics}
        download={download}
      />
      <ToastPopUp />
    </div>
  );
}

export default App;
