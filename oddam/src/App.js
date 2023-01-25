import React from "react";
import { HashRouter, Routes, Route, BrowserRouter } from 'react-router-dom'

import Header from "./components/Header/Header";
import Home from "./components/Home";
import Contact from "./components/Contact/Contact";
import Login from './components/Login/Login'
import Register from './components/Register/Register'

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/logowanie' element={<Login />} />
        <Route path='/rejestracja' element={<Register />} />
      </Routes>
    </BrowserRouter>
  </>

  );
}

export default App;
