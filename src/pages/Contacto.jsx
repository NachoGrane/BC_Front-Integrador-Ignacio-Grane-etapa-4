import { useState } from "react";
import DotInfo from "../components/DotInfo";
import "./Contacto.scss";
import Swal from "sweetalert2";
import { helperPeticionesHttp } from "../helpers/helper-peticiones-http";

const Contacto = () => {
  const formInit = {
    id: null,
    nombre: "",
    apellido: "",
    email: "",
    nroPedido: "",
    areaConsulta: "",
    razonConsulta: "",
  };

  const [form, setForm] = useState(formInit);
  const [loading, setLoading] = useState(false);
  const url = import.meta.env.VITE_BACKEND_CONTACTO;

  const showSwal = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "¡Enhorabuena! Tu consulta ha sido enviada.",
      showConfirmButton: false,
      timer: 2500,
    });
  };

  const validateInput = () => {
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (validateInput) {
      try {
        const options = {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(form),
        };

        console.log(form);
        const newForm = await helperPeticionesHttp(url, options);
        showSwal();
      } catch (error) {
        console.error("[handleSubmit - Contacto]", error);
      }
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    const { type, name, checked, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
    //console.log(form);
  };
  return (
    <>
      <div className="container mt-md-5 p-3 p-md-0">
        <div className="row card_info shadow p-3 p-md-4">
          <div className="col-12 card_info-container px-0">
            <div className="d-flex flex-column flex-md-row my-5">
              <div className="col-6">
                <div className="col-12 card_info-container-text pe-5">
                  <div className="d-flex flex-row">
                    <div className="col-1 px-0 me-5 me-md-4">
                      <DotInfo color="azul" icon="info" mt="3px" fs="3" />
                    </div>
                    <div className="col-11">
                      <div className="d-flex flex-column gap-4">
                        <h4 className="text-uppercase">
                          ¿EN QUÉ PODEMOS AYUDARTE?
                        </h4>
                        <p className="m-0">
                          Te podés comunicar con nosotros de Lunes a Sábado de 9
                          a 21hrs.
                        </p>
                        <p className="m-0">
                          Escribinos por Whatsapp al +54 11 345634121
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 card_info-container-text d-flex flex-column pe-5 mt-5">
                  <div className="d-flex flex-row">
                    <div className="col-1 px-0 me-5 me-md-4">
                      <DotInfo
                        color="amarillo"
                        icon="question-lg"
                        mt="3px"
                        fs="4"
                      />
                    </div>
                    <div className="col-11">
                      <div className="d-flex flex-column">
                        <h4 className="text-uppercase">PREGUNTAS FRECUENTES</h4>
                        <div>
                          <div>
                            <div
                              className="accordion accordion-flush"
                              id="accordionExample"
                            >
                              <div className="accordion-item">
                                <h2 className="accordion-header">
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                  >
                                    ¿Cuánto tardará en llegar mi pedido?
                                  </button>
                                </h2>
                                <div
                                  id="collapseOne"
                                  className="accordion-collapse collapse show"
                                  data-bs-parent="#accordionExample"
                                >
                                  <div className="accordion-body">
                                    Nuestro equipo se esfuerza para que tu
                                    pedido llegue lo antes posible. Los tiempos
                                    de entrega varían según tu ubicación y el
                                    tipo de envío seleccionado. Generalmente,
                                    puedes esperar recibir tu compra entre 3 a 7
                                    días hábiles. Te notificaremos por correo
                                    electrónico en cuanto tu pedido esté en
                                    camino.
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item">
                                <h2 className="accordion-header">
                                  <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="collapseTwo"
                                  >
                                    ¿Qué pasa si mi producto tiene un defecto o
                                    no cumple con los estándares de calidad?
                                  </button>
                                </h2>
                                <div
                                  id="collapseTwo"
                                  className="accordion-collapse collapse"
                                  data-bs-parent="#accordionExample"
                                >
                                  <div className="accordion-body">
                                    En Overgames, la calidad de nuestros
                                    productos es una prioridad. Si tu artículo
                                    llega con un defecto o no cumple con tus
                                    expectativas, tienes 30 días para solicitar
                                    un cambio o reembolso. Solo contáctanos y
                                    resolveremos tu caso lo antes posible.
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item">
                                <h2 className="accordion-header">
                                  <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree"
                                  >
                                    ¿Cómo es el proceso de devolución de un
                                    pedido en OVERGAMES?
                                  </button>
                                </h2>
                                <div
                                  id="collapseThree"
                                  className="accordion-collapse collapse"
                                  data-bs-parent="#accordionExample"
                                >
                                  <div className="accordion-body">
                                    El proceso de devolución es sencillo. Solo
                                    necesitas ingresar a tu cuenta, seleccionar
                                    el pedido que deseas devolver, y seguir las
                                    instrucciones para generar una etiqueta de
                                    envío. Una vez recibido el producto
                                    devuelto, procesaremos tu reembolso o cambio
                                    en un plazo de 7 días hábiles.
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item">
                                <h2 className="accordion-header">
                                  <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseFour"
                                    aria-expanded="false"
                                    aria-controls="collapseFour"
                                  >
                                    ¿Cómo puedo dar seguimiento a la entrega de
                                    mi pedido?
                                  </button>
                                </h2>
                                <div
                                  id="collapseFour"
                                  className="accordion-collapse collapse"
                                  data-bs-parent="#accordionExample"
                                >
                                  <div className="accordion-body">
                                    Puedes seguir tu pedido desde el panel de
                                    usuario en nuestra web, ingresando a la
                                    sección "Mis pedidos". Además, te enviaremos
                                    un número de seguimiento por correo para que
                                    puedas rastrear tu compra en tiempo real.
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="col-12 d-flex flex-row card_info-container-text pe-5">
                  <div className="col-1 px-0 me-5 me-md-4">
                    <DotInfo
                      color="verde"
                      icon="chat-right-dots-fill"
                      mt="2px"
                      fs="5"
                    />
                  </div>
                  <div className="col-11">
                    <div className="d-flex flex-column gap-4">
                      <h4 className="text-uppercase">Contacto</h4>
                      {/* Formulario */}
                      <form onSubmit={handleSubmit}>
                        <div className="col-12 d-flex flex-row">
                          <div className="col-12 col-md-6 pe-3">
                            <div className="mb-2">
                              <label htmlFor="iptNombre" className="form-label">
                                Nombre
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="iptNombre"
                                name="nombre"
                                placeholder="Nombre..."
                                value={form.nombre}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-12 col-md-6 pe-3">
                            <div className="mb-2">
                              <label
                                htmlFor="iptApellido"
                                className="form-label"
                              >
                                Apellido
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="iptApellido"
                                placeholder="Apellido..."
                                onChange={handleChange}
                                value={form.apellido}
                                name="apellido"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-12 d-flex flex-row">
                          <div className="col-12 col-md-6 pe-3">
                            <div className="mb-2">
                              <label htmlFor="iptEmail" className="form-label">
                                Email
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="iptEmail"
                                placeholder="name@email.com"
                                onChange={handleChange}
                                value={form.email}
                                name="email"
                              />
                            </div>
                          </div>
                          <div className="col-12 col-md-6 pe-3">
                            <div className="mb-2">
                              <label htmlFor="iptPedido" className="form-label">
                                Número de pedido
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="iptPedido"
                                placeholder="Nro. pedido"
                                onChange={handleChange}
                                value={form.nroPedido}
                                name="nroPedido"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="col-12 pe-3">
                            <div className="mb-2">
                              <label
                                htmlFor="iptConsulta"
                                className="form-label"
                              >
                                Área de consulta
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="iptConsulta"
                                placeholder="Área de consulta..."
                                onChange={handleChange}
                                value={form.areaConsulta}
                                name="areaConsulta"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-12 d-flex flex-row">
                          <div className="col-12 pe-3">
                            <div className="mb-2">
                              <label
                                htmlFor="txtAreaRazon"
                                className="form-label"
                              >
                                Escribe la razón de contacto
                              </label>
                              <textarea
                                className="form-control"
                                id="txtAreaRazon"
                                rows="4"
                                onChange={handleChange}
                                value={form.razonConsulta}
                                name="razonConsulta"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 d-flex justify-content-center">
                          <input
                            type="submit"
                            className={`btn btn-primary btnSpinner text-uppercase px-5 mt-3 ${
                              loading ? "loading" : ""
                            }`}
                            value={"Enviar"}
                            disabled={loading}
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-12 d-flex justify-content-end">
              <img
                src="img/logo.webp"
                alt="Logo"
                width="32"
                height="32"
                className="d-inline-block align-text-top"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacto;
