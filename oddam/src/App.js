import React from "react";
import { HashRouter, Routes, Route, BrowserRouter } from 'react-router-dom'
import Header from "./components/Header/Header";
import Home from "./components/Home";

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  </>

  );
}

export default App;
