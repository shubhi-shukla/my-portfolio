import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Services from './Components/Services';
import Work from './Components/Work';
import About from './Components/About';
import Reviews from './Components/Reviews';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  return (
    <>
      <Navbar/>
      <div id = "content-wrapper">
        <Home/>
        <Services/>
        <Work/>
        <About/>
        {/* <Reviews/> */}
        <Contact/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
