import { useParams, Link } from "react-router-dom";
import productos from "../data/productos";
import { useCart } from "../Hooks/Context";

export default function ProductoDetalle() {
  const { id } = useParams();
  const producto = productos.find(p => p.id === id);
  const { addToCart } = useCart();

  if (!producto) {
    return (
      <div className="container py-5 text-center">
        <h4>Producto no encontrado</h4>
        <Link to="/productos" className="btn btn-secondary mt-3">
          Volver a productos
        </Link>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <div className="row align-items-center g-5">

        {/* Imagen */}
        <div className="col-md-6 text-center">
          <img
            src={producto.img}
            alt={producto.titulo}
            className="img-fluid rounded shadow-sm"
            style={{ maxHeight: 350 }}
          />
        </div>

        {/* Info */}
        <div className="col-md-6">
          <h2 className="fw-bold mb-3">{producto.titulo}</h2>

          <p className="text-secondary mb-4">
            {producto.descripcion}
          </p>

          <p className="fs-4 fw-bold mb-4">
            ${producto.precio}
          </p>

          <div className="d-flex gap-3">
            <button
              className="btn btn-primary btn-lg"
              onClick={() => addToCart(producto)}
            >
              <i className="bi bi-cart-plus me-2"></i>
              Agregar al carrito
            </button>

            <Link to="/productos" className="btn btn-outline-secondary btn-lg">
              Seguir comprando
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
