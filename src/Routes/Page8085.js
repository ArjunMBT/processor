import React from 'react'
import {useEffect } from "react";
import PageMain from '../Component/PageMain';
import Sidebar8085 from '../Semiconductor/F8085/Sidebar8085';

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
    <PageMain
    sidebar8085={<Sidebar8085/>}
    searchbarType="8085"
    />
    
    </div>
  )
}

export default Page8085
