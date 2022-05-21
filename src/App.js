import React from 'react';
import {Routes, Route} from 'react-router-dom'
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Dodaj } from './components/Dodaj';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dodaj' element={<Dodaj />} />
      </Routes>
    </>
  );
}

export default App;
