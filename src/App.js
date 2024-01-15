import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Movie from './components/movie';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/movie/:id' element={<Movie />} />
    </Routes>
  );
}

export default App;
