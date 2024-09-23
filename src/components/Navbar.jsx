import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import PagesNavbar from "./PagesNavbar";

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
    <nav className={`sidebar ${isSidebarClosed ? "close" : ""}`}>
      <header>
        <div className="image-text ms-2">
          <span className="image">
            <img src="../public/img/logo.webp" alt="logo" />
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
            <input type="text" className="text-black" placeholder="Buscar..." />
          </li>
          <ul className="menu-links p-0">
            <PagesNavbar
              PageToGo="/"
              Icon="house-fill"
              name="home"
            ></PagesNavbar>
            <PagesNavbar
              PageToGo="/playstation"
              Icon="playstation"
              name="playstation"
            ></PagesNavbar>
            <PagesNavbar
              PageToGo="/nintendo"
              Icon="nintendo-switch"
              name="nintendo"
            ></PagesNavbar>
            <PagesNavbar PageToGo="/xbox" Icon="xbox" name="xbox"></PagesNavbar>
            <PagesNavbar
              PageToGo="/perifericos"
              Icon="controller"
              name="perifericos"
            ></PagesNavbar>
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
    </nav>
  );
};

export default Navbar;
