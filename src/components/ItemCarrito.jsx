import { useContext, useState } from "react";
import "./ItemCarrito.scss";
import CarritoContext from "../context/CarritoContext";
const ItemCarrito = ({ producto }) => {
  const { eliminarProductoDelCarritoContext } = useContext(CarritoContext);
  const [isRemoving, setIsRemoving] = useState(false);

  const handleEliminarProductoCarrito = (id) => {
    setIsRemoving(true);
    setTimeout(() => {
      eliminarProductoDelCarritoContext(id);
    }, 350);
  };
  return (
    <div
      className={`card card_table d-flex flex-row w-100 mb-2 mt-2${
        isRemoving ? "fade-out" : ""
      }`}
    >
      <img
        src={producto.foto}
        alt={producto.nombre}
        className="card_table-img"
      />
      <div className="p-4 d-flex flex-row align-items-center justify-content-between w-100 position-relative">
        <div className="d-flex flex-column justify-content-between">
          <div>
            <p className="text-uppercase fs-5 m-0">{producto.nombre}</p>
            <p className="text-uppercase">{producto.categoria}</p>
          </div>
          <div className="d-flex flex-row align-items-center w-100">
            <button className="btn btn-primary btn_agregarProducto rounded-circle">
              <i className="bi bi-dash-lg text-black"></i>
            </button>
            <p className="m-0 mx-5 fw-bold fs-3">1</p>
            <button className="btn btn-primary btn_agregarProducto rounded-circle">
              <i className="bi bi-plus-lg text-black"></i>
            </button>
          </div>
        </div>
        <p className="text-uppercase fs-2 fw-medium"> ${producto.precio}</p>
        <button
          type="button"
          className="btn btn-transparent btn_quitarProducto"
          onClick={() => handleEliminarProductoCarrito(producto.id)}
        >
          <i className="bi bi-x-lg fs-5"></i>
        </button>
      </div>
    </div>
  );
};

export default ItemCarrito;
