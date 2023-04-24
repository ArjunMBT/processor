import React from 'react'
import {useEffect } from "react";

function Page8085() {
    useEffect(
        ()=>{
            alert("8085 will be load")
            return(
                ()=>{alert("8085 will be unload !")}
            )
        },[]
    )
  return (
    <div>
    <h1>Page8085</h1>
    </div>
  )
}

export default Page8085