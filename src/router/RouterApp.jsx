import { BrowserRouter, Routes, Route } from "react-router-dom";
import Acceso from "../views/Acceso";
import Home from "../views/Home";
import PanelPrecios from "../views/PanelPrecios";

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Acceso />} />
        <Route path="/home" element={<Home />} />
        <Route path="/panel" element={<PanelPrecios/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouterApp