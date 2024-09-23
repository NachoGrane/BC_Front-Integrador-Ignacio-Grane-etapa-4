import { useContext } from "react";
import "./TablaFila.scss";
import ProductosContext from "../context/ProductosContext";

const TablaFila = ({ producto }) => {
  const { setProductoAEditar } = useContext(ProductosContext);

  //console.log(producto)
  const handleEditar = (producto) => {
    console.log("Producto a editar...", producto.id);
    setProductoAEditar(producto);
  };

  return (
    <tr>
      <td scope="row" colSpan={2}>
        {producto.nombre}
      </td>
      <td scope="row" colSpan={1}>
        {producto.precio}
      </td>
      <td scope="row" colSpan={1}>
        {producto.stock}
      </td>
      <td scope="row" colSpan={1}>
        {producto.marca}
      </td>
      <td scope="row" colSpan={1}>
        {producto.categoria}
      </td>
      <td scope="row" colSpan={2}>
        {producto.detalles}
      </td>
      <td scope="row" colSpan={2}>
        <img className="img-row" src={producto.foto} alt={producto.nombre} />
      </td>
      <td scope="row" colSpan={1}>
        {producto.envio ? "SI" : "NO"}
      </td>
      <td scope="row" colSpan={1} className="d-flex flex-ro">
        <button
          className="btn btn-primary me-2"
          onClick={() => handleEditar(producto)}
        >
          Editar
        </button>
        <button className="btn btn-danger">Borrar</button>
      </td>
    </tr>
  );
};

export default TablaFila;
