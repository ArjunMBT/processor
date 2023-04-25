import React, { useState } from "react";
import { Link,NavLink } from "react-router-dom";
export default function Menu()
{
    const[id,SetId]=useState(10);
    const[name,SetName]=useState("Ashok");
    const[info, SetInfo]=useState({name:'Rajesh',loc:"kolkata",age:35,email:"raj@gmail.com"})
    const li_style={float: 'left',display: 'inline-block',backgroundColor:'lightgreen',
width:'15%',border:'5px brown double'}
return(
    <>
    <ul>
    <li style={li_style}><Link to ="/Page1">Page 1</Link></li>
    <li style={li_style}><Link to ="/Page2">Page 2</Link></li>
    <li style={li_style}><NavLink to="/Page3" style={({isActive})=>
    ({color: isActive ?'red':'blue',backgroundColor: isActive ?"lightgreen":"lightpink"})}>Page3</NavLink></li>
    <li style={li_style}><Link to={"/Page4/"+name}>UseCase4</Link></li>
    <li style={li_style}><Link to="/Page5" state={info}>UseCase5</Link></li>
    </ul>
<br></br>
<br />
<br />
    </>
)
}