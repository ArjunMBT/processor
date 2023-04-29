import React from 'react'
import { useEffect } from "react";
import PageMain from '../Component/PageMain';



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
  <>
  <h1>Page zero</h1>
  </>
  )
}

export default PageZero