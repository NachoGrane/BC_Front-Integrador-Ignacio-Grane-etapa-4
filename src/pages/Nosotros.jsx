import DotInfo from "../components/DotInfo";
import "./Nosotros.scss";

const Nosotros = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row card_info shadow p-5">
          <div className="col-12 card_info-container px-0">
            <div className="d-flex flex-row my-5">
              <div className="col-6 card_info-container-text pe-5">
                <div className="d-flex flex-row">
                  <div className="col-1 px-0 me-4">
                    <DotInfo color="azul" icon="info" mt="3px" fs="3" />
                  </div>
                  <div className="col-11">
                    <div className="d-flex flex-column gap-4">
                      <h4 className="text-uppercase">
                        Bienvenidos a OverGames
                      </h4>
                      <p>
                        En OverGames somos apasionados por los videojuegos y nos
                        dedicamos a ofrecerte la mejor experiencia de compra
                        para todos tus títulos favoritos. Nuestra misión es
                        llevarte los últimos lanzamientos, los clásicos
                        atemporales y todo lo que necesitas para disfrutar al
                        máximo de tus videojuegos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 card_info-container-text d-flex flex-column gap-4 pe-5">
                <div className="d-flex flex-row">
                  <div className="col-1 px-0 me-4">
                    <DotInfo color="verde" icon="journals" mt="2px" fs="5" />
                  </div>
                  <div className="col-11">
                    <div className="d-flex flex-column gap-4">
                      <h4 className="text-uppercase">NUESTRA HISTORIA</h4>
                      <p>
                        Fundada en 2024, OverGames comenzó con personas
                        apasionados por los videojuegos. Con el tiempo, hemos
                        crecido hasta convertirnos en una referencia en el
                        mercado, siempre manteniendo nuestro compromiso con la
                        calidad y la satisfacción del cliente.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex flex-row my-5">
              <div className="col-6 card_info-container-text d-flex flex-column gap-4 pe-5">
                <div className="d-flex flex-row">
                  <div className="col-1 px-0 me-4">
                    <DotInfo
                      color="amarillo"
                      icon="question-lg"
                      mt="3px"
                      fs="4"
                    />
                  </div>
                  <div className="col-11">
                    <div className="d-flex flex-column gap-4">
                      <h4 className="text-uppercase">¿Quiénes Somos?</h4>
                      <p>
                        Somos una empresa especializada en la venta de
                        videojuegos para diversas plataformas. Desde los juegos
                        más populares hasta aquellos que son joyas ocultas, nos
                        aseguramos de tener algo para cada tipo de jugador. Nos
                        enorgullece ofrecer un catálogo extenso y variado que
                        incluye títulos de todas las épocas y géneros.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 card_info-container-text d-flex flex-column gap-4 pe-5">
                <div className="d-flex flex-row">
                  <div className="col-1 px-0 me-4">
                    <DotInfo
                      color="rojo"
                      icon="airplane-engines"
                      mt="3px"
                      fs="4"
                    />
                  </div>
                  <div className="col-11">
                    <div className="d-flex flex-column gap-4">
                      <h4 className="text-uppercase">NUESTRA Mision</h4>
                      <p>
                        Nuestra misión es ofrecer una experiencia de compra
                        sencilla y agradable, con un catálogo amplio y
                        actualizado, precios competitivos y un servicio al
                        cliente excepcional. Queremos ser tu tienda de confianza
                        para todas tus necesidades relacionadas con videojuegos.
                      </p>
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

export default Nosotros;
