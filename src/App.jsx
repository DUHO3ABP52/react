import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Register from "./components/Auth/Register";
import UserList from "./components/Users/UserList";
import UserDetail from "./components/Users/UserDetail";
import PrivateRoute from "./components/Layout/PrivateRoute";
import "./index.css";
import { useSelector } from "react-redux";

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Router>
      {isAuthenticated && <Navbar />}
      <Routes>
        {isAuthenticated ? (
          <>
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<UserList />} />
              <Route path="/users/:id" element={<UserDetail />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </>
        ) : (
          <>
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/register" />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;