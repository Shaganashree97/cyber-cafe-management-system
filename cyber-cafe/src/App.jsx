/* eslint-disable no-unused-vars */

import Header from './components/Header'
import { React } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
function App() {

  return (
    <>
      
      <Router>
      <Header />
        <Routes>
            <Route exact path="/pages/login" element={<Login />} />
        </Routes>
      </Router>
      {/* now go to /pages/login */}

      <h1><span>&nbsp;Internet Cafe</span>&nbsp;&nbsp;<br />Management System</h1>
      
      
    </>
  )
}

export default App
