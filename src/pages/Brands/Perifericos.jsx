import { useContext } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import Card from "../../components/Card";
import ProductosContext from "../../context/ProductosContext";

const Perifericos = () => {
  const { productos } = useContext(ProductosContext);

  return (
    <>
      <div className="row ms-3 mt-5">
        <div className="col-12">
          <Breadcrumbs />
        </div>
      </div>
      <div className="row  ms-4">
        <div className="col-12 d-flex flex-row flex-wrap px-0">
          {productos &&
            productos
              .filter((p) => p.categoria === "periferico")
              .map((producto) => (
                <Card key={producto.id} producto={producto} />
              ))}
        </div>
      </div>
    </>
  );
};

export default Perifericos;
