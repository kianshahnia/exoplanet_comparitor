import { Route, Routes } from "react-router-dom";
import PlanetList from "./pages/PlanetList";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      


      <div className="app-content">
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/PlanetList" element={<PlanetList />} />
        </Routes>
      </div>

      <div className="bg-animation">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="stars4"></div>
      </div>

    </div>
  );
}

export default App;