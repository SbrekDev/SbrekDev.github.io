
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import FooterComponent from './components/FooterComponent';
import NavComponent from './components/NavComponent';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import Discover from './pages/Discover';
import Contact from './pages/Contact';
import Login from './pages/Login';
import CreateAccount from './pages/CreaeAccount'
import Forgot from './pages/Forgot'

function App() {
 
  return (
    <>

<BrowserRouter>
      
      <NavComponent></NavComponent>
       
     
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/discover' element={<Discover/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/createAccount' element={<CreateAccount/>}/>
        <Route path='/forgot' element={<Forgot/>}/>
      </Routes>


    </BrowserRouter>

     
    
          <FooterComponent></FooterComponent> 

    </>
  )
}

export default App
