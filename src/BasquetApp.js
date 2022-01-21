import { Locales } from "./components/locals/locals/Locales"
import { NavBar } from "./components/navigation/NavBar/NavBar"
import { Banner } from "./components/banner/Banner";
import { Contact } from "./components/contact/Contact";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './styles/normalize.css';
import './styles/initialize.css';




  
  export const BasquetApp = () => {
    return (
        <>
          <NavBar />
          <Banner />
          <main className="container">
            <Locales />
            <Contact />
          </main>
        </>
    )
  }
