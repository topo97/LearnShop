import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../Hooks/AuthContext';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const ok = login(user, pass);

    if (ok) {
      navigate("/admin");
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: 400 }}>
      <h3 className="text-center mb-4">Acceso Administrador</h3>

      <form onSubmit={handleSubmit} className="card p-4 shadow">
        <input
          className="form-control mb-3"
          placeholder="Usuario"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Contraseña"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />

        {error && <p className="text-danger text-center">{error}</p>}

        <button className="btn btn-dark w-100">Ingresar</button>
      </form>
    </div>
  );
}
