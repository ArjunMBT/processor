import React, { useState } from 'react';
import ParentComponentArm from './ParentComponentArm';


const SidebarArm = () => {
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
   
      <div className="sidebar">
        <div className="handle" onMouseDown={handleMouseDown} />
        <ul>
     
        <ParentComponentArm/>
      
        </ul>
      </div>
    </>
  );
};

export default SidebarArm;
