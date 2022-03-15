import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./components/Nav"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About"
import UserTable from "./components/UserTable"
import TodoApp from "./components/TodoApp"

const App = () => {

  return (
    <Router>
    <div className="App">
        <Nav/>
        <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/usertable" element={<UserTable/>}/>
        <Route path="/todo" element={<TodoApp/>}/>
        </Routes>
    </div>
    </Router>
  );
}

export default App;
