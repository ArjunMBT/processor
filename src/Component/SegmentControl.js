import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import PageArm from '../Semiconductor/Arm/PageArm'
import Menu from './Menu'
import Page0 from './Page0'
import Page8086 from '../Semiconductor/F8086/Page8086'
import Page8085 from '../Semiconductor/F8085/Page8085'

function SegmentControl() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Menu/>}/>
    <Route path="/src/Component/Page0.js" element={<><Menu><Page0/></Menu></>}/>
    <Route path="/src/Semiconductor/F8085/Page8085.js" element={<><Menu><Page8085/></Menu></>}/>
    <Route path="/src/Semiconductor/F8086/Page8086.js" element={<><Menu><Page8086/></Menu></>}/>
    <Route path="/src/Semiconductor/Arm/PageArm.js" element={<><Menu><PageArm/></Menu></>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default SegmentControl