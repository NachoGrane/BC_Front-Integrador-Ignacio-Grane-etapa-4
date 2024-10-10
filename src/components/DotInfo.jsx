import "./DotInfo.scss";

const DotInfo = (props) => {
  const { color, icon, mt, fs } = props;

  const renderSwitchcolor = (c) => {
    switch (c) {
      case "rojo":
        return "#DE3D4B";
      case "azul":
        return "#0050A5";
      case "amarillo":
        return "#FFBC52";
      case "verde":
        return "#01916C";
      default:
        return "#0000";
    }
  };

  return (
    <div className="rounded rounded-circle d-flex align-items-center justify-content-center">
      <div
        className="rounded-inner shadow-lg d-flex align-items-center justify-content-center"
        style={{ backgroundColor: `${renderSwitchcolor(color)}` }}
      >
        <i className={`bi bi-${icon} fs-${fs}`} style={{ marginTop: `${mt}` }}></i>
      </div>
    </div>
  );
};

export default DotInfo;
