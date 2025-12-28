import { useState } from "react";
import { useCart } from '../Hooks/Context';
import { Link } from "react-router-dom";

export default function Checkout() {

  const { total, clearCart } = useCart();
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [ordenId, setOrdenId] = useState(null);

  // precio final del carrito
  const [precioTotal] = useState(total);

  const submit = (e) => {
    e.preventDefault();
    const fakeId = "ORD-" + Math.floor(Math.random() * 100000);
    
    // name y user, (db) 
    setOrdenId(fakeId);
    clearCart();
  };

  if (ordenId) {
    return (
      <div className="container py-5">
        <div className="card text-center shadow-sm mx-auto border-0 p-4" style={{ maxWidth: 500 }}>
          <div className="card-body">
            <i className="bi bi-check-circle-fill text-success" style={{ fontSize: "4rem" }}></i>

            <h3 className="fw-bold mt-3">¡Gracias por tu compra!</h3>
            <p className="text-muted">
              Hemos enviado el detalle a <strong>{ email }</strong>.
            </p>
            <div className="alert alert-secondary py-2">
              Orden ID: <strong>{ ordenId }</strong>
            </div>
            
            {/* BTN retorno */}
            <Link to="/" className="btn btn-primary w-100 mt-3 fw-bold">
              Volver a la tienda
            </Link>
          
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="card shadow-sm mx-auto border-0" style={{ maxWidth: 600 }}>
        <div className="card-body p-4">
          
          <h3 className="fw-bold mb-4 text-center">Finalizar compra</h3>

          <div className="alert alert-light border text-center mb-4 shadow-sm">
            <span className="fw-semibold text-muted">Total a pagar:</span>
            <span className="fs-3 fw-bold ms-2 text-success">${ precioTotal }</span>
          </div>

          <form onSubmit={submit}>  
            <div className="mb-4">

              <label className="form-label fw-semibold">Email</label>
              <div className="input-group">
                <span className="input-group-text bg-white border-end-0">
                  <i className="bi bi-envelope-fill text-muted"></i>
                </span>
                <input
                  type="email"
                  className="form-control border-start-0"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ejemplo@correo.com"
                  required
                />

              </div>
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold">Nombre Completo</label>
              <div className="input-group">

                <span className="input-group-text bg-white border-end-0">
                  <i className="bi bi-person-fill text-muted"></i>
                </span>

                <input
                  type="text"
                  className="form-control border-start-0"
                  value={ nombre }
                  onChange={ (e) => setNombre(e.target.value) }
                  placeholder="Juan Pérez"
                  required
                />

              </div>
            </div>

            <button className="btn btn-success btn fw-bold w-100 shadow-sm mt-2" type="submit">
              CONFIRMAR COMPRA
            </button>
            
          </form>
        </div>
      </div>
    </div>
  );
}
