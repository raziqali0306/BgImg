import React, {useEffect, useState} from 'react';
import Pic from './pic.jsx';

import Sentry from "react-activity/dist/Sentry";
import "react-activity/dist/Sentry.css";


function Pics() {
    const [pics, setPics] = useState([]);
    const [page, setpage] = useState(1);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        getPics();
    }, []);

    const getPics = () => {
        let myHeaders = new Headers();
        myHeaders.append('Authorization', '563492ad6f91700001000001183fe298d19746e7b065458c7f79c6b1');
        setpage(page + 1);
        fetch('https://api.pexels.com/v1/curated?page=' + `${page}` + '&per_page=54', {
            method: 'GET',
            headers: myHeaders,
          }).then(res => 
            res.json()
          ).then((json) => {
              let updatedPics = [...pics];
              json['photos'].forEach(element => {
                updatedPics.push(element['src']['original']);
              })
              setLoading(false);
              setPics(updatedPics);
          }).catch((error) => {
              console.log(error);
          })
    }

    return ( 
        <div className='container bg-light'>
            {loading ? 
                <div className="start-50 top-50 position-absolute translate-middle">
                    <Sentry
                    size={28}
                    color='blue' />
                </div>
            : 
                <div>
                    <div className="row row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-3 justify-content-md-center">
                        {pics.map((item, key) => (
                            <Pic 
                                id={key}
                                item={item}
                            />
                        ))}
                    </div>
                    <div class="d-grid gap-2 col-xl-2 col-lg-2 col-md-2 col-sm-3 col-4 py-5 mx-auto">
                        <button class="btn btn-outline-primary p-2" type="button" onClick={() => {getPics()}}>Load more</button>
                    </div>
                </div>
            }
        </div>
    );
}


export default Pics;