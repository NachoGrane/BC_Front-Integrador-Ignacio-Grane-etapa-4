import { useLocation } from "react-router";
import "./Breadcrumbs.scss";
import { Link } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();

  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;

      return crumb === "/" ? (
        <div className="crumb d-flex flex-row" key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      ) : (
        <div className="crumb d-flex flex-row" key={crumb}>
          <Link to="/">Inicio </Link>
          <span to={currentLink} className="ms-1 text-capitalize">
            / {crumb}
          </span>
        </div>
      );
    });

  return <div className="breadcrumb ">{crumbs}</div>;
};

export default Breadcrumbs;
