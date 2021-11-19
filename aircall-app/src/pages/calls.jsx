import { useState, useEffect } from "react";
import { getCalls } from "../util/api-con";
import "./calls.css"
//import { useNavigate } from "react-router-dom";

export function Calls() {
    const [calls, setCalls] = useState({});


    useEffect(() => {
        getCalls().then(response => setCalls({
            nodes: response.nodes,
            totalCount: response.totalCount,
            hasNextPage: response.hasNextPage
        }))
    }, []);

    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="calls col-10">
                {calls.nodes.map((call) => 
                    <div className="call" key={call.id}>
                        <p>From: {call.from} </p>
                        <p>To: {call.to}</p>
                        <p>Via :{call.via}</p>
                    </div>
                )}
                {calls.totalCount}
            </div>
        </div>
    )
}