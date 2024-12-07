import React from 'react';
import MainLayout from './Layouts/MainLayout';
import Navbar from './AboutUs/Navbar';
import Footer from './AboutUs/Footer';


const App = () => {
  return (
    <div>
       <Navbar></Navbar>
      <MainLayout />
      <Footer></Footer>
     
    </div>
  );
};

export default App;
