import { createContext, useContext, useState, useMemo, useEffect } from "react";

const CartContext = createContext([]);

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);
  
  // el estadp que provee la API ---
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("https://api.itbook.store/1.0/new")
      .then((res) => res.json())
      .then((data) => {
        // libros del estado estado 'productos'
        setProductos(data.books); 
      })
      .catch((err) => console.error("Error cargando API:", err));
  }, []);

  // --- FUNCIÓN ASYNC ---
  const getProductoByIsbn = async (isbn) => {
    
    const local = productos.find(p => String(p.isbn13) === String(isbn));
    if (local) return local;

    // 2. Si no está en la lista local, lo pedimos a la API por separado
    try {
      const res = await fetch(`https://api.itbook.store/1.0/books/${isbn}`);
      const data = await res.json();
      return data; // Devolvemos el libro encontrado en la API
    } catch (err) {
      console.error("No se pudo encontrar el libro en la API:", err);
      return null;
    }
  };

  const removeItem = (isbn13) => {
    setCart(prevCart => prevCart.filter(item => item.isbn13 !== isbn13));
  };

  const updateQty = (isbn13, newQty) => {
    if (newQty < 1) return;
    setCart(prevCart =>
      prevCart.map(item =>
        item.isbn13 === isbn13 ? { ...item, cantidad: newQty } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const total = useMemo(() => {
    const totalCalculado = cart.reduce((acc, item) => {
      const precioLimpio = parseFloat(item.price?.toString().replace(/[^0-9.]/g, '')) || 0;
      return acc + (precioLimpio * item.cantidad);
    }, 0);
  
    return totalCalculado.toFixed(2);
  }, [cart]);

  const addToCart = (producto) => {
    setCart(prev => {
      const existe = prev.find(p => p.isbn13 === producto.isbn13);
      if (existe) {
        return prev.map(p =>
          p.isbn13 === producto.isbn13
            ? { ...p, cantidad: p.cantidad + 1 }
            : p
        );
      }
      return [...prev, { ...producto, cantidad: 1 }];
  
    });
  };

  const handleComprar = () => {
    console.log('Compra realizada');
    setCart([]);
  
  };

  //productos que se muestran en el carrito
  const value = {
    cart,
    productos,
    addToCart,
    removeItem,
    updateQty,
    total,
    clearCart,
    handleComprar,
    getProductoByIsbn,
  };

  return <CartContext.Provider value={ value }>{ children }</CartContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  return useContext(CartContext);
};