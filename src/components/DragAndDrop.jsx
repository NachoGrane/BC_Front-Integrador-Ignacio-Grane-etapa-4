import React, { useEffect, useRef, useState } from "react";

const DragAndDrop = ({ handleChangeAlta, resetState, setResetState }) => {
  const [foto, setFoto] = useState(""); // La imagen que me llegue del servidor
  const [srcImagen, setSrcImagen] = useState(""); // Me va gestionar la imagen que carguen en el area de drop
  const refDiv = useRef(null); // querySelector

  const dragDrop = ["dragenter", "dragover", "dragleave", "drop"];

  dragDrop.forEach((eventName) => {
    document.body.addEventListener(eventName, (e) => e.preventDefault());
  });

  useEffect(() => {
    console.log(resetState);

    resetState ? handleReset() : "";
  });

  const handleDrop = (e) => {
    const dataTransf = e.dataTransfer;
    const files = dataTransf.files;
    handleFiles(files); // FilesList
  };
  const handleFiles = (files, e) => {
    console.log("recibí todos los archivo", files);
    const file = files[0];
    previewFile(file);
    uploadFile(file, e);
  };

  const uploadFile = async (file, e) => {
    console.log("Subiendo imagen", file);
    const url = import.meta.env.VITE_BACKEND_UPLOADS; // Variable de entorno

    // API WEB -> DOM
    const formData = new FormData(); // formData, tiene varios metodos.
    console.log(formData);

    formData.append("foto", file); // Creo la clave/valor -> foto: File

    const options = {
      method: "POST",
      body: formData, // express.json() express.urlencoded() --> Multer -> Puede gestionar data binaria
    };

    try {
      const res = await fetch(url, options);

      if (!res.ok) {
        throw new Error("No se pudo subir la imagen");
      }

      const imagenUp = await res.json();

      setFoto(imagenUp.foto);
      callChangeAlta(e, imagenUp.foto);
    } catch (error) {
      console.error("[uploadFile]", error);
    }
  };

  const previewFile = (file) => {
    const reader = new FileReader(); // Api de lectura de archivos
    reader.readAsDataURL(file); // A partir de un archivo me va a devolver un URL
    reader.addEventListener("loadend", () => {
      setSrcImagen(reader.result); // URL
    });
  };
  const handleChange = (e) => {
    const files = e.target.files;
    handleFiles(files, e); // FilesList
  };

  const callChangeAlta = (e, fotoURL) => {
    handleChangeAlta(e, fotoURL);
  };

  const handleReset = () => {
    setFoto("");
    setSrcImagen("");
    setResetState(false);
  };

  return (
    <>
      <div className="drop-area" onDrop={handleDrop} ref={refDiv}>
        <p>
          Subir imagen al servidor <b>cargar imagen</b> o con{" "}
          <b>drag and drop</b> dentro del area punteada
        </p>

        <input
          type="file"
          id="lbl-foto"
          accept="image/*"
          onChange={handleChange}
          className="form-control"
          name="foto"
        />

        <div className="drop-area-image">
          <img src={srcImagen} alt="" />
        </div>
      </div>
      <hr />

      {foto && <img src={foto} alt="imagen subida" width="200px" />}
    </>
  );
};

export default DragAndDrop;
