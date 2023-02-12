import "./App.css";
import { Routes, Route } from "react-router";
import { Home } from "../src/Pages/Home-page";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login-Page/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
