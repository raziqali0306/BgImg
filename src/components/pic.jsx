import axios from "axios";

function Pic(props) {
    const download = () => {
        axios({
            url: `${props.item}`,
            method: 'GET',
            responseType: 'blob'
        }).then((res) => {
            const url =window.URL.createObjectURL(new Blob([res.data]))
            const link = document.createElement('a');
            link.href = url
            link.setAttribute('download', 'image.png')
            link.click()
        })
      };

    return ( 
        <div key={props.id} className="col-lg-4 col-md-6 col-sm-6 col-6 p-2">
            {/* <a href={props.item} download onClick={e => download(e)}> */}
                <img className='img-fluid pointer' src={props.item} alt="https://community.spotify.com/t5/image/serverpage/image-id/106208i2C0401950E6463A4/image-size/medium?v=v2&px=400"  style={{cursor:'pointer'}} onClick={download}/> 
            {/* </a> */}
        </div>
    );
}
export default Pic;
