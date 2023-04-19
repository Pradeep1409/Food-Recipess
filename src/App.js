import React from 'react';
import Home from './Component/Home';
import About from './Component/About';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Contact from './Component/Contact';
import Guide from './Component/Guide';
import Cardrecipe from './Component/Cardrecipe';
import Cardtest from './Component/Cardtest';
import Error from './Component/Error';


function App() {
  return (
    <BrowserRouter>
    {/* <Header/> */}
    <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/:Mealid" element={<Cardtest/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
