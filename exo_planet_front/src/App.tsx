import "./App.css";
import { Route, Routes } from "react-router-dom"
import PlanetList from "./pages/PlanetList";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PlanetList" element={<PlanetList />} />
      </Routes>
    </div>
  );
}

export default App;
