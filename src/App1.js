import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/home";
import { Menu } from "./pages/menu";
import { Contact } from "./pages/contact";
import { useState, createContext } from "react";

export const AppContext = createContext();

function App() {
  const [username, setUsername] = useState("Maggie");

  return (
    <div className="App">
      <AppContext.Provider value={{ username, setUsername }}>
        <Router>
          {/* NAV-BAR */}
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/contact">Contact</Link>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
