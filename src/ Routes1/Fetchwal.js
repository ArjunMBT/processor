import React from "react";
import { useParams } from "react-router-dom";
export default function Fetchwal()
{
    let {var_id}=useParams();
    return(
        <>
        <h3>The value is :{var_id}</h3>
        </>
    )
}