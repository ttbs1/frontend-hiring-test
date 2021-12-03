import { Link } from "react-router-dom";

export function CallsList(props) {

    const list = props.calls.nodes.map((call) => {
        return (
            <Link to={`/calls/${call.id}`} key={call.id}>
                <div className="call">
                    <p>From: {call.from} </p>
                    <p>To: {call.to}</p>
                    <p>Via :{call.via}</p>
                </div>
            </Link>
        )
    })

    return (
        <div className="calls col-10">
            {list}
        </div>
    );
}