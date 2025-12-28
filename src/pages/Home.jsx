import Hero from '../components/Hero';
import heroImage from '../assets/HeroImg.jpg';
import { Link } from 'react-router-dom';

export default function Home() {

    return (

        <div className="container mt-4">
            {/* 1.HERO */}
            <div className="p-5 mb-5 rounded-3 shadow-lg text-white">
                <div className=" bg-light rounded-3 py-5 container-fluid py-5 text-center">

                    <Hero heroImage={heroImage} />
                    <p className="fw-medium text-dark col-md-10 fs-5 mx-auto my-5">
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
            <div className="row g-4 py-5 mb-5 text-center">
                {/* 1er columna */}

                <div className="col-md-4">
                    <div className="p-4 h-100 rounded-4 transition-hover"> {/* caja hover */}
                        <div className="bg-info bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '80px', height: '80px' }}>
                            <i className="bi bi-clock-fill fs-1 text-info"></i>
                        </div>
                        <h4 className="fw-bold mb-3">Flexibilidad Total</h4>
                        <p className="text-muted lh-base">Aprende a tu propio ritmo, con acceso ilimitado de por vida a todo el material.</p>
                    </div>
                </div>

                {/* 2da columna */}
                <div className="col-md-4 border-start border-end border-light"> {/* Líneas */}
                    <div className="p-4 h-100 rounded-4 transition-hover">

                        <div className="bg-warning bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '80px', height: '80px' }}>
                            <i className="bi bi-star-fill fs-1 text-warning"></i>
                        </div>
                        <h4 className="fw-bold mb-3">Instructores Expertos</h4>
                        <p className="text-muted lh-base">Contenido de alta calidad diseñado por profesionales con experiencia real.</p>
                    </div>
                </div>

                {/* 3ra columna */}
                <div className="col-md-4">
                    <div className="p-4 h-100 rounded-4 transition-hover">

                        <div className="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '80px', height: '80px' }}>
                            <i className="bi bi-code-slash fs-1 text-success"></i>
                        </div>

                        <h4 className="fw-bold mb-3">Proyectos Prácticos</h4>
                        <p className="text-muted lh-base">Aplica lo aprendido construyendo proyectos reales que podrás añadir a tu portafolio.</p>

                    </div>
                </div>
            </div>

            <div className="my-5 py-5 border-top border-bottom"> {/*margen y el padding */}
                <div className="container">

                    <div className="p-4 bg-light rounded-4 text-center border border-white shadow-sm">
                        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-2 gap-md-5">

                            {/* skills */}
                            <div className="d-flex align-items-center">

                                <i className="bi bi-patch-check-fill text-success fs-4 me-2"></i>
                                <span className="text-muted fw-medium">Certificado Digital</span>

                            </div>
                            <div className="vr d-none d-md-block opacity-25" style={{ height: '30px' }}></div>
                            <div className="d-flex align-items-center">

                                <i className="bi bi-shield-lock-fill text-primary fs-4 me-2"></i>
                                <span className="text-muted fw-medium">Garantía de 30 días</span>

                            </div>
                            <div className="vr d-none d-md-block opacity-25" style={{ height: '30px' }}></div>
                            <div className="d-flex align-items-center">

                                <i className="bi bi-person-check-fill text-info fs-4 me-2"></i>
                                <span className="text-muted fw-medium">Soporte prioritario</span>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center py-5 my-5">

                    <p className="text-secondary fw-light mb-0" style={{ letterSpacing: '1px' }}>
                        Conocimiento sólido. &nbsp; Herramientas reales. &nbsp; Resultados medibles.
                    </p>

                </div>
            </div>
        </div>
    );
}