import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Main} from './components/Main';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Screens/Home';
import BlogDetails from './Screens/BlogDetails';
import Login from './Screens/Login';
import Signup from './Screens/Signup';

function App() {
  return (
    <Router>
    <div >
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/blog/:id' element={<BlogDetails/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/signup' element={<Signup/>}/>

        
        
      </Routes>
      
      
    </div>
    </Router>
  );
}

export default App;
