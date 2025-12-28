import { useCart } from '../Hooks/Context';
import ProductCard from '../components/ProductCard';

const Productos = () => {
  const { productos } = useCart();

  return (

    <main className="bg-white min-vh-100">
      <div className="container pt-5 mt-5 mb-5">

        <div className="row justify-content-center">
          <div className="col-lg-7 text-center">

            <h3 className="display-5 fw-bold text-dark mb-3" style={{ letterSpacing: '-1.5px' }}
            > Nuestro Catálogo </h3>
            <div className="bg-dark opacity-10 mx-auto mb-4" style={{ width: '50px', height: '2px' }}></div>

            <p className="lead text-secondary fw-normal mb-0 mx-auto" style={{ maxWidth: '600px' }}
            > "Conocimiento sólido. Herramientas reales. Resultados medibles." </p>

            <div className="mt-4">
              <span className="badge rounded-pill bg-light text-muted border px-3 py-2 fw-normal"
              style={{ fontSize: '0.8rem' }}
              > { productos.length } cursos disponibles </span>
            </div>

          </div>
        </div>
      </div>

      {/* grilla productos */}
      <section className="container pb-5">
        <div className="row g-4 g-lg-5"> 

          { productos && productos.length > 0 ? (
              productos.map((curso) => (
                <div key={ curso.isbn13 } 
                    className="col-12 col-md-6 col-lg-4 d-flex">
                    <ProductCard producto={curso} />
                </div>
              ))
          ) : (
            <div className="col-12 text-center py-5">
              <div className="spinner-border text-dark opacity-10" role="status"></div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Productos;