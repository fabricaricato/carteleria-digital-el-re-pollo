import { BrowserRouter, Routes, Route } from "react-router-dom";
import Acceso from "../views/Acceso";
import Home from "../views/Home";
import PanelPrecios from "../views/PanelPrecios";
import Restablecer from "../views/Restablecer"
import ProtectedRoute from "../components/ProtectedRoute";

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Acceso />} />
        <Route path="/home" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>} />
        <Route path="/panel" element={<PanelPrecios />} />
        <Route path="/restablecer-contraseña" element={<Restablecer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouterApp