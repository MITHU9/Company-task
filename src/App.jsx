import Features from "./components/Features";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-[#050506] min-h-screen">
      <div>
        <Navbar />
      </div>
      <div>
        <Features />
      </div>
    </div>
  );
}

export default App;
