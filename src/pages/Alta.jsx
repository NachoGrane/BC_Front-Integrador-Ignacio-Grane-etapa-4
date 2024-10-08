import { useContext, useEffect, useState } from "react";
import ProductosContext from "../context/ProductosContext";
import Tabla from "../components/Tabla";
const Alta = () => {
  const formInit = {
    id: null,
    nombre: "",
    precio: "",
    stock: "",
    marca: "",
    categoria: "",
    detalles: "",
    foto: "",
    envio: false,
  };

  const [form, setForm] = useState(formInit);

  const {
    crearProductoContext,
    actualizarProductoContext,
    productoAEditar,
    setProductoAEditar,
  } = useContext(ProductosContext);

  useEffect(() => {
    productoAEditar ? setForm(productoAEditar) : setForm(formInit);
  }, [productoAEditar]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (form.id === null) {
        await crearProductoContext(form);
      } else {
        await actualizarProductoContext(form);
      }
      handleReset();
    } catch (error) {
      console.error("[handleSubmit]", error);
    }
  };

  const handleChange = (e) => {
    //console.log(e);

    const { type, name, checked, value } = e.target;
    //console.log(value);

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleReset = () => {
    console.log("handleReset");
    setForm(formInit);
    setProductoAEditar(null);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row p-3 p-md-5">
          <div className="col-12">
            <h3>{!productoAEditar ? "Agregar Producto" : "Editar Producto"}</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="lbl-nombre" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  name="nombre"
                  id="lbl-nombre"
                  className="form-control"
                  value={form.nombre}
                  onChange={handleChange}
                />
              </div>
              <label htmlFor="lbl-precio" className="form-label">
                Precio
              </label>
              <div className="input-group mb-3">
                <span className="input-group-text">$</span>
                <input
                  type="text"
                  className="form-control"
                  name="precio"
                  aria-label="Cantidad"
                  id="lbl-precio"
                  value={form.precio}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lbl-stock" className="form-label">
                  Stock
                </label>
                <input
                  type="text"
                  name="stock"
                  id="lbl-stock"
                  className="form-control"
                  value={form.stock}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lbl-marca" className="form-label">
                  Marca
                </label>
                <select
                  className="form-select"
                  size={5}
                  aria-label=""
                  name="marca"
                  value={form.marca}
                  onChange={handleChange}
                >
                  <option disabled>Seleccione una marca</option>
                  <option value="playstation">playstation</option>
                  <option value="xbox">xbox</option>
                  <option value="nintendo">nintendo</option>
                  <option value="periferico">periferico</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="lbl-categoria" className="form-label">
                  Categoría
                </label>
                <input
                  type="text"
                  name="categoria"
                  id="lbl-categoria"
                  className="form-control"
                  value={form.categoria}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lbl-detalles" className="form-label">
                  Detalles
                </label>
                <input
                  type="text"
                  name="detalles"
                  id="lbl-detalles"
                  className="form-control"
                  value={form.detalles}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lbl-foto" className="form-label">
                  Foto
                </label>
                <input
                  type="text"
                  name="foto"
                  id="lbl-foto"
                  className="form-control"
                  value={form.foto}
                  onChange={handleChange}
                />
              </div>
              <div className="form-check mb-3">
                <label htmlFor="form-label" className="form-check-label">
                  Envío
                </label>
                <input
                  type="checkbox"
                  name="envio"
                  id="lbl-envio"
                  className="form-check-input "
                  checked={form.envio}
                  onChange={handleChange}
                />
              </div>
              <div className="w-100 d-flex flex-row justify-content-center">
                <button type="submit" className="btn btn-lg btn-primary">
                  Guardar
                </button>
                <button
                  type="reset"
                  onClick={handleReset}
                  className="ms-3 btn btn-lg btn-danger"
                >
                  Limpiar
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* //Tabla productos */}
        <div className="row">
          <div className="col-12">
            <div className="table-responsive">
              <Tabla />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Alta;
