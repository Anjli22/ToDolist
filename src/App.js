import logo from './logo.svg';
import './App.css';
import {useEffect, useState } from "react";
import reactDom from 'react-dom';
import PrimarySearchAppBar from "./Components/Navbar";
import Todolist from "./Components/Todolist";
import Navbar1 from "./Components/Navbar"
function App() {
  return (
    <>
    <Navbar1/>
      <Todolist/>
   </>
    
  );
}

export default App;
