import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "@/views/Authentification/Register";
import "./App.css";
import Login from "./views/Authentification/Login";
import MailPage from "./views/Mail/Mail";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "./components/header/site-header";
import Settings from "./views/Settings/Settings";
import Home from "./views/Home/Home";
import Devices from "./views/Devices/Devices";
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <SiteHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mails" element={<MailPage />} />
          <Route path="/devices" element={<Devices />} />
          <Route path="/settings" element={<Settings/>}/>
          <Route path="/settings/account" element={<Settings/>}/>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}
export default App;
