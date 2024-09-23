import { NavLink } from "react-router-dom";

const PagesNavbar = (props) => {
  const { PageToGo, Icon, name } = props;
  return (
    <>
      <li className="nav-link">
        <NavLink to={PageToGo} title={name}>
          <i className={`bi bi-${Icon} icon ${name}`}></i>
          <span className="text nav-text text-capitalize">{name}</span>
        </NavLink>
      </li>
    </>
  );
};

export default PagesNavbar;
