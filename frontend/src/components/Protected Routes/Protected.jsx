import React, { useEffect } from 'react';
import { useAlert } from "react-alert";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Protected = (props) => {
    const { Component } = props;
    const navigate = useNavigate();

    const alert = useAlert();
    const user = useSelector((state) => state.user);

    useEffect(async () => {
        console.log(user)
        if (user.error !== "" && user.error !== undefined) {
            alert.error(user.error.message);
            navigate("/")
        }
    }, [user])

    return (
        <div>
            <Component />
        </div>
    )
}

export default Protected