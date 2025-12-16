import ProductCard from "../components/ProductCard";
import productos from "../data/productos";
import { useCart } from "../Hooks/Context";

export default function Productos() {
  const { addToCart } = useCart();

  return (
    <div className="container my-5">

      <div className="text-center mb-5">
        <h2 className="fw-bold">Nuestros cursos</h2>
        <p className="text-secondary">
          Aprendé nuevas habilidades a tu ritmo
        </p>
      </div>

      <div className="row g-4">
        {productos.map(p => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={p.id}>
            <ProductCard
              producto={p}
              onAdd={() => addToCart(p)}
            />
          </div>
        ))}
      </div>

    </div>
  );
}


