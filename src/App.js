import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.bundle';

import BigCalendar from './/components/FCalendar'
import Menu from './/components/Menu'
import Login from './/components/Login'
import GestionUsuarios from './/components/GestionUsuarios'
import Perfil from './/components/Perfil'

import './App.css'

function App() {
  return (
    <Router>
      <Menu />
      <div className="container p-4">
        <Route path="/" exact component={Login} />
        <Route path="/Calendar" exact component={BigCalendar} />
        <Route path="/GestionUsuarios" exact component={GestionUsuarios} />
        <Route path="/GestionCitas" exact component={GestionUsuarios} />
        <Route path="/login" exact component={Login} />
        <Route path="/Perfil" exact component={Perfil} />
        {/* <Route path="/edit/:id" exact component={CreateNote} />
        <Route path="/create" exact component={CreateNote} />
        <Route path="/user" exact component={CreateUser} /> */}
      </div>

    </Router>
  );
}

export default App;
