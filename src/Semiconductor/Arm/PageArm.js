import React from 'react'
import {useEffect } from "react";

function PageArm() {
    useEffect(
        ()=>{
            alert("Arm will be load")
            return(
                ()=>{alert("Arm will be unload !")}
            )
        },[]
    )
  return (
    <div>
    <h1>PageArm</h1>
    </div>
  )
}

export default PageArm