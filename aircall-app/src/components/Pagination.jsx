export function Pagination(props) {

    let index = [];

    for (let i = 0; i < props.count / 10; i++) {
        index.push(i);
    }

    var handleClick = props.callback;

    return (
        <div className="d-flex justify-content-center">
            <nav aria-label="Page navigation" className="overflow">
                <ul className="pagination">
                    <li className="page-item"><button className="page-link" > &laquo; </button></li>
                    {index.map((x) => <li className="page-item" key={x + 1}><button className="page-link" onClick={() => handleClick(x + 1, "")}>{x + 1}</button></li>)}
                    <li className="page-item"><button className="page-link" > &raquo; </button></li>
                </ul>
            </nav>
        </div>
    );
}