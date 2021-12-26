import React from 'react';
import Pic from './pic.jsx';
import Sentry from "react-activity/dist/Sentry";
import "react-activity/dist/Sentry.css";

function Pics(props) {
    return ( 
        // <div className='container bg-light pt-3 mb-0'>
        <div className='pt-3'>
            {props.loading ? 
                <div className="start-50 top-50 position-absolute translate-middle">
                    <Sentry
                    size={28}
                    color='blue' />
                </div>
            : 
                <div className='pics'>
                    <div className="row row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-3 justify-content-md-center">
                        {props.pics.map((item, index) => (
                            <Pic 
                                key={index}
                                item={item}
                                download={props.download}
                            />
                        ))}
                    </div>
                    <div className="d-grid gap-2 col-xl-2 col-lg-2 col-md-2 col-sm-3 col-4 my-5 mx-auto"> 
                    {/* col-xl-2 col-lg-2 col-md-2 col-sm-3 col-4 */}
                        <button className="btn btn-outline-primary" type="button" onClick={() => {props.searchPics()}}>Load more</button>
                    </div>
                </div>
            }
        </div>
    );
}


export default Pics;