import './App.css';
import Navbar from './components/Navbar';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Users from './components/Users';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';
import Read from './components/Read';

function App() {
  return (
<div>
  <Router>
  {/* <Navbar/> */}
  <Routes>
    <Route path='/' element={<Users/>}/>
    <Route path='/create' element={<CreateUser/>}/>
    <Route path='/read/:id' element={<Read/>}/>
    <Route path='/update/:id' element={<UpdateUser/>}/>
  </Routes>
  </Router>

</div>
  );
}

export default App;
