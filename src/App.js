import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Forgot from "./pages/auth/Forgot";
import Reset from "./pages/auth/Reset";
import NewPassword from "./pages/auth/NewPassword";
import Registers from "./pages/auth/companyauth/Registers";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />

          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/forgot" element={<Forgot />} />

          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/register-company" element={<Registers />} />
          <Route exact path="/new-password" element={<NewPassword />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
