import React from "react";
import { HashRouter, Route, Routes} from 'react-router-dom';
import About from './routes/About'
import Home from './routes/Home'
import './App.css'
import Navigation from "./components/Navigation";



function App() {
  return (
    <div>
      
    <HashRouter>
        <Routes>
          <Route path ="/about" element={<About></About>}></Route>
          <Route path ="/*" element={<Home></Home>}></Route>
        </Routes>
      
    </HashRouter>
    </div>
    
  );
}

export default App;

// class 라서 해시라우터가 안붙는건가? 아오
