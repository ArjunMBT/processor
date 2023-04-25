import React from "react";
import { useLocation } from "react-router-dom";
export default function Datashow1()
{
    const location=useLocation();
    const{name,loc,age,email}=location.state
    return(
        <>
        <strong>
        <ul>
        <li>{name}</li>
        <li>{loc}</li>
        <li>{age}</li>
        <li>{email}</li>
        </ul>
        </strong>
        </>
    )
}