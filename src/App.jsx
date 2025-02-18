import Contact from "./components/Contact";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Schedule from "./components/Schedule";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="bg-[#050506] min-h-screen">
      <div>
        <Navbar />
      </div>
      <div className="border">
        <Features />
      </div>
      <div>
        <Services />
      </div>
      <div>
        <Testimonials />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Schedule />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
