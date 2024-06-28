import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Main} from './components/Main';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Screens/Home';
import BlogDetails from './Screens/BlogDetails';

function App() {
  return (
    <Router>
    <div >
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/blog/:id' element={<BlogDetails/>}/>

        
        
      </Routes>
      
      
    </div>
    </Router>
  );
}

export default App;
