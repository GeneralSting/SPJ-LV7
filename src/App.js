import React from 'react';
import {Routes, Route} from 'react-router-dom'
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Dodaj } from './components/Dodaj';
import Artikl from './components/Artikl';
import { Edit } from './components/Edit';
import FilterTable from './components/FilterTable';



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} >
          <Route path=':artiklId'element={<Artikl />} />
        </Route>
        <Route path='/dodaj' element={<Dodaj />} />
        <Route path='/edit/:EditArtikl' element={<Edit />}/>
        <Route path='/pretrazivanje' element={<FilterTable />} />
      </Routes>
    </>
  );
}

export default App;
