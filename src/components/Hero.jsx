import { Link } from "react-router-dom";

export default function Hero({ heroImage }) {

  return (

    <div
      className="hero d-flex align-items-center"
      style={{
        height: "70vh",
        backgroundImage: `url(${ heroImage })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container text-center text-info">
        <h1 className="fw-bold display-4">Aprende a tu ritmo</h1>
        <p className="lead text-dark fw-semibold">
          Cursos diseñados para acompañar tu crecimiento.
        </p>
  
        {/* Btn q redirig3 a productos */}
        <Link
          className='btn btn-outline-dark px-5 py-3 mt-4 fw-bold rounded-pill'
          to="/productos" 
          > <i className="bi bi-rocket-takeoff-fill me-2"></i>
          Empezar ahora
        </Link>
        
      </div>
    </div>
  );
}

