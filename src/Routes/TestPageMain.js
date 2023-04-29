import React from 'react'
import Avabodhayami from '../Component/Avabodhayami';
import CopyrightNotice from '../Component/CopyrightNotice';
import '../Component/PageMain.css'
import Search from '../Component/Search';
import Sidebar from '../Component/Sidebar';
import StringSplitter from '../Component/StringSplitter';

export default function TestPageMain() {
  return(
    <>
    <div className='fullcontainer'>
        <div className='Arrangement'>
              
              <div className=' item SearchBar'><Search/></div>
              <div className='ProjectTitle'><Avabodhayami/></div>
        </div>
          <div className='item SemengtedControl'>I am TestMain Page </div>
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
