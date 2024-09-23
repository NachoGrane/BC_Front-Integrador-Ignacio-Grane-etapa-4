import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import * as bootstrap from "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { ProductosProvider } from "./context/ProductosContext.jsx";
import { CarritoProvider } from "./context/CarritoContext.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <ProductosProvider>
      <CarritoProvider>
        <App />
      </CarritoProvider>
    </ProductosProvider>
  </>
);
