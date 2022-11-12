// import { Carousel } from "bootstrap";
import React from "react";
import NavbarHome from "../src/Navbar";
import CarouselHome from "../src/Carousel";
import DoctorInfo from "../src/Facilites";
import Faculty from "../src/Faculty";
import Footer from "../src/Footer";

function App() {
  return (
    <div className="App">
      <NavbarHome />
      <div class="carousel-cont">
        <CarouselHome/>
      </div>
      
      <div>
        <DoctorInfo />
      </div>
      <div >
      <Faculty />
      </div>
      
      {/* <Footer /> */}
      
    </div>
  );
}

export default App;
