import React, { useState } from 'react';
import ParentComponent from './ParentComponent';


const Sidebar = () => {
  const [width, setWidth] = useState(250);

  const handleMouseMove = (e) => {
    setWidth(e.clientX);
  };

  const handleMouseUp = (e) => {
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  };

  const handleMouseDown = (e) => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <>
    <br></br>
    <br></br>
      <div className="sidebar">
        <div className="handle" onMouseDown={handleMouseDown} />
        <ul>
        <br></br>
        <br></br>
        <ParentComponent/>
      
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
