import { BrowserRouter, Routes, Route } from "react-router-dom";
import Acceso from "../views/Acceso";
import Home from "../views/Home";

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Acceso />} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouterApp