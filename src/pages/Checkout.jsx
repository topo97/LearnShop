import { useState } from "react";
import { useCart } from '../Hooks/Context';

export default function Checkout() {
  const { total, clearCart } = useCart();
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [ordenId, setOrdenId] = useState(null);

  const submit = (e) => {
    e.preventDefault();
    const fakeId = "ORD-" + Math.floor(Math.random() * 100000);
    setOrdenId(fakeId);
    clearCart();
  };

  if (ordenId) {
    return (
      <div className="container py-5">
        <div className="card text-center shadow-sm mx-auto" style={{ maxWidth: 500 }}>
          <div className="card-body">
            <i className="bi bi-check-circle-fill text-success fs-1 mb-3"></i>
            <h3 className="fw-bold">¡Gracias por tu compra!</h3>
            <p className="text-muted">
              Tu orden es <strong>{ ordenId }</strong>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="card shadow-sm mx-auto" style={{ maxWidth: 600 }}>
        <div className="card-body">

          <h3 className="fw-bold mb-3 text-center">Finalizar compra</h3>

          <div className="alert alert-light border text-center mb-4">
            <span className="fw-semibold">Total a pagar:</span>
            <span className="fs-4 fw-bold ms-2 text-success">${ total }</span>
          </div>

          <form onSubmit={ submit }>

            <div className="mb-4">
              <label className="form-label fw-semibold">Email</label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-envelope-fill"></i>
                </span>
                <input
                  type="email"
                  className="form-control"
                  value={ email }
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Nombre</label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-person-fill"></i>
                </span>
                <input
                  className="form-control"
                  value={ nombre }
                  onChange={(e) => setNombre( e.target.value )}
                  required
                />
              </div>
            </div>

            <button className="btn btn-success w-100 fw-bold" type="submit">
              COMPRAR
            </button>

          </form>

        </div>
      </div>
    </div>
  );
}
