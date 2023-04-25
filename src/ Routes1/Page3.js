import React from "react";
import { Navigate } from "react-router-dom";
export default function Page3(){ 
    if(localStorage.getItem('userid'))
    {
    return(
        <div>
        <h1>page3</h1>
        </div>
    )
    }
    else{
        return <Navigate to='/page2' replace/>;
    }
}