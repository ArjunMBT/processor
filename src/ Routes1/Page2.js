import React from "react";

export default function Page2(){
    const setval=(e)=>{
        localStorage.setItem("userid","u100")
    }
    return(
        <div>
        <h1>page2</h1>
        <br></br>
        <input type='button' value='VALSET' onClick={setval}/>
        </div>
    )
}