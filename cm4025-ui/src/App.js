import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';


//large portions of this codes structure have been adapted from https://github.com/machadop1407/react-website-tutorial
//I used this tutorial https://www.youtube.com/watch?v=QwarZBtFoFA&t which guides through the creation of the above code

function App() {
  return (
      <div className="App">
          <Router>
              <Navbar />
              <Routes>
                  <Route path='/home' exact element={<Home/>}/>
                  <Route path='/about' exact element={<About/>}/>
                  <Route path='/login' exact element={<Login/>}/>
                  <Route path='/signup' exact element={<Signup/>}/>
              </Routes>
              <Footer />
          </Router>
      </div>
  );
}


export default App;
