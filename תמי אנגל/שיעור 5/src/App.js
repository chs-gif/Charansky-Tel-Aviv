import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import NavBar from './Navbar';
import App4androw from './4androw/App4androw'
import AppClass1 from './class 1/AppClass1';
import AppClass2 from './class 2/AppClass2';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar></NavBar>
        <Routes>
          <Route path='/4androw' element={<App4androw></App4androw>}></Route>
          <Route path='/class 1' element={<AppClass1></AppClass1>}></Route>
          <Route path='/class 2' element={<AppClass2></AppClass2>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
