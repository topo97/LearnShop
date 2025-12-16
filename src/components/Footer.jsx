export default function Footer() {
  return (
    <footer className="bg-dark text-light py-5 mt-auto">
      <div className="container">
        <div className="row text-center text-md-start">

          {/* Marca */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">LernShop</h5>
            <p className="text-secondary">
              Comprá fácil, rápido y seguro desde cualquier lugar.
            </p>
          </div>

          {/* Contacto */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Contacto</h5>

            <p className="text-secondary mb-1 d-flex align-items-center gap-2">
              <i className="bi bi-envelope-fill"></i>
              <a href="mailto:contacto@LernShop.com" className="text-decoration-none text-secondary">
                contacto@LernShop.com
              </a>
            </p>

            <p className="text-secondary mb-1 d-flex align-items-center gap-2">
              <i className="bi bi-geo-alt-fill"></i>
              Santa Fe, Argentina
            </p>

            <p className="text-secondary mb-1 d-flex align-items-center gap-2">
              <i className="bi bi-telephone-fill"></i> 
              0800-000-010
            </p>
          </div>

          <div className="col-md-4 mb-4 ms-auto">
            <form className="d-flex flex-column gap-2">

              {/* Nombre */}
              <div className="input-group input-group-sm">
                <span className="input-group-text">
                  <i className="bi bi-person-fill"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tu nombre"
                  required
                />
              </div>

              {/* Email */}
              <div className="input-group input-group-sm">
                <span className="input-group-text">
                  <i className="bi bi-envelope-fill"></i>
                </span>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Tu email"
                  required
                />
              </div>

              <button className="btn btn-warning btn-sm fw-bold mt-2">
                Enviar
              </button>
            </form>
          
          </div>
        </div>

        <hr className="border-secondary" />
        <p className="text-center text-secondary mb-0">
          © 2025 LernShop. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

