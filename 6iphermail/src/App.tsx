import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "@/views/Authentification/Register";
import "./App.css";
import Login from "./views/Authentification/Login";
import MailPage from "./views/Mail/Mail";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mails" element={<MailPage/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
