import { useState, useEffect } from "react";
import { getCalls } from "../util/api-con";
//import { useNavigate } from "react-router-dom";

export function Calls() {
    const [calls, setCalls] = useState({});


    useEffect(() => {
        var user = JSON.parse(sessionStorage.user_data);
        getCalls(user.access_token).then(response => setCalls({
            nodes: response.nodes,
            totalCount: response.totalCount,
            hasNextPage: response.hasNextPage
        }))
    }, []);

    return (
        <div className="calls">
            <div className="call">
                asdfafsdsfd
                {calls.totalCount}
            </div>
        </div>
    )
}