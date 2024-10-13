import React, { useEffect, useRef } from "react";
import { helperPeticionesHttp } from "../helpers/helper-peticiones-http";
import "./DragAndDrop.scss";
import Spinner from "./Spinner";

const DragAndDrop = ({
  setFoto,
  resetState,
  setResetState,
  srcImagen,
  setSrcImagen,
  setLoading,
  loading,
}) => {
  const refDiv = useRef(null); // querySelector

  const dragDrop = ["dragenter", "dragover", "dragleave", "drop"];

  dragDrop.forEach((eventName) => {
    document.body.addEventListener(eventName, (e) => e.preventDefault());
  });

  useEffect(() => {
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
      setLoading(true);
      const imagenUp = await helperPeticionesHttp(url, options);

      console.log(imagenUp);

      setFoto(imagenUp);
    } catch (error) {
      console.error("[uploadFile]", error);
    } finally {
      setLoading(false);
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

  const handleReset = () => {
    setFoto("");
    setSrcImagen("");
    setResetState(false);
  };

  return (
    <>
      <div className="drop-area" onDrop={handleDrop} ref={refDiv}>
        {loading ? (
          <>
            <Spinner />
          </>
        ) : (
          <>
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
          </>
        )}
      </div>
      <hr />

      {srcImagen && <img src={srcImagen} alt="imagen subida" width="200px" />}
    </>
  );
};

export default DragAndDrop;
