import logo from './logo.svg';
import './App.css';
import Board from './4inRow/Board';
import GameBoard from './XO/GameBoard';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './URL/Navbar';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
        <Route path='/4Row' element={<Board></Board>}></Route>
        <Route path='/XO' element={<GameBoard></GameBoard>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
