import { useContext } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import ProductosContext from "../../context/ProductosContext";
import Card from "../../components/Card";

const Playstation = () => {
  const { productos } = useContext(ProductosContext);

  return (
    <>
      <div className="row ms-5 ms-md-3 mt-3 mt-md-5">
        <div className="col-12">
          <Breadcrumbs />
        </div>
      </div>
      <div className="row ms-0 ms-md-4">
        <div className="col-12 d-flex flex-row justify-content-center flex-wrap px-0 mb-4">
          {productos &&
            productos
              .filter((p) => p.marca === "playstation")
              .map((producto) => (
                <Card key={producto.id} producto={producto} />
              ))}
        </div>
      </div>
    </>
  );
};

export default Playstation;
