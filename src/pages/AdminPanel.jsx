import { useCart } from '../Hooks/Context';
import { useAuth } from '../Hooks/AuthContext'; // 1. Importamos el Auth
import { useNavigate } from 'react-router-dom'; // Para redireccionar al salir

export default function AdminPanel() {
  const { productos } = useCart();
  const { logout } = useAuth(); // 2. Extraemos la función logout
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); 
    navigate('/login'); // Al salir, lo mandamos al login
  };

  return (
    <div className="container-fluid py-4">
      <div className="d-flex justify-content-between align-items-start mb-4">
        <div>
          <h2 className="fw-bold">Panel de Administración</h2>
          <p className='text-muted small'> Gestionando { productos?.length || 0 } productos </p>
        </div>

        {/* Grupo de botones de acción superior */}
        <div className="d-flex gap-2">
          <button className="btn btn-success">
            <i className="bi bi-plus-lg me-1"></i> 
            Nuevo producto
          </button>
          
          {/* 3. Botón de Cerrar Sesión */}
          <button onClick={handleLogout} className="btn btn-outline-danger">
            <i className="bi bi-box-arrow-right me-1"></i>
            Cerrar Sesión
          </button>
        </div>
      </div>

      <div className="card shadow-sm border-0">
        <div className="card-body p-0">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              { productos?.map( p => (
                <tr key={ p.isbn13 }>
                  <td>
                    <div className="d-flex align-items-center gap-3">
                      <img
                        src={ p.image }
                        alt={ p.title }
                        width="50"
                        className="rounded shadow-sm"
                      />
                      <div>
                        <strong className="d-block">{ p.title }</strong>
                        <p className="text-muted mb-0 small text-truncate" style={{ maxWidth: '250px' }}>
                          {p.subtitle || "Sin descripción"}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="fw-bold text-success">{ p.price }</td>
                  <td>
                    <div className="btn-group">
                      <button className="btn btn-sm btn-outline-primary">Editar</button>
                      <button className="btn btn-sm btn-outline-danger">Eliminar</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}