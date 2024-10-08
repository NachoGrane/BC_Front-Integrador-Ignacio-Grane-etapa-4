import { useContext } from "react";
import "./TablaFila.scss";
import ProductosContext from "../context/ProductosContext";

const TablaFila = ({ producto }) => {
  const { setProductoAEditar, deleteProductoContext } =
    useContext(ProductosContext);

  //console.log(producto)
  const handleEditar = (producto) => {
    console.log("Producto a editar...", producto.id);
    setProductoAEditar(producto);
  };

  const handleEliminar = (producto) => {
    console.log("El producto a eliminar es...", producto.id);
    deleteProductoContext(producto);
  };

  return (
    <tr>
      <td scope="row" colSpan={2}>
        {producto.nombre}
      </td>
      <td scope="row" colSpan={1} className="d-none d-md-table-cell">
        {producto.precio}
      </td>
      <td scope="row" colSpan={1} className="d-none d-md-table-cell">
        {producto.stock}
      </td>
      <td scope="row" colSpan={1} className="d-none d-md-table-cell">
        {producto.marca}
      </td>
      <td scope="row" colSpan={1} className="d-none d-md-table-cell">
        {producto.categoria}
      </td>
      <td scope="row" colSpan={2} className="d-none d-md-table-cell">
        {producto.detalles}
      </td>
      <td scope="row" colSpan={2}>
        <img className="img-row" src={producto.foto} alt={producto.nombre} />
      </td>
      <td scope="row" colSpan={1} className="d-none d-md-table-cell">
        {producto.envio ? "SI" : "NO"}
      </td>
      <td scope="row" colSpan={1} className="d-flex flex-row">
        <button
          className="btn btn-primary me-2"
          onClick={() => handleEditar(producto)}
        >
          Editar
        </button>
        <button
          className="btn btn-danger"
          onClick={() => handleEliminar(producto)}
        >
          Borrar
        </button>
      </td>
    </tr>
  );
};

export default TablaFila;
