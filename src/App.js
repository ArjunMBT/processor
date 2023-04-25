import React from 'react';
import './App.css';
import SegmentControl from './Routes/SegmentControl';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import TestRoutes from './ Routes1/TestRoutes';
// import PageMain from './Component/PageMain';
// <PageMain/>
// <SegmentControl/>

function App() {
  return (
    <>
    <SegmentControl/>
    <TestRoutes/>
    </>
);
}

export default App;
