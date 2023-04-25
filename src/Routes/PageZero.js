import React from 'react'
import { useEffect } from "react";

function PageZero() {

    useEffect(
        ()=>{
            alert("Sample page will be load")
            return(
                ()=>{alert("sample page will be unload !")}
            )
        },[]
    )
  return (
    <div >
    <h1 style={{color:"red"}}>
    PageZero
    </h1>
    </div>
  )
}

export default PageZero