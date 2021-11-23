export function CallsList(props) {

    const list = props.calls.nodes.map((call) => {
        return (
            <div className="call" key={call.id}>
                <p>From: {call.from} </p>
                <p>To: {call.to}</p>
                <p>Via :{call.via}</p>
            </div>
    )})

    return (
        <div className="calls col-10">
            { list }
        </div>
    );
}