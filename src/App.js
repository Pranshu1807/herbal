import "./App.css";
import Benefits from "./benefits";
import DarkRoots from "./darkRoots";
import AboutUs from "./AboutUs";
import TopSelling from "./topSelling";
import ProductDescription from "./productDescription";
import Doctors from "./Doctors";
import ContactUs from "./ContactUs";
import OurProducts from "./OurProducts";
import Home from "./home";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <Home></Home>
      <OurProducts></OurProducts>
      <Benefits></Benefits>
      {/* <DarkRoots></DarkRoots> */}
      {/* <AboutUs></AboutUs>
      <TopSelling></TopSelling>
      <ProductDescription></ProductDescription>
      <Doctors></Doctors>
      <ContactUs></ContactUs> */}
    </div>
  );
}

export default App;
