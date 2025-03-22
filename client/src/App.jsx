import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./pages/Home/Navbar";
import Home from "./pages/Home/Home";
import Models from "./pages/Models/Models";
import Datasets from "./pages/Datasets/Datasets";
import Details from "./pages/Details/Details";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthProvider } from './context/AuthContext';
import RegularDashboard from './pages/Dashboard/RegularDashboard';
import AdminDashboard from './pages/Dashboard/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  if (!import.meta.env.VITE_GOOGLE_CLIENT_ID) {
    console.error('Google Client ID is not configured');
    return <div>Error: Google OAuth is not configured properly</div>;
  }

  return (
    <GoogleOAuthProvider 
      clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}
      onScriptLoadError={() => console.error('Google Script failed to load')}
    >
      <AuthProvider>
        <Router>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/models" element={<Models />} />
            <Route path="/datasets" element={<Datasets />} />
            <Route path="/details/:id" element={<Details />} />
            <Route 
              path="/dashboard/regular" 
              element={
                <ProtectedRoute allowedRoles={['regular']}>
                  <RegularDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/dashboard/admin" 
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminDashboard />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </Router>
      </AuthProvider>
    </GoogleOAuthProvider>
  );
};

export default App;