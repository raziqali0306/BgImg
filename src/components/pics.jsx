import React, {useEffect, useState} from 'react';

function Pics() {

    const [pics, setPics] = useState([]);
    useEffect(() => {
        getPics();
    }, [])

    useEffect(() => {
        console.log(pics);
    }, [pics])

    const getPics = () => {
        console.log("Hello guys! I'm under the water.")
        let myHeaders = new Headers();
        myHeaders.append('Authorization', '563492ad6f91700001000001183fe298d19746e7b065458c7f79c6b1');
        fetch('https://api.pexels.com/v1/curated?page=1&per_page=54', {
            method: 'GET',
            headers: myHeaders,
          }).then(res => 
            res.json()
          ).then((json) => {
              let pics = [];
              json['photos'].forEach(element => {
                  pics.push(element['src']['original']);
              })
              setPics(pics);
          }).catch((error) => {
              console.log(error);
          })
    }

    return ( 
        <div className='container bg-light'>
            <div className="row">
                {pics.map((item, key) => (
                    <div key={key} className="col-lg-4 col-md-6 col-sm-6 col-6 p-2">
                        <img className='img-fluid pointer' src={item} alt="Girl in a jacket"  style={{cursor:'pointer'}}/> 
                    </div>
                ))}
            </div>
        </div>
    );
}


export default Pics;