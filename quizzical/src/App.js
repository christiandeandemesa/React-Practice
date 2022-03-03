import {useState, useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Start from './views/Start';
import Quizzical from './views/Quizzical';
import Error from './views/Error';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Start/>}/>
        <Route path='/quizzical' element={<Quizzical/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;