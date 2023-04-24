import React from 'react'
import {useEffect } from "react";

function Page0() {
    useEffect(
        ()=>{
            alert("Sample page will be load")
            return(
                ()=>{alert("sample page will be unload !")}
            )
        },[]
    )
  return (
    <div>
    <h1>Page0</h1>
    </div>
  )
}

export default Page0