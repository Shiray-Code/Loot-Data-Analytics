// ===== CONFIG PERSONAJE (24H SOLO TERROR) =====
function obtenerPersonaje() {
  const props = PropertiesService.getUserProperties();
  const nombre = props.getProperty("personaje_nombre");
  const timestamp = props.getProperty("personaje_timestamp");

  if (!nombre || !timestamp) return null;

  const ahora = new Date().getTime();
  const guardado = parseInt(timestamp);

  if (ahora - guardado > 86400000) {
    props.deleteProperty("personaje_nombre");
    props.deleteProperty("personaje_timestamp");
    return null;
  }

  return nombre;
}

function guardarPersonaje(nombre) {
  const props = PropertiesService.getUserProperties();
  props.setProperty("personaje_nombre", nombre);
  props.setProperty("personaje_timestamp", new Date().getTime().toString());
}

function solicitarPersonaje() {
  const ui = SpreadsheetApp.getUi();
  const response = ui.prompt("Nombre del personaje", "Ingresa el nombre:", ui.ButtonSet.OK_CANCEL);

  if (response.getSelectedButton() == ui.Button.OK) {
    const nombre = response.getResponseText().trim();
    if (nombre) return nombre;
  }
  return null;
}
