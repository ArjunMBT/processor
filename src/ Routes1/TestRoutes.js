import React from 'react'
import{BrowserRouter,Route,Routes} from 'react-router-dom';
import Menu from './Menu';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Fetchwal from './Fetchwal';
import Datashow1 from './Datashow1';
function TestRoutes() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Menu/>}/>
    <Route path="/Page1" element={<><Menu/><Page1/></>}/>
    <Route path="/Page2" element={<><Menu/><Page2/></>}/>
    <Route path="/Page3" element={<><Menu/><Page3/></>}/>
    <Route path='/page4/:var_id' element={<><Menu/><Fetchwal/></>}/>
    <Route path="/Page5" element={<><Menu/><Datashow1/></>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default TestRoutes