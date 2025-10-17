import { useState } from "react"
import Header from "./components/Header"
import RotatingProducts from "./components/RotatingProducts"
import Sidebar from "./components/Sidebar"
import AdminPanel from "./views/AdminPanel"
import Footer from "./components/Footer"
import "./index.css"

export default function App() {
  const [showAdmin, setShowAdmin] = useState(false)

  return (
    <div className="app-container">
      <Header />
      <nav className="navbar">
        <button onClick={() => setShowAdmin(false)}>Cartelera</button>
        <button onClick={() => setShowAdmin(true)}>Panel Admin</button>
      </nav>

      <div className="content">
        {!showAdmin ? (
          <>
            <RotatingProducts />
            <Sidebar />
          </>
        ) : (
          <AdminPanel />
        )}
      </div>

      <Footer />
    </div>
  )
}
