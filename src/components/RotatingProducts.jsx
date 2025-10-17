import ProductCard from "./ProductCard"

export default function RotatingProducts() {
  const products = [
    { id: 1, name: "Pollo Entero", price: "$3500", image: "/images/pollo-entero.jpg" },
    { id: 2, name: "Pechuga", price: "$4200", image: "/images/pechuga.jpg" },
    { id: 3, name: "Alitas", price: "$2800", image: "/images/alitas.jpg" },
    { id: 4, name: "Menudos", price: "$1800", image: "/images/menudos.jpg" },
  ]

  // 🔸 Lógica para la rotación automática más adelante

  return (
    <div className="rotating-products">
      <h2>Productos Destacados</h2>
      <div className="rotating-grid">
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}
