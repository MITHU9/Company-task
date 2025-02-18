import Features from "./components/Features";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

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
    </div>
  );
}

export default App;
