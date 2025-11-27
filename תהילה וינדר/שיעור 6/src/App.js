import logo from './logo.svg';
import './App.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Home from './Home';
// import About from './About';
// import NavBar from './NavBar';
// import User from './User';
// import Users from './Users';
// import AddUser from './AddUsers';
import Father from './h.w/Father';

function App() {
  return (
    <div className="App">
      <Father></Father>
    </div>
  );
}
// {/* <BrowserRouter>
//         <NavBar></NavBar>
//         <Routes>
//           {/* כאן מגדירים ניווטים */}
//           <Route path="/home" element={<Home></Home>}></Route>
//           <Route path="/about" element={<About></About>}></Route>
//           <Route path="/users" element={<Users></Users>}>
//             <Route path='add' element={<AddUser></AddUser>}></Route>
//             <Route path=':id' element={<User></User>}></Route>
//           </Route>
//         </Routes>
//       </BrowserRouter> */}
export default App;