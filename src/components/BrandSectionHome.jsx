import "./BrandSectionHome.scss";
import Card from "./Card";
const BrandSectionHome = (props) => {
  const { title, icon, productos } = props;

  return (
    <>
      <div className="d-flex flex-row align-items-center mb-3 mt-2 mt-md-3 ms-3 ms-md-0">
        <i className={`bi bi-${icon} fs-2 me-2`}></i>
        <h1 className="text-capitalize fs-3 m-0">{title}</h1>
      </div>
      <div className="row mb-5 mb-md-0">
        <div className="col-12 d-flex flex-row flex-wrap justify-content-center justify-content-md-start">
          {productos &&
            productos
              .filter((p) => p.marca === title)
              .slice(0, 6)
              .map((producto, idx) => (
                <Card key={producto.id + idx} producto={producto} />
              ))}
        </div>
      </div>
    </>
  );
};

export default BrandSectionHome;
