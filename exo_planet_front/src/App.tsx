import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PlanetList from "./pages/PlanetList";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/PlanetList" element={<PlanetList />} />
        </Routes>
    </div>
  );
}

export default App;