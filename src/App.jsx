import React, { useEffect } from 'react';
import NavBar from './components/layouts/NavBar';
import Footer from './components/layouts/Footer';
import Navigator from './components/layouts/Navigator';
import { Outlet } from 'react-router-dom';
import './index.css'

function App() {

  return (
    <div className="App">
      <NavBar></NavBar>
      <Navigator></Navigator>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );

}

export default App;