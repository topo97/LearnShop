import { Link } from "react-router-dom";
import { useCart } from '../Hooks/Context';

export default function Carrito() {

  const { cart, removeItem, updateQty, total, clearCart, } = useCart();

  if (cart.length === 0) {

    return (

      <div className="container py-5 text-center">
        <h3 className="mb-3">Tu carrito está vacío</h3>

        <Link 
          className="btn btn-primary" 
          to="/productos"
          >Ver productos
        </Link>
      </div>
    );
  }

  return (
    
    <div className="container mt-5">
      <h2 className="mb-4 fw-bold">Carrito de Compras</h2>
      
      <div className="row">
        {/* Tabla */}
        <div className="col-lg-8">
          <div className="table-responsive bg-white shadow-sm rounded p-3">

            <table className="table align-middle">
              <thead className="table-light">

                <tr>
                  <th scope="col" style={{width: '40%'}}>Producto</th>
                  <th scope="col" className="text-center">Cantidad</th>
                  <th scope="col" className="text-end">Subtotal</th>
                </tr>

              </thead>
              <tbody>
                { cart.map( (item) => {
                  const precio = parseFloat(item.price?.toString().replace(/[^0-9.]/g, '')) || 0;
                  const subtotal = (precio * item.cantidad).toFixed(2);

                  return (
                    <tr key={ item.isbn13 }>
                      <td>
                        <div className="d-flex align-items-center">
                          <img 
                            src={ item.image } 
                            alt="" 
                            style={{ width: '50px', height: 'auto', marginRight: '15px' }} 
                          />
                          <span className="fw-bold small">{ item.title }</span>
                        </div>
                      </td>

                      <td className="text-center">
                        <div className="d-flex justify-content-center align-items-center gap-2">

                          <button 
                            className="btn btn-sm btn-outline-secondary py-0 px-2" 
                            onClick={() => updateQty(item.isbn13, item.cantidad - 1)}
                          > - </button>
                          
                          <span>{ item.cantidad }</span>
                          <button 
                            className="btn btn-sm btn-outline-secondary py-0 px-2" 
                            onClick={() => updateQty( item.isbn13, item.cantidad + 1)}
                          > + </button>
                      
                        </div>
                      </td>
                      
                      <td className="text-end fw-bold text-primary">
                        ${subtotal}
                      </td>
                      
                      <td className="text-end">
                        <button 
                          className="btn btn-sm text-danger" 
                          onClick={() => removeItem( item.isbn13 )}
                        >
                          <i className="bi bi-trash"></i> Borrar
                        </button>
                      </td>

                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* el total */}
        <div className="col-lg-4">
          <div className="card p-4 border-0 shadow-sm bg-light">
            
            <h5 className="fw-bold mb-4">Resumen</h5>
            <div className="d-flex justify-content-between mb-3">
            
              <span>Total acumulado:</span>
              <span className="fw-bold fs-4 text-success">${ total }</span>
            
            </div>
            <hr />
            
            <Link
              to="/checkout" 
              className="btn btn-primary w-100 fw-bold py-2 mb-2" 
              state={{ handleComprar: total }} 
              >Pagar ahora
            </Link>
            
            <button className="btn btn-link btn-sm w-100 text-decoration-none text-muted" onClick={ clearCart }>
              Vaciar carrito
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}