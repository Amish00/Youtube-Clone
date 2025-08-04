
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Main from "./components/Main/Main";
import Watch from "./components/Watch/Watch";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} /> 
        </Route>
        <Route path="/watch" element={<Watch />} />
      </Routes>
    </Router>
  );
}

export default App;