import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Homepage from '../pages/Homepage'
import './App.css'

function App() {
  return (
    <>
    <BrowserRouter> 
    <Routes>
     <Route path="/" element={<Homepage />} />
    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
