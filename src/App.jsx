import React, { useEffect } from 'react';
import NavBar from './components/layouts/NavBar';
import Footer from './components/layouts/Footer';
import { Outlet } from 'react-router-dom';
import './styles/themeLight.css'

function App() {

  return (
    <div className="App">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );

}

export default App;
