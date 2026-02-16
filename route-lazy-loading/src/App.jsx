import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Lazy load pages ONLY when route opens
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Profile = lazy(() => import("./pages/Profile"));
const Settings = lazy(() => import("./pages/Settings"));

function App() {
  return (
    <Router>
      <div className="container">

        <h1 className="title">🚀 Route-Based Lazy Loading SPA</h1>

        <nav className="nav">
          <Link to="/">Dashboard</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/settings">Settings</Link>
        </nav>

        {/* Suspense wrapper for lazy routes */}
        <Suspense fallback={<div className="loader">Loading Page...</div>}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Suspense>

      </div>
    </Router>
  );
}

export default App;
