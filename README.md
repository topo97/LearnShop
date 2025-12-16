# LernShop 🛒
. LernShop es una aplicación web desarrollada en React, simulando ser una tienda online de cursos digitales.  
. El proyecto incluye navegación entre páginas, carrito de compras, checkout y un panel de administración básico.
  **Acceso admin**
  Usuario: admin
  Contraseña: 1234

## Tecnologías utilizadas
- React
- React Router DOM
- Context API
- Bootstrap 5
- Bootstrap Icons

## 📦 Funcionalidades principales
- Navegación entre páginas
- Visualización de productos
- Detalle individual de producto
- Carrito de compras con total
- Checkout simulado
- Panel de administrador

### 🏠 Home
- Página de inicio con presentación de la tienda.

### 📚 Productos
- Listado de productos en formato de galería.
- Cada producto puede verse en detalle.

### 🔍 Detalle de producto
- Información completa del producto.
- Botón para agregar al carrito.

### 🛒 Carrito de compras
- Agregar y eliminar productos.
- Modificar cantidades.
- Mostrar total a pagar.
- Estado especial para carrito vacío.

### Checkout (simulado)
- Formulario simple con nombre y email.
- Generacion de un ID de orden ficticia.
- Limpieza automática del carrito al finalizar.

### Panel de administrador (simulado)
- Vista exclusiva para administración.
- Listado de productos con acciones de editar y eliminar (sin backend).

## Arquitectura
- **Context API** para el manejo global del carrito.
- **Componentes reutilizables** para mejorar el mantenimiento.
- **Ruta protegidas** para el panel de administrador.

## Aclaración sobre backend
- Los datos se cargan desde un archivo JavaScript local.
- No se utiliza backend real, pero la aplicación está preparada para integrar una api.
