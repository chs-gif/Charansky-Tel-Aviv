import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App4inrow from './4inrow/App4inrow';
import AppC from './cities/AppC';
import NavBar from './NavBar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path='/4inrow' element={<App4inrow></App4inrow>}></Route>
        <Route path='/cities' element={<AppC></AppC>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
