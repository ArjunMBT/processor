import React from 'react'
import {useEffect } from "react";

function Page8086() {
    useEffect(
        ()=>{
            alert("8086 will be load")
            return(
                ()=>{alert("8086 will be unload !")}
            )
        },[]
    )
  return (
    <div>
    <h1>Page8086</h1>
    </div>
  )
}

export default Page8086