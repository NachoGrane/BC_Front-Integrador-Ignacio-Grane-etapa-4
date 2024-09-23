import { useContext } from "react";
import BrandSectionHome from "../components/BrandSectionHome";
import Hero from "../components/Hero";
import ProductosContext from "../context/ProductosContext";
import BtnCarrito from "../components/BtnCarrito";

const Inicio = () => {
  const { productos } = useContext(ProductosContext);
  console.log(productos);
  return (
    <>
      <div className="row g-0">
        <div className="col-12">
          <Hero />
        </div>
      </div>
      <div className="row g-0">
        <div className="col-12 p-3">
          <BrandSectionHome
            title="playstation"
            icon="playstation"
            productos={productos}
          />
          <BrandSectionHome title="xbox" icon="xbox" productos={productos} />
          <BrandSectionHome
            title="nintendo"
            icon="nintendo-switch"
            productos={productos}
          />
        </div>
      </div>
      <BtnCarrito />
    </>
  );
};

export default Inicio;
