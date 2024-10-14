import { useContext, useState } from "react";
import "./ItemCarrito.scss";
import CarritoContext from "../context/CarritoContext";
import formatPrice from "../helpers/format-price.js";
import Swal from "sweetalert2";

const ItemCarrito = ({ producto }) => {
  const {
    eliminarProductoDelCarritoContext,
    agregarProductoAlCarritoContext,
    removerCantidadProductoDelCarritoContext,
  } = useContext(CarritoContext);
  const [isRemoving, setIsRemoving] = useState(false);
  const [countProducto, setCountProducto] = useState(1);
  const [stock, setStock] = useState(producto.stock);

  const showSwal = () => {
    Swal.fire({
      position: "bottom-right",
      icon: "error",
      title: `Error. Ha superado el stock del producto: ${stock}`,
      showConfirmButton: false,
      timer: 2500,
    });
  };

  const handleEliminarProductoCarrito = (id) => {
    setIsRemoving(true);
    setTimeout(() => {
      eliminarProductoDelCarritoContext(id);
    }, 350);
  };

  const handleDeleteProduct = () => {
    setCountProducto(countProducto - 1);
    removerCantidadProductoDelCarritoContext(producto);
  };

  const handleAddProduct = () => {
    if (countProducto < stock) {
      setCountProducto((prevCount) => {
        return prevCount + 1;
      });
      agregarProductoAlCarritoContext(producto);
    } else {
      showSwal();
    }
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
            <p className="text-uppercase fs-5 m-0 text-name mt-3 mt-md-0">
              {producto.nombre}
            </p>
            <p className="text-uppercase fs-5 text-name m-0 m-md-inherit">
              {producto.categoria}
            </p>
            <p className="d-md-none d-block text-uppercase fs-2 fw-medium">
              {" "}
              ${formatPrice(producto.precio)}
            </p>
          </div>
          <div className="d-flex flex-row align-items-center w-100">
            <button
              className={`btn btn-primary btn_agregarProducto rounded-circle ${
                countProducto === 1 ? "d-none" : ""
              }`}
              onClick={handleDeleteProduct}
            >
              <i className="bi bi-dash-lg text-black"></i>
            </button>
            <p className="m-0 mx-3 mx-md-5 fw-bold fs-3">{countProducto}</p>
            <button
              className="btn btn-primary btn_agregarProducto rounded-circle"
              onClick={handleAddProduct}
            >
              <i className="bi bi-plus-lg text-black"></i>
            </button>
          </div>
        </div>
        <p className="d-none d-md-block text-uppercase fs-2 fw-medium">
          {" "}
          ${formatPrice(producto.precio)}
        </p>
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
