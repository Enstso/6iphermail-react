import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/components/authentification/auth-context"; // Ensure this path is correct
import Register from "./views/Authentification/Register";
import Login from "./views/Authentification/Login";
import MailPage from "./views/Mail/Mail";
import { ThemeProvider } from "./components/theme/theme-provider";
import { SiteHeader } from "./components/header/site-header";
import Settings from "./views/Settings/Settings";
import Home from "./views/Home/Home";
import Devices from "./views/Devices/Devices";
import ProtectedRoute from "@/components/authentification/auth-protected"; // Ensure this path is correct
import NotFound from "./views/NotFound";

function App() {
  return (
    <div className="container mx-auto">
      <BrowserRouter>
        <AuthProvider>
          <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
            <SiteHeader />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/mails"
                element={<ProtectedRoute><MailPage /></ProtectedRoute>}
              />
              <Route
                path="/devices"
                element={<ProtectedRoute><Devices /></ProtectedRoute>}
              />
              <Route
                path="/settings"
                element={<ProtectedRoute><Settings /></ProtectedRoute>}
              />
              <Route
                path="/settings/account"
                element={<ProtectedRoute><Settings /></ProtectedRoute>}
              />
              <Route
                path="/settings/mail"
                element={<ProtectedRoute><Settings /></ProtectedRoute>}
              />
               <Route
                path="/settings/contacts"
                element={<ProtectedRoute><Settings /></ProtectedRoute>}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ThemeProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
