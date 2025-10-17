import { useState } from "react"

export default function AdminPanel() {
  const [products] = useState([
    { id: 1, name: "Pollo Entero", price: "$3500" },
    { id: 2, name: "Pechuga", price: "$4200" },
    { id: 3, name: "Alitas", price: "$2800" },
  ])

  return (
    <div className="admin-panel">
      <h2>Panel de Administración</h2>
      <p>Acá podrás cambiar los precios y actualizar tu cartelera.</p>

      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio Actual</th>
            <th>Nuevo Precio</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.price}</td>
              <td>
                <input type="text" placeholder="Nuevo precio" />
              </td>
              <td>
                <button>Actualizar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}