
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCall } from "../util/api-con";

export function Call() {
    let { id } = useParams();
    const [call, setCall] = useState({});

    useEffect(() => {
        getCall(id).then(response => setCall({
            duration: response.duration,
            is_archived: response.is_archived,
            from: response.from,
            to: response.to,
            direction: response.direction,
            call_type: response.call_type,
            via: response.via,
            created_at: response.created_at,
            notes: response.notes
        }))
    }, []);

    return (
        <div className="container">
            <p></p>
            <p>{id}</p>
            <p>Duration: {call.duration}</p>
            <p>Is archived: {call.is_archived}</p>
            <p>From: {call.from}</p>
            <p>To: {call.to}</p>
            <p>Direction: {call.direction}</p>
            <p>Call Type: {call.call_type}</p>
            <p>Via: {call.via}</p>
            <p>Created at: {call.created_at}</p>
        </div>
    )
}