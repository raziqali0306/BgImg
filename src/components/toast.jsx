function ToastPopUp() {
return (
        <div className="position-fixed bottom-0 end-0 p-3 rounded-3" style={{zIndex: 11}}>
            <div id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                    <img src="https://img.icons8.com/fluency/20/000000/circled.png" alt="..."/>
                    <strong className="me-auto ms-2" id="toastHead">toastHead</strong>
                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div className="toast-body" id="toastBody">toastHead</div>
            </div>
        </div>
    );
}
export default ToastPopUp;
