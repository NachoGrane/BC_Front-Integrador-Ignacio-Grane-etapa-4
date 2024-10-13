import { useSearchParams } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import { helperPeticionesHttp } from "../helpers/helper-peticiones-http";

const Search = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [productosFiltrados, setProductosFiltrados] = useState([]);

  useEffect(() => {
    const handleBuscar = async () => {
      const url = import.meta.env.VITE_BACKEND_PRODUCTOS; // Variable de entorno

      const options = {
        method: "GET",
      };
      const getParam = searchParams.get("name");
      const urlCompleta = url + `search?name=${getParam}`;

      try {
        const productos = await helperPeticionesHttp(urlCompleta, options);
        console.log("[productos] ", productos);

        setProductosFiltrados(productos);
      } catch (error) {
        console.error("[handleBuscar]", error);
      }
    };
    handleBuscar();
  }, [searchParams]);

  return (
    <>
      <div className="row ms-5 ms-md-3 mt-3 mt-md-5">
        <div className="col-12">
          <Breadcrumbs />
        </div>
      </div>
      <div className="row ms-0 ms-md-4">
        <div className="col-12 d-flex flex-row justify-content-center justify-content-md-start flex-wrap px-0 mb-4">
          {productosFiltrados.map((producto) => (
            <Card key={producto.id} producto={producto} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Search;
