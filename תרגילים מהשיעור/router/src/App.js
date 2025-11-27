import About from './About';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home';
import NavBar from './NavBar';
import User from './User';
import Users from './Users';
import AddUser from './AddUser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        {/* הגדרה מה יקרה כשהURL ישתנה */}
        <Routes>
          <Route path="/home" element={ <Home/> }/>
          <Route path="/about" element={ <About/> }/>
          <Route path="/users" element={ <Users/> }>
            {/* הגדרה של תתי ראוטס - הקומפוננטות המוגדרות כאן יוצגו בתוך הקומפוננטת אבא איפה שכתובה הקומפוננטה Outlet */}
            <Route path='add' element={ <AddUser/> }/>
            {/* הגדרת פרמטר בURL */}
            <Route path=':id' element={ <User/> }/>
          </Route>
        </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;
