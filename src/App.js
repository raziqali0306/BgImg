import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Navbar from './components/navbar.jsx';
import Pics from './components/pics.jsx';

function App() {
  const [pics, setPics] = useState([]);
  const [page, setpage] = useState(1);
  const [loading, setLoading] = useState(true);

  const getPics = () => {
    let myHeaders = new Headers();
    myHeaders.append(
      'Authorization',
      '563492ad6f91700001000001183fe298d19746e7b065458c7f79c6b1',
    );
    setpage(page + 1);
    fetch('https://api.pexels.com/v1/curated?page=' + page + '&per_page=54', {
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
      link.setAttribute('download', 'bgimg.png');
      link.click();
    });
  };

  useEffect(() => {
    getPics();
  }, []);

  return (
    <div>
      <Navbar />
      <Pics
        pics={pics}
        loading={loading}
        getPics={getPics}
        download={download}
      />
    </div>
  );
}

export default App;
