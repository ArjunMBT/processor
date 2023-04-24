import React from 'react'
import Avabodhayami from './Avabodhayami';
import CopyrightNotice from './CopyrightNotice';

import './PageMain.css';
import Search from './Search';
import Sidebar from './Sidebar';
import StringSplitter from './StringSplitter';

export default function PageMain() {
  return(
    <>
    <div className='fullcontainer'>
        <div className='Arrangement'>
              
              <div className=' item SearchBar'><Search/></div>
              <div className='ProjectTitle'><Avabodhayami/></div>
        </div>
          <div className='item SemengtedControl'>I am SemengtedControl</div>
          </div>
      <div className='ccontainer'> 
          <div className='item SideBar'><Sidebar/></div>
          <div className=' item MainContent'> <StringSplitter/></div>
          <div className='item Output'>I am output</div>
          </div>
      <div className=' item Footer FooterStyle'><CopyrightNotice/> </div>
   
    </>
  
)
}
