import { useState } from "react";

export const useLocalStorage = (clave, valorInicial = []) => {
  const getValorAlmacenado = () => {
    try {
      const valorAlmacenado = window.localStorage.getItem(clave);
      return valorAlmacenado ? JSON.parse(valorAlmacenado) : valorInicial;
    } catch (error) {
      console.error(`Error al obtener ${clave} del localStorage ${error}`);
      return valorInicial;
    }
  };

  const [valorAlmacenado, setValorAlmacenado] = useState(getValorAlmacenado());

  const guardarValor = (valorNuevo) => {
    try {
      const nuevoValorAlmacenado = [...valorAlmacenado, valorNuevo]; // creo un nuevo array con lo que tenía más lo nuevo
      setValorAlmacenado(nuevoValorAlmacenado); // seteo el estado (Cambiar el estado)
      window.localStorage.setItem(clave, JSON.stringify(nuevoValorAlmacenado));
    } catch (error) {
      console.error(`Error al guardar ${clave} del localStorage: ${error}`);
    }
  };

  const actualizarValor = (id, esSuma) => {
    const productosAlmacenados = valorAlmacenado.filter(
      (prod) => prod.id != id
    );
    const productoActualizado = valorAlmacenado.find((prod) => prod.id === id);
    if (esSuma) {
      productoActualizado.cantidad++;
    } else {
      productoActualizado.cantidad--;
    }
    const nuevosProductos = [...productosAlmacenados, productoActualizado];
    setValorAlmacenado(nuevosProductos);
  };

  const eliminarValor = (id) => {
    try {
      //const nuevoValorAlmacenado = valorAlmacenado // copia
      const nuevoValorAlmacenado = [...valorAlmacenado]; // clona el array

      const indice = nuevoValorAlmacenado.findIndex((item) => item.id === id); // Busco indice del producto que están queriendo eliminadar dentro del array clonado
      nuevoValorAlmacenado.splice(indice, 1); // Busco dentro del array clonado, el producto y lo borro
      setValorAlmacenado(nuevoValorAlmacenado);
      window.localStorage.setItem(clave, JSON.stringify(nuevoValorAlmacenado));
    } catch (error) {
      console.error(
        `Error al eliminar ${clave} del localstorage con ${id} del producto ${error}`
      );
    }
  };

  const limpiarValores = () => {
    window.localStorage.clear();
    window.localStorage.setItem(clave, JSON.stringify(valorInicial));
    setValorAlmacenado(valorInicial);
  };
  //           0
  return [
    guardarValor,
    eliminarValor,
    limpiarValores,
    valorAlmacenado,
    actualizarValor,
  ];
};
