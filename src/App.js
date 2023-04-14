// import {Routes, Route} from 
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="page2/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
