function Pic(props) {  
    return (
        <img className='img-fluid pointer p-2 my-auto' 
            alt="https://img.icons8.com/fluency-systems-regular/96/000000/page-not-found.png"
            src={props.item + '?auto=compress'} 
            style={{cursor:'pointer'}} 
            onClick={() => (props.download(props.item))}
        /> 
    );
}
export default Pic;
