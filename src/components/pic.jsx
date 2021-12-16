function Pic(props) {  
    return (
        <div key={props.key} className="p-2 my-auto">
            <img className='img-fluid pointer' 
                src={props.item + '?auto=compress'} 
                alt="https://community.spotify.com/t5/image/serverpage/image-id/106208i2C0401950E6463A4/image-size/medium?v=v2&px=400"
                style={{cursor:'pointer'}} 
                onClick={() => (props.download(props.item))}
            /> 
        </div>
    );
}
export default Pic;
