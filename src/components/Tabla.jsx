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
          <th scope="col" colSpan={1}>
            Precio
          </th>
          <th scope="col" colSpan={1}>
            Stock
          </th>
          <th scope="col" colSpan={1}>
            Marca
          </th>
          <th scope="col" colSpan={1}>
            Categoría
          </th>
          <th scope="col" colSpan={2}>
            Detalles
          </th>
          <th scope="col" colSpan={2}>
            Foto
          </th>
          <th scope="col" colSpan={1}>
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
