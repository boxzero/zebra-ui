import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import ZebraDashBoard from './pages/ZebraDashboard/ZebraDashBoard';
import { routes } from './routes';
import Notfound from './components/common/Notfound';
import Login from './components/signin/Login';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout/>}>
         {routes}
      </Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='*' element={<Notfound/>}>
        
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
