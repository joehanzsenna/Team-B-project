import React from "react";
import HomeSection1 from "../components/HomePageComponents/HomeSection1";
import HomeSection2 from "../components/HomePageComponents/HomeSection2";
import HomeSection3 from "../components/HomePageComponents/HomeSection3";
import HomeSection4 from "../components/HomePageComponents/HomeSection4";
import HomeSection5 from "../components/HomePageComponents/HSection5Folder/HomeSection5";
import HomeSection6 from "../components/HomePageComponents/HomeSection6";
import HomeSection7 from "../components/HomePageComponents/HomeSection7";
import HomeSection8 from "../components/HomePageComponents/HomeSection8";
import HomeSection9 from "../components/HomePageComponents/HomeSection9";
import Aboutsec10 from "../components/AboutPage/Aboutsec10";
import Navbar from '../components/NavBar'
// import NavBar from "../components/NavBar";

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <HomeSection1/>
      <HomeSection2/>
      <HomeSection3/>
      <HomeSection4/>
      <HomeSection5/>
      <HomeSection6/>
      <HomeSection7/>
      <Aboutsec10/>
      <HomeSection8 />
      <HomeSection9 />
    </div>
  );
};

export default HomePage;
