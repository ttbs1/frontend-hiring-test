import { useState, useEffect } from "react";
import { authUser } from "../util/api-con";
import { useNavigate } from "react-router-dom";

export function Start() {
    const [data, setData] = useState({});


    useEffect(() => {
        authUser().then(response => setData({
            access_token: response.access_token,
            refresh_token: response.refresh_token,
            user: response.user
        }))
    }, [])

    localStorage.setItem("user_data", data);

    let navigate = useNavigate();
    navigate("/calls");

    return (
        <>
        </>
    )
}