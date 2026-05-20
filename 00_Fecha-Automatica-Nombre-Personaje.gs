function onEdit(e) {
  const hoja = e.source.getActiveSheet();
  const nombreHoja = hoja.getName();

  if (!nombreHoja.startsWith("Loot_")) return;
  if (["Resumen", "Valor_NPC"].includes(nombreHoja)) return;

  const rango = e.range;
  const filas = rango.getNumRows();
  const filaInicio = rango.getRow();

  let personaje = null;
  
  if (nombreHoja === "Loot_Terror") {
    personaje = obtenerPersonaje();
    if (!personaje) {
      personaje = solicitarPersonaje();
      if (!personaje) return;
      guardarPersonaje(personaje);
    }
  } else {
    // 🔥 SIEMPRE pedir en otras hojas (NO reutiliza cache)
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
