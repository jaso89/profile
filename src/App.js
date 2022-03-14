import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./Nav"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./About"
import Api from "./Api"
import TodoApp from "./TodoApp"

const App = () => {

  return (
    <Router>
    <div className="App">
        <Nav/>
        <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/api" element={<Api/>}/>
        <Route path="/todo" element={<TodoApp/>}/>
        </Routes>
    </div>
    </Router>
  );
}

export default App;
