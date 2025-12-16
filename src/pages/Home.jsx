import  Hero  from '../components/Hero';
import heroImage from '../assets/HeroImg.jpg';
import { Link } from 'react-router-dom';

export default function Home() {
    
    return (
        <div className="container mt-4">
            
            {/* 1. SECCIÓN HERO / BANNER PRINCIPAL */}

            <div className="p-5 mb-5 rounded-3 shadow-lg text-white">
                <div className=" bg-light rounded-3 py-5 container-fluid py-5 text-center">
                <Hero heroImage = { heroImage }/>
                    <p className="text-dark col-md-10 fs-5 mx-auto my-5">
                        La mejor tienda de cursos online. Aprende a crear aplicaciones modernas y escalables con la tecnología más demandada del mercado.
                    </p>
                    
                    {/* Botón principal que lleva a los productos */}
                    <Link className="btn btn-light btn-lg" to="/productos" role="button">
                        Explorar Cursos Ahora
                    </Link>
                </div>
            </div>
            
            <hr className="my-5" />

            {/* 2. SECCIÓN DE DESTACADOS/VENTAJAS */}
            <h3 className="text-center mb-5 fw-bold">¿Por qué elegir nuestros cursos?</h3>

            <div className="row g-4 mb-5 text-center">
                
                {/* Columna 1 */}
                <div className="col-md-4">
                    <i className="bi bi-clock-fill display-5 text-info mb-3"></i> 
                    <h4 className="fw-bold">Flexibilidad Total</h4>
                    <p className="text-muted">Aprende a tu propio ritmo, con acceso ilimitado de por vida a todo el material.</p>
                </div>
                
                {/* Columna 2 */}
                <div className="col-md-4">
                    <i className="bi bi-star-fill display-5 text-warning mb-3"></i> 
                    <h4 className="fw-bold">Instructores Expertos</h4>
                    <p className="text-muted">Contenido de alta calidad diseñado por profesionales con experiencia real.</p>
                </div>
                
                {/* Columna 3 */}
                <div className="col-md-4">
                    <i className="bi bi-code-slash display-5 text-success mb-3"></i> 
                    <h4 className="fw-bold">Proyectos Prácticos</h4>
                    <p className="text-muted">Aplica lo aprendido construyendo proyectos reales que podrás añadir a tu portafolio.</p>
                </div>

            </div>
            
            {/* 3. LLAMADA A LA ACCIÓN SECUNDARIA */}
            <div className="alert alert-secondary text-center py-4" role="alert">
                <h4 className="alert-heading">¡Empieza tu camino como desarrollador!</h4>
                <p className="mb-0">Miles de estudiantes ya están construyendo su futuro con nuestros cursos.</p>
                <Link to="/productos" className="btn btn-outline-primary mt-3">Ver Catálogo Completo</Link>
            </div>

        </div>
    );
}