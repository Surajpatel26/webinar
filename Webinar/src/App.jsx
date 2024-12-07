import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import WebinarPage from './Webinar/Pages/WebinarPage/WebinarPage';
import MainLayout from './Layouts/MainLayout';
import HeroSection from './Webinar/HeroSection/HeroSection';
import WebinarCard from './Webinar/WebinarCard/WebinarCard';
import Footer from './Webinar/Footer/Footer';

const App = () => {
  return (
   <div>
    <MainLayout></MainLayout>
    <HeroSection></HeroSection>
    <WebinarCard></WebinarCard>
    <Footer></Footer>
    
    
   </div>
  );
};

export default App;
