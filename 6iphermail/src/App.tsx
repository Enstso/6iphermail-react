import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/components/authentification/auth-context"; // Assurez-vous du bon chemin
import Register from "./views/Authentification/Register";
import Login from "./views/Authentification/Login";
import MailPage from "./views/Mail/Mail";
import { ThemeProvider } from "./components/theme/theme-provider";
import { SiteHeader } from "./components/header/site-header";
import Settings from "./views/Settings/Settings";
import Home from "./views/Home/Home";
import Devices from "./views/Devices/Devices";
import ProtectedRoute from "@/components/authentification/auth-protected"; // Assurez-vous du bon chemin
import NotFound from "./views/NotFound";
function App() {
  return (
    <div className="container mx-auto">
      <BrowserRouter>
        <AuthProvider>
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <SiteHeader />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/mails"
                element={<ProtectedRoute element={<MailPage />} />}
              />
              <Route
                path="/devices"
                element={<ProtectedRoute element={<Devices />} />}
              />

              <Route
                path="/settings"
                element={<ProtectedRoute element={<Settings />} />}
              />
              <Route
                path="/settings/account"
                element={<ProtectedRoute element={<Settings />} />}
              />
              <Route
                path="/settings/mail"
                element={<ProtectedRoute element={<Settings />} />}
              />
              <Route path="*" element={<NotFound/>} />

            </Routes>
          </ThemeProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
