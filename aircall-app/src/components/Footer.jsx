export function Footer () {
    return (
        <div className="footer d-flex fixed-bottom">
            <div className="col-2 d-flex justify-content-center">
                <button className="btn btn-default"> <i className="fas fa-phone-alt"></i> </button>
            </div>
            <div className="col-2 d-flex justify-content-center">
                <button className="btn btn-default"> <i className="far fa-user"></i> </button>
            </div>
            <div className="col-4 d-flex justify-content-center">
                <button className="btn btn-default"><i className="fas fa-th"></i> </button>
            </div>
            <div className="col-2 d-flex justify-content-center">
                <button className="btn btn-default"><i className="fas fa-cog"></i> </button>
            </div>
            <div className="col-2 d-flex justify-content-center">
                <button className="btn btn-default"><i className="fas fa-dot-circle"></i> </button>
            </div>
        </div>
    )
}