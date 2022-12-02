import { useState } from 'react'
import {supabase} from './conexao/conexao'
import './App.css'
import { 
  BrowserRouter as  Router, 
  Routes, 
  Route,
  Redirect} from "react-router-dom"
import Auth from './pages/Auth'
import Home  from './pages/Home'

function App() {
  return (
    <Router>
      <Routes>
      <Route
      path='/auth'
      element={<Auth/>}
      />
      <Route
      exact path='/'
      element={<Home/>}
      />
      <Redirect path='/'
      to='/auth'
      />
      </Routes>
    </Router>
    
  );
}

export default App;
