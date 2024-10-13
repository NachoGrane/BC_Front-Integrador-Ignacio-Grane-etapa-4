import React, { useState } from "react";
import "./Navbar.scss";
import PagesNavbar from "./PagesNavbar";
import ItemsNavBar from "./ItemsNavBar";
import { NavLink } from "react-router-dom";
import imgLogo from "../../public/img/logo.webp";

const Navbar = ({ setNavBarActive }) => {
  const [isSidebarClosed, setIsSidebarClosed] = useState(true);

  // Maneja el clic para alternar la barra lateral
  const handleToggleClick = () => {
    setIsSidebarClosed(!isSidebarClosed);
    setNavBarActive(isSidebarClosed);
  };

  // Maneja el clic para abrir la barra lateral con el campo de búsqueda
  const handleSearchClick = () => {
    setIsSidebarClosed(false);
    setNavBarActive(true);
  };

  return (
    <>
      {/* NavBar Side */}
      <div
        className={`sidebar ${
          isSidebarClosed ? "close" : ""
        } d-none d-md-block`}
      >
        <header>
          <div className="image-text ms-2">
            <span className="image">
              <img src={imgLogo} alt="logo" />
            </span>
          </div>
          <i
            className="bi bi-chevron-right text-white toggle fw-bold"
            style={{ fontSize: "11px" }}
            onClick={handleToggleClick}
          ></i>
        </header>
        <div className="menu-bar">
          <div className="menu">
            <li className="search-box" onClick={handleSearchClick}>
              <i className="bi bi-search icon text-dark"></i>
              <input
                type="text"
                className="text-black"
                placeholder="Buscar..."
              />
            </li>
            <ul className="menu-links p-0">
              <ItemsNavBar />
            </ul>
          </div>
          <div className="bottom-content">
            <div className="menu">
              <ul className="menu-links p-0">
                <li className="nav-link">
                  <i className="bi bi-sliders icon"></i>
                  <span className="text nav-text">Sistema</span>
                </li>
                <PagesNavbar
                  PageToGo="/alta"
                  Icon="boxes"
                  name="alta producto"
                ></PagesNavbar>
              </ul>
            </div>
            <li>
              <a href="#">
                <i className="bi bi-box-arrow-left icon"></i>
                <span className="text nav-text">Logout</span>
              </a>
            </li>
          </div>
        </div>
      </div>

      {/* NavBar Mobile */}

      <nav className="navbar d-md-none navbar-fixed">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img
              src="img/logo.webp"
              alt="Logo"
              width="32"
              height="32"
              className="d-inline-block align-text-top"
            />
          </NavLink>
          <form className="d-flex" role="search" style={{ width: "65%" }}>
            <input
              className="form-control form-control-sm"
              type="search"
              placeholder="Buscar..."
              aria-label="Buscar..."
            />
            <button className="btn btn-transparent text-white" type="submit">
              <i className="bi bi-search"></i>
            </button>
          </form>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-list fs-1 text-white"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <ItemsNavBar />
              <div className="bottom-content">
                <div className="menu">
                  <ul className="menu-links p-0">
                    <hr className="text-white" />
                    <PagesNavbar
                      PageToGo="/alta"
                      Icon="boxes"
                      name="alta producto"
                    ></PagesNavbar>
                  </ul>
                </div>
                <li>
                  <a href="#">
                    <i className="bi bi-box-arrow-left icon"></i>
                    <span className="text nav-text">Logout</span>
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
