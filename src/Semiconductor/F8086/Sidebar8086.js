import React, { useState } from 'react';
import ParentComponent8086 from './ParentComponent8086';


const Sidebar8086 = () => {
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
     
        <ParentComponent8086/>
      
        </ul>
      </div>
    </>
  );
};

export default Sidebar8086;
