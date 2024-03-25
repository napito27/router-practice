import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { About, AuthGuard, Dashboard, Home, NotFound, User } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/user"
          element={
            <AuthGuard>
              <User />
            </AuthGuard>
          }
        />
        <Route
          path="/dashboard"
          element={
            <AuthGuard>
              <Dashboard />
            </AuthGuard>
          }
        />
        <Route
          path="/*"
          element={<NotFound />}
        />
      </Routes>
    </Router>
  );
}

export default App;
