import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Main} from './components/Main';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className='bg-success' style={{ minHeight: '100vh' }}>
      <Navbar/>
      <Main/>
    </div>
    </Router>
  );
}

export default App;
