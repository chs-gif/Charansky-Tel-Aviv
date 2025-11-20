import logo from './logo.svg';
import './App.css';
import {Browser , BrowserRouter, Route }from 'react-router-dom'



function App() {
  return (
    <div className="App">
<BrowserRouter>
<Nav/>
<Routers>
<Route path="/user" element={<User/>} ></Route>
<Route path="/home" element={<Home/>} ></Route>
<Route path="/file" element={<File/>} ></Route>
</Routers>
</BrowserRouter>
    </div>
  );
}

export default App;
