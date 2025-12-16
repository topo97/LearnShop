import { createContext, useContext, useState, useMemo } from 'react';

// 1. obj que contiene el estado del carrito
const CartContext = createContext([]);

// 2. componente que provee el estado del carrito
export const CartProvider = ({ children }) => {
  // Estado principal del carrito
  const [cart, setCart] = useState([]);

  // --- Lógica del Carrito ---
  // Eliminar un ítem del carrito
  const removeItem = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  // Actualizar la cantidad de un ítem
  const updateQty = (id, newQty) => {
    if (newQty < 1) return; // No permitir cantidades menores a 1
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, cantidad: newQty } : item
      )
    );
  };

  // Limpiar el carrito
  const clearCart = () => {
    setCart([]);
  };

  // Calcular el total con useMemo
  const total = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0).toFixed(2);
  }, [cart]);


  //  Añadir el producto al carrito
  const addToCart = (producto) => {
  setCart(prev => {
    const existe = prev.find(p => p.id === producto.id);

    if (existe) {
      return prev.map(p =>
        p.id === producto.id
          ? { ...p, cantidad: p.cantidad + 1 }
          : p
      );
    }

    return [...prev, { ...producto, cantidad: 1 }];
  });
};

  // Proveer el estado del carrito, las funciones y el total
  const value = {
    cart,
    addToCart,
    removeItem,
    updateQty,
    total,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// 3. Hook para acceder al estado del carrito
// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  return useContext(CartContext);
};

