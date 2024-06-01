import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "@/views/Authentification/Register";
import "./App.css";
import Login from "./views/Authentification/Login";
import MailPage from "./views/Mail/Mail";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "./components/header/site-header";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <SiteHeader />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mails" element={<MailPage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}
export default App;
