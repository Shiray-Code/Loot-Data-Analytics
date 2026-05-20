// ===== TRIGGER ON EDIT =====
function onEdit(e) {
  const hoja = e.source.getActiveSheet();
  const nombreHoja = hoja.getName();

  if (!nombreHoja.startsWith("Loot_")) return;
  if (["Resumen", "Valor_NPC"].includes(nombreHoja)) return;

  const rango = e.range;
  const filas = rango.getNumRows();
  const filaInicio = rango.getRow();

  let personaje;

  // ===== LOGICA PERSONAJE =====
  if (nombreHoja === "Loot_Terror") {
    personaje = obtenerPersonaje();
    if (!personaje) {
      personaje = solicitarPersonaje();
      if (!personaje) return;
      guardarPersonaje(personaje);
    }
  } else {
    personaje = solicitarPersonaje();
    if (!personaje) return;
  }

  // ===== RECORRER FILAS (PEGADO MASIVO OK) =====
  for (let i = 0; i < filas; i++) {
    const fila = filaInicio + i;

    if (fila < 2) continue;

    const texto = hoja.getRange(fila, 1).getValue();
    if (!texto) continue;

    const celdaFecha = hoja.getRange(fila, 2);
    if (!celdaFecha.getValue()) {
      celdaFecha.setValue(new Date());
    }

    hoja.getRange(fila, 3).setValue(personaje);
  }
}
