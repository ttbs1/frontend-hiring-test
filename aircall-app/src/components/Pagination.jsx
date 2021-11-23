export function Pagination(props) {

    let index = [];

    for (let i = 0; i < props.count / 10; i++) {
        index.push(i);
    }

    return (
        <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">
                <li className="page-item"><a className="page-link" href="#"> &laquo; </a></li>
                {index.map((x) => <li className="page-item"><a className="page-link" href="#">{x + 1}</a></li>)}
                <li className="page-item"><a className="page-link" href="#"> &raquo; </a></li>
            </ul>
        </nav>
    );
}