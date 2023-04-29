import React from 'react'
import Avabodhayami from './Avabodhayami';
import CopyrightNotice from './CopyrightNotice';
import './PageMain.css';
import Search from './Search';
import Sidebar from './Sidebar';
import StringSplitter from './StringSplitter';
import SegmentControl from '../Routes/SegmentControl';

// <Sidebar/>

export default function PageMain(props) {
  const searchType = props.searchType;
  return(
    <>
    <div className='fullcontainer'>
        <div className='Arrangement'>
              
              <div className=' item SearchBar'><Search/></div>
              <div className='ProjectTitle'><Avabodhayami/></div>
        </div>
          <div className='item SemengtedControl'><SegmentControl/></div>
          </div>
      <div className='ccontainer'> 
          <div className='item SideBar'>
    {if(searchType === "8085") <Sidebar8085 />
    
     else if(searchType === "8086") <Sidebar8086 />
    }
           </div>
          <div className=' item MainContent'> <StringSplitter/></div>
          <div className='item Output'>I am output</div>
          </div>
      <div className=' item Footer FooterStyle'><CopyrightNotice/> </div>
   
    </>
  
)
}

