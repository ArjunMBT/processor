import React from 'react'
import React ,{useState} from "react";
import { Link,NavLink} from "react-router-dom";
import Page8085 from '../Semiconductor/F8085/Page8085';
import Page8086 from '../Semiconductor/F8086/Page8086';
import PageArm from '../Semiconductor/Arm/PageArm';
import Page0 from './Page0';
function Menu() {


    // <li style={li_style}><Link to ="/src/Semiconductor/8085/Page8085.js">8085</Link></li>
    //    <li style={li_style}><Link to ="/src/Semiconductor/8086/Page8086.js">8086</Link></li>
    //    <li style={li_style}><Link to ="/src/Semiconductor/Arm/PageArm.js">Arm</Link></li>

    const li_style={float:'left',display:'inline-block',backgoundColor:'transparent',
    width:'40%',border:'5px white double'
}
  return (
   <>
   <ul>
   <li style={li_style}><NavLink to="/src/Component/Page0.js" style={({isActive})=>
   ({color: isActive ?'red':'blue',backgroundColor: isActive ?"lightgreen":"lightpink"})}>Sample Page</NavLink>
   </li>

   <li style={li_style}><NavLink to="/src/Semiconductor/F8085/Page8085.js" style={({isActive})=>
    ({color: isActive ?'red':'blue',backgroundColor: isActive ?"lightgreen":"lightpink"})}>8085</NavLink>
    </li>

    <li style={li_style}><NavLink to="/src/Semiconductor/F8086/Page8086.js" style={({isActive})=>
    ({color: isActive ?'red':'blue',backgroundColor: isActive ?"lightgreen":"lightpink"})}>8086</NavLink>
    </li>

    <li style={li_style}><NavLink to="/src/Semiconductor/Arm/PageArm.js" style={({isActive})=>
    ({color: isActive ?'red':'blue',backgroundColor: isActive ?"lightgreen":"lightpink"})}>Arm</NavLink>
    
    </li>
   </ul>
   </>
  )
}

export default Menu

