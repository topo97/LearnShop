import { Link } from "react-router-dom";
import { useCart } from '../Hooks/Context';

export default function Carrito() {
  const { cart, removeItem, updateQty, total, clearCart } = useCart();

  if (cart.length === 0) {
  return (
    <div className=" py-5 text-center">
      <i className="bi bi-cart-x fs-1 text-secondary mb-3"></i>
      <h3 className="mb-3">Tu carrito está vacío</h3>
      <Link className="btn btn-primary" to="/productos">
        Ver productos
      </Link>
    </div>
  );
}

  return (
    <div className="container">
      <h2 className="mb-4">Carrito de compras</h2>
      
      <div className="row g-4">
        {/* LISTA PRODUCTOS */}
        <div className="col-md-8">
          { cart.map(i => (
      
            <div className="card mb-3 shadow-sm" key={i.id}>
              <div className="card-body d-flex align-items-center gap-3">

                <img
                  src={ i.img }
                  alt={ i.titulo }
                  width="90"
                  className="rounded"
                />

                <div className="flex-grow-1">
                  <h5 className="mb-1">{i.titulo}</h5>
                  <p className="mb-1 text-muted">
                    ${ i.precio } c/u
                  </p>

                  <div className="d-flex align-items-center gap-2">
                    <input
                      type="number"
                      min="1"
                      value={ i.cantidad }
                      className="form-control form-control-sm"
                      style={{ width: 80 }}
                      onChange={(e) =>
                        updateQty(i.id, Number(e.target.value))
                      }
                    />

                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => removeItem(i.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>

                <div className="fw-bold">
                  ${ i.precio * i.cantidad }
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* RESUMEN */}
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="mb-3"> Resumen </h5>

              <p className="d-flex justify-content-between">
                <span>Total</span>
                <strong>${ total }</strong>
              </p>

              <hr />

              <button
                className="btn btn-outline-secondary w-100 mb-2"
                onClick={ clearCart }
              >
                Vaciar carrito
              </button>

              <Link
                to="/checkout"
                className="btn btn-primary w-100"
              >
                Finalizar compra
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
