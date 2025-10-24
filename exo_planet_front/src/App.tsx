import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PlanetList from "./pages/PlanetList";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/PlanetList" element={<PlanetList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;