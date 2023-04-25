import React from "react";

import {NavLink} from "react-router-dom";

function Menu() {


    // <li style={li_style}><Link to ="/src/Semiconductor/8085/Page8085.js">8085</Link></li>
    //    <li style={li_style}><Link to ="/src/Semiconductor/8086/Page8086.js">8086</Link></li>
    //    <li style={li_style}><Link to ="/src/Semiconductor/Arm/PageArm.js">Arm</Link></li>

    const li_style={float:'left',display:'inline-block',backgroundColor:'transparent',
    width:'10%%',border:'5px white double'
}
  return (
   <>
   <ul>
   <li style={li_style}><NavLink to="/PageZero" style={({isActive})=>
   ({color: isActive ?'red':'blue',backgroundColor: isActive ?"green":"yellow"})}>Sample Page</NavLink>
   </li>

   <li style={li_style}><NavLink to="/Page8085" style={({isActive})=>
    ({color: isActive ?'red':'blue',backgroundColor: isActive ?"green":"yellow"})}>8085</NavLink>
    </li>

    <li style={li_style}><NavLink to="/Page8086" style={({isActive})=>
    ({color: isActive ?'red':'blue',backgroundColor: isActive ?"green":"yellow"})}>8086</NavLink>
    </li>

    <li style={li_style}><NavLink to="/PageArm" style={({isActive})=>
    ({color: isActive ?'red':'blue',backgroundColor: isActive ?"green":"yellow"})}>Arm</NavLink>
    
    </li>
   </ul>
   
   </>
  )
}

export default Menu

