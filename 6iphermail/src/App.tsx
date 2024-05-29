import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "@/views/Authentification/Register";
import "./App.css";
import Login from "./views/Authentification/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="#" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
