import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../Hooks/Context";

export default function ProductoDetalle() {

  const { isbn13 } = useParams();
  const { getProductoByIsbn, addToCart } = useCart();
  
  // Estados para manejar la asincronía
  const [seleccionado, setSeleccionado] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {

      getProductoByIsbn(isbn13).then((data) => {
      setSeleccionado(data);
      setCargando(false);
    }); 
  }, [isbn13, getProductoByIsbn]);

  // 1. louder de carga 
  if (cargando) {

    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-primary mb-3"></div>
        <p>CARGANDO..</p>
      </div>
    );
  }

  // 2. si falla la carga
  if (!seleccionado || seleccionado.error === "book not found") {

    return (
      <div className="container py-5 text-center">
        <h3 className="text-danger">Libro no encontrado</h3>
        <p className="text-muted">El ISBN { isbn13 } no está en nuestro catálogo.</p>
        <Link to="/" className="btn btn-primary mt-3"
          > Volver al Inicio
        </Link>
      </div>
    );
  }

  return (

    <div className="container my-5">
      <div className="row align-items-center g-5">
    
        <div className="col-md-6 text-center">
          <img
            src={ seleccionado.image }
            alt={ seleccionado.title }
            className="img-fluid rounded shadow-lg"
            style={{ maxHeight: 450, objectFit: 'contain' }}
          />
        </div>

        <div className="col-md-6">
          <h1 className="fw-bold mb-3">{ seleccionado.title }</h1>
          <p className="text-secondary mb-4 fs-5">
            { seleccionado.subtitle || seleccionado.desc || "Información técnica disponible para este ejemplar."}
          </p>

          <div className="card bg-light border-0 mb-4">
            <div className="card-body">
              <span className="display-6  fw-bold text-primary">{ seleccionado.price }</span>
            </div>
          </div>

          <div className="d-flex gap-3">
            <button
              className="btn btn-success btn-lg px-5 shadow-sm"
              onClick={ () => addToCart(seleccionado)}><i className="bi bi-cart-plus me-2">
              </i> Añadir al carrito
            </button>

            <Link 
              to="/" 
              className="btn btn-outline-secondary btn-lg">
              Volver
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}