import { Outlet } from 'react-router-dom';
import React from 'react';



const Viewer = () => {
  return (
    <>
    <div>List of Properties</div>
    <Outlet/>
    </>
    
  )
}

export default Viewer;