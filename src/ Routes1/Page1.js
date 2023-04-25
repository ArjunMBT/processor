import React from "react";
import { useEffect } from "react";
export default function Page1()
{

    useEffect(
        ()=>{
            alert("component will be loading")
            return(
                ()=>{alert("component will unload !")}
            )
        },[]
    )
    return(
        <div>
        <h1>page1</h1>
        </div>
    )
}