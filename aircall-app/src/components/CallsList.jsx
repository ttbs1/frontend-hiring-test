import { Link } from "react-router-dom";

export function CallsList(props) {

    const list = props.calls.nodes.map((call) => {

        let date = new Date(call.created_at);
        return (
            <Link to={`/calls/${call.id}`} key={call.id}>
                <div className="call d-flex">
                    &nbsp;<div className="col-1 text-nowrap" id="icon">
                        <i className="fas fa-phone-alt"></i><i className="fas fa-long-arrow-alt-down"></i>
                    </div>
                    <div className="col-8">
                        <span id="dark">{call.from}</span>
                        <p>Tried to call on: {call.to}</p>
                    </div>
                    <div className="col-2" id="time">
                        {Number(date.getHours().toLocaleString()) < 10 ? "0" + (date.getHours().toLocaleString()) : Number(date.getHours().toLocaleString())}:{Number(date.getMinutes().toLocaleString()) < 10 ? "0" + (date.getMinutes().toLocaleString()) : Number(date.getMinutes().toLocaleString())}
                    </div>
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