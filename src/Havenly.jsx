import Navbar from "./components/Navbar_hero";
import About from "./components/About";
import Properties from "./components/Properties";
import Why_havenly from "./components/Why_havenly";
import Found from "./components/Found";
import FAQ from "./components/FAQ";
import Insight from "./components/Insight";
import Footer from "./components/Footer";


function Havenly () {
  return(
    <div className='bg-white'>
      <Navbar />
      <About />
      <Properties />
      <Why_havenly />
      <Found />
      <FAQ />
      <Insight />
      <Footer />
    </div>
  );
}

export default Havenly;