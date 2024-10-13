import { useRoutes } from "react-router";
import Inicio from "../pages/Inicio";
import Alta from "../pages/Alta";
import Nosotros from "../pages/Nosotros";
import Contacto from "../pages/Contacto";
import NoEncontrado from "../pages/NoEncontrado";
import Carrito from "../pages/Carrito";
import Playstation from "../pages/Brands/Playstation";
import Xbox from "../pages/Brands/Xbox";
import Nintendo from "../pages/Brands/Nintendo";
import Perifericos from "../pages/Brands/Perifericos";
import Search from "../pages/Search";

const Rutas = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Inicio />,
    },
    {
      path: "/alta",
      element: <Alta />,
    },
    {
      path: "/nosotros",
      element: <Nosotros />,
    },
    {
      path: "/contacto",
      element: <Contacto />,
    },
    {
      path: "/carrito",
      element: <Carrito />,
    },
    {
      path: "/playstation",
      element: <Playstation />,
    },
    {
      path: "/xbox",
      element: <Xbox />,
    },
    {
      path: "/nintendo",
      element: <Nintendo />,
    },
    {
      path: "/perifericos",
      element: <Perifericos />,
    },
    {
      path: "/search",
      element: <Search />,
    },
    {
      path: "*",
      element: <NoEncontrado />,
    },
  ]);

  return routes;
};

export default Rutas;
