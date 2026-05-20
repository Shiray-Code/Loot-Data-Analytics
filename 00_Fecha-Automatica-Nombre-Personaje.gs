function onEdit(e) {
  const hoja = e.source.getActiveSheet();
  const nombreHoja = hoja.getName();

  if (!nombreHoja.startsWith("Loot_")) return;
  if (["Resumen", "Valor_NPC"].includes(nombreHoja)) return;

  const rango = e.range;
  const filas = rango.getNumRows();
  const filaInicio = rango.getRow();

  let personaje = null;

  // ===== LOGICA CORRECTA =====
  if (nombreHoja === "Loot_Terror") {

    const ultimaHora = PropertiesService.getScriptProperties().getProperty("terror_timestamp");
    const ahora = new Date().getTime();

    // 4 horas = 14400000 ms
    const expiro = !ultimaHora || (ahora - Number(ultimaHora) > 14400000);

    // Si expiró → borrar personaje guardado
    if (expiro) {
      PropertiesService.getScriptProperties().deleteProperty("personaje");
    }

    personaje = obtenerPersonaje();

    if (!personaje) {
      personaje = solicitarPersonaje();
      if (!personaje) return;

      guardarPersonaje(personaje);

      // Guardar timestamp actual
      PropertiesService.getScriptProperties().setProperty("terror_timestamp", ahora.toString());
    }

  } else {

    //  SIEMPRE pedir en otras hojas
    personaje = solicitarPersonaje();
    if (!personaje) return;
  }

  // ===== PROCESAR TODAS LAS FILAS PEGADAS =====
  for (let i = 0; i < filas; i++) {
    const fila = filaInicio + i;

    if (fila < 2) continue;

    const texto = hoja.getRange(fila, 1).getValue();

    if (!texto) continue;

    // Fecha
    const celdaFecha = hoja.getRange(fila, 2);

    if (!celdaFecha.getValue()) {
      celdaFecha.setValue(new Date());
    }

    // Personaje
    hoja.getRange(fila, 3).setValue(personaje);
  }
}
