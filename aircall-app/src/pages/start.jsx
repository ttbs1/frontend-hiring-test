import { useState, useEffect } from "react";
import { authUser } from "../util/api-con";
import { useNavigate } from "react-router-dom";

export function Start() {
    const [user, setUser] = useState({});


    useEffect(() => {
        authUser().then(response => setUser({
            access_token: response.access_token,
            refresh_token: response.refresh_token,
            user: response.user
        }))
    }, []);

    useEffect(() => {
        sessionStorage.setItem("user_data", JSON.stringify(user));
    }, [user]);

    let navigate = useNavigate();
    navigate("/calls");

    return (
        <>
        </>
    )
}