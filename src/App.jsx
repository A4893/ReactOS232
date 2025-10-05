import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mainrouter from '../mainrouter';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {

  return (
    <Router><Mainrouter/></Router>
  );
};

export default App
