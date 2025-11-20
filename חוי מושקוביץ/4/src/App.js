import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Galery from './Galery';
import Kesher from './kesher';
import Pratim from './Pratim';
import Full_play from './Full_play';
import Leazmin from './Leazmin';

function App() {
  return (
    <div className="App">
<BrowserRouter>
<Routes>
  <Route path="/galery" element={<Galery/>}/>
    <Route path="/kesher" element={<Kesher/>}/>
      <Route path="/Pratim" element={<Pratim/>}>
         <Route path="full_play" element={<Full_play/>}/>
          <Route path="leazmin" element={<Leazmin/>}/>
      </Route>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
