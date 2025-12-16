import productos from "../data/productos";

export default function AdminPanel() {
  return (
    <div className="container-fluid">
      
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold">Panel de Administración</h2>
            {/* STOCK PRODUCTOS (simulado sin backend) */}
        </div>

        <button className="btn btn-success">
          + Nuevo producto
        </button>
      </div>

      {/* Tabla / Grid admin */}
      <div className="card shadow-sm">
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
              {productos.map(p => (
                <tr key={p.id}>
                  <td>
                    <div className="d-flex align-items-center gap-3">
                      <img
                        src={p.img}
                        alt={p.titulo}
                        width="60"
                        className="rounded"
                      />
                      <div>
                        <strong>{p.titulo}</strong>
                        <p className="text-muted mb-0 small">
                          {p.descripcion}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="fw-bold">${p.precio}</td>

                  <td>
                    <button className="btn btn-sm btn-outline-primary me-2">
                      Editar
                    </button>
                    <button className="btn btn-sm btn-outline-danger">
                      Eliminar
                    </button>
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


