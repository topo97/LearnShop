import { Link } from "react-router-dom";
import { useCart } from "../Hooks/Context";

const ProductCard = ({ producto }) => {

  const { addToCart } = useCart();

  return (

    <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden transition-hover w-100">

      <Link to={`/producto/${producto.isbn13}`} className="d-block bg-light p-3 text-center">
        <img
          src={producto.image}
          alt={producto.title}
          style={{ height: '180px', objectFit: 'contain' }}
        />
      </Link>

      <div className="card-body d-flex flex-column p-4">
        <h5 className="card-title h6 fw-bold mb-2 text-dark" style={{ minHeight: '2.8rem' }}>
          { producto.title }
        </h5>

        <p className="card-text small text-muted mb-4 flex-grow-1">
          { producto.subtitle ? producto.subtitle.substring(0, 50) + "..." : "Aprende con expertos."}
        </p>

        <div className="mt-auto">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <span className="fw-bold text-primary fs-4">{ producto.price}</span>
          </div>

          <button 
            className="btn btn-primary w-100 rounded-pill fw-bold" 
            onClick={() => addToCart( producto )}
            > Añadir
          </button>

        </div>
      </div>
    </div>
  );
};
export default ProductCard;