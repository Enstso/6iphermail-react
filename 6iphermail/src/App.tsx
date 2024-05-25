import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "@/views/Authentification/Register";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="#" element={<Register />} />
      </Routes>
      <Register></Register>
    </BrowserRouter>
  );
}
export default App;
