
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCall } from "../util/api-con";

export function Call() {
    const { id } = useParams();
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
    }, [id]);

    return (
        <div className="container call-detail">
            <p><span className="fw-bold">{id}</span></p>
            <p><span className="fw-bold">Duration:</span> {call.duration}</p>
            <p><span className="fw-bold">Is archived:</span> {call.is_archived}</p>
            <p><span className="fw-bold">From:</span> {call.from}</p>
            <p><span className="fw-bold">To:</span> {call.to}</p>
            <p><span className="fw-bold">Direction:</span> {call.direction}</p>
            <p><span className="fw-bold">Call Type:</span> {call.call_type}</p>
            <p><span className="fw-bold">Via:</span> {call.via}</p>
            <p><span className="fw-bold">Created at:</span> {call.created_at}</p>
        </div>
    )
}