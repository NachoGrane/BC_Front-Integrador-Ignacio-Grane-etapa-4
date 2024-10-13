import "./Tabla.scss";
import { useContext } from "react";
import TablaFila from "./TablaFila";
import ProductosContext from "../context/ProductosContext";

const Tabla = () => {
  const { productos } = useContext(ProductosContext);

  

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col" colSpan={2}>
            Nombre
          </th>
          <th scope="col" colSpan={1} className="d-none d-md-table-cell">
            Precio
          </th>
          <th scope="col" colSpan={1} className="d-none d-md-table-cell">
            Stock
          </th>
          <th scope="col" colSpan={1} className="d-none d-md-table-cell">
            Marca
          </th>
          <th scope="col" colSpan={1} className="d-none d-md-table-cell">
            Categoría
          </th>
          <th scope="col" colSpan={2} className="d-none d-md-table-cell">
            Detalles
          </th>
          <th scope="col" colSpan={2}>
            Foto
          </th>
          <th scope="col" colSpan={1} className="d-none d-md-table-cell">
            Envío
          </th>
          <th scope="col" colSpan={1}>
            Acciones
          </th>
        </tr>
      </thead>
      <tbody>
        {productos &&
          productos.map((producto, idx) => (
            <TablaFila key={producto.id + idx} producto={producto} />
          ))}
      </tbody>
    </table>
  );
};

export default Tabla;
