import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Menu from './Menu';
import Page8085 from './Page8085';
import Page8086 from './Page8086';
import PageZero from './PageZero';
import PageArm from './PageArm';
function SegmentControl() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Menu/>}/>
        <Route path="/PageZero" element={<><Menu><PageZero/></Menu></>}/>
        <Route path="/Page8085" element={<><Menu><Page8085/></Menu></>}/>
        <Route path="/Page8086" element={<><Menu><Page8086/></Menu></>}/>
        <Route path="/PageArm" element={<><Menu><PageArm/></Menu></>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default SegmentControl