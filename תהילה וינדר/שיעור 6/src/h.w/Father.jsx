import Details from "./Details";
import Contact from "./Contact";
import Gallery from "./Gallery";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from "./NavBar";
import FullData from "./FullData";

export default function Father(){
    return<>
    <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          {/* כאן מגדירים ניווטים */}
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/gallery" element={<Gallery></Gallery>}></Route>
          <Route path="/details/:id" element={<Details></Details>}>
            <Route path='fulldata' element={<FullData></FullData>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
}