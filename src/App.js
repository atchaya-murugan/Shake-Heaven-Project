import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import HappyPlace from "./components/HappyPlace";
import Gallery from "./components/Gallery";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import Service from "./components/Service";
import HpyCust from "./components/HpyCust";
import Socio from "./components/Socio";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <HappyPlace />
      <Gallery />
      <HowItWorks />
      <Service />
      <HpyCust />
      <Socio />
      <Footer />
    </div>
  );
}

export default App;
