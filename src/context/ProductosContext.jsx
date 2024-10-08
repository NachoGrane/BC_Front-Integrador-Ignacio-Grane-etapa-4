import { createContext, useEffect, useState } from "react";
import { helperPeticionesHttp } from "../helpers/helper-peticiones-http";

// ! CREANDO CONTEXTO
// ! 1. Creamos el contexto
const ProductosContext = createContext();
// ! 2. Armamos el provider
const ProductosProvider = ({ children }) => {
  const url = import.meta.env.VITE_BACKEND_PRODUCTOS;
  const [productos, setProductos] = useState(null);
  const [productoAEditar, setProductoAEditar] = useState(null);

  useEffect(() => {
    getAllProductos();
  }, []);

  const getAllProductos = async () => {
    try {
      const prods = await helperPeticionesHttp(url, {});

      setProductos(prods);
    } catch (error) {
      console.error("[getAllProductos]", error);
    }
  };

  const crearProductoContext = async (nuevoProducto) => {
    try {
      const options = {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(nuevoProducto),
      };

      console.log(nuevoProducto);
      const newProducto = await helperPeticionesHttp(url, options);

      setProductos([...productos, newProducto]);
    } catch (error) {
      console.error("[crearProductoContext]", error);
    }
  };

  const actualizarProductoContext = async (productoEditado) => {
    try {
      const options = {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(productoEditado),
      };

      const urlEdicion = url + productoEditado.id; // http://local.../productos/9

      const editedProduct = await helperPeticionesHttp(urlEdicion, options);

      const nuevoEstadoProductos = productos.map((producto) =>
        producto.id === editedProduct.id ? editedProduct : producto
      );
      setProductos(nuevoEstadoProductos);
    } catch (error) {
      console.error("[actualizarProductoContext]", error);
    }
  };

  const deleteProductoContext = async (productoAEliminar) => {
    try {
      const options = {
        method: "DELETE",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(productoAEliminar),
      };

      const urlEdicion = url + productoAEliminar.id; // http://local.../productos/9

      const deleteProduct = await helperPeticionesHttp(urlEdicion, options);

      const nuevaListaProductos = productos.filter(
        (p) => p.id !== deleteProduct.id
      );

      setProductos(nuevaListaProductos);
    } catch (error) {
      console.error("[deleteProductoContext]", error);
    }
  };

  const data = {
    productos,
    crearProductoContext,
    actualizarProductoContext,
    productoAEditar,
    deleteProductoContext,
    setProductoAEditar,
  };

  return (
    <ProductosContext.Provider value={data}>
      {children}
    </ProductosContext.Provider>
  );
};
// ! 3. Exportamos el contexto y provider

export { ProductosProvider };
export default ProductosContext;
