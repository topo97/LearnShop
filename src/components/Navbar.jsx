import { NavLink, Link } from "react-router-dom";
import { useCart } from "../Hooks/Context";

export function Navbar() {
  const { cart } = useCart();
  const totalItems = cart.reduce((s, i) => s + i.cantidad, 0);

  return (
    <nav className="navbar bg-dark sticky-top py-4 shadow-sm">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center fw-bold text-light" to="/">
            <i className="bi bi-bag-fill text-warning me-2 fs-4"></i>        
          Learn<span className="text-warning">Shop</span>
        </Link>

        <ul className="navbar-nav ms-auto align-items-center gap-4 flex-row">

          <li className="nav-item">
            <NavLink
              to="/productos"
              className={({ isActive }) =>
                `nav-link ${isActive ? "fw-bold text-warning" : "text-info"}`
              }
            >
              Productos
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                `nav-link ${isActive ? "fw-bold text-warning" : "text-info"}`
              }
            >
              Admin
            </NavLink>
          </li>

          {/* Carrito */}
          <li className="nav-item">
            <Link
              to="/carrito"
              className="btn btn-outline-light position-relative"
            >
              <i className="bi bi-cart-fill"></i>

              {totalItems > 0 && (
                <span className="badge rounded-pill bg-info text-dark position-absolute top-0 start-100 translate-middle">
                  {totalItems}
                </span>
              )}
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}
