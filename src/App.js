import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./components/home/home";
import Menu from "./components/menu/menu";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu/:id" element={<Menu />} />
      </Routes>
    </>
  );
}

export default App;
