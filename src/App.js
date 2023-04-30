import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import SingleMovie from "./SingleMovie";

import ErrorPage from './ErrorPage';


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='movie/:id' element={<SingleMovie/>} />
        <Route path='*' element={<ErrorPage/>} />
      </Routes>
    </>
  )
}

export default App;
