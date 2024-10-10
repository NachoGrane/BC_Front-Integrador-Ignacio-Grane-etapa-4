import { NavLink } from "react-router-dom";
import "./BtnCarrito.scss";
import { useContext } from "react";
import CarritoContext from "../context/CarritoContext";

const BtnCarrito = () => {
  const { carrito } = useContext(CarritoContext);
  console.log("Soy el carrito del btn carrito", carrito);

  return (
    <>
      <NavLink
        to={"/carrito"}
        className="btn btn-dark btn_carrito rounded-circle d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-cart-fill fs-4 m-0"></i>
        <div className={`dot ${carrito.length > 0 ? "" : "d-none"}`}>
          <div className="dot_numProductos shadow">{carrito.length}</div>
        </div>
      </NavLink>
    </>
  );
};

export default BtnCarrito;
