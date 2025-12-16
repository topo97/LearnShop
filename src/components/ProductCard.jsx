import { Link } from "react-router-dom";

export default function ProductCard({ producto, onAdd }) {
  return (
    <div className="card h-100 shadow-sm">
      <img src={producto.img} className="card-img-top" alt={ producto.titulo } />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{ producto.titulo }</h5>
      
        <p className="card-text">{ producto.descripcion }</p>
        <div className="mt-auto">

          <p className="fw-bold">${ producto.precio }</p>
          <div className="d-grid gap-2">

            <button className="btn btn-primary" onClick={() => onAdd({ ...producto, cantidad: 1 })}>
              Añadir al carrito
            </button>

            <Link to={`/producto/${ producto.id }`} className="btn btn-outline-secondary"
              >Ver detalle
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
