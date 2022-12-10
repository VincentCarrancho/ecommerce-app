import { useState } from "react";
import ParentNavandSideBar from './Components/ParentNavAndSideBar'
import Cart from './Components/Cart'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ActionAreaCard from "./Components/PrimaryCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ParentNavandSideBar/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/t" element={<ActionAreaCard/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
