import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import ZebraDashBoard from './pages/ZebraDashboard/ZebraDashBoard';
import { routes } from './routes';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout/>}>
         {routes}
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
