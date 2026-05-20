// ===== GENERADOR =====
function GenerarTablaLootTotal() {
  
  const hojasOrigen = ["Loot_Terror","Loot_Perros","Loot_MDR","Loot_MDA","Loot_Red"];
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  
  let hojaDestino = ss.getSheetByName("Tabla_Loot_Total");
  if (!hojaDestino) hojaDestino = ss.insertSheet("Tabla_Loot_Total");
  else hojaDestino.clear();
  
  hojaDestino.appendRow(["Item","Cantidad","Origen","Precio_Unitario","Valor_Total","Fecha","Mes","Semana","Personaje"]);
  
  const master = obtenerItemsMaster();
  let output = [];
  
  hojasOrigen.forEach(nombreHoja => {
    
    const hoja = ss.getSheetByName(nombreHoja);
    if (!hoja) return;
    
    const lastRow = hoja.getLastRow();
    if (lastRow < 2) return;

    // A=Texto | B=Fecha | C=Personaje
    const data = hoja.getRange(2,1,lastRow-1,3).getValues();

    data.forEach(fila => {

      let texto = (fila[0] || "").toString().trim();
      let fecha = fila[1];
      let personaje = fila[2];

      if (!texto || !(fecha instanceof Date)) return;

      const fechaObj = fecha;
      const mes = formatearMes(fechaObj);
      const semana = getISOWeek(fechaObj);

      texto = texto.replace(
        /^\d{1,2}:\d{2}(:\d{2})?\s*(You've received:|You received:|Você recebeu:|You looted:|Has recibido:)\s*/i,
        ""
      );

      texto = texto
        .replace(/^\d{1,2}:\d{2}(:\d{2})?\s*/, "")
        .replace(/\s+(and|y|e)\s+/gi,",")
        .replace(/;/g,",")
        .replace(/\|/g,",")
        .replace(/\s*,\s*/g,",")
        .replace(/\.$/,"")
        .trim();

      if (!texto) return;

      const origen = nombreHoja.replace("Loot_","");

      texto.split(",").forEach(parte => {

        let itemTexto = parte.trim();
        if (!itemTexto) return;

        let cantidad = 1;
        let nombreItem = itemTexto;

        const match = itemTexto.match(/^(\d+)\s+(.*)/);
        if (match){
          cantidad = parseInt(match[1]);
          nombreItem = match[2];
        }

        nombreItem = singularizar(nombreItem.replace(/\u00A0/g," ").trim());

        const info = master[nombreItem.toLowerCase()] || {};
        const precio = Number(info.precio) || 0;

        output.push([
          nombreItem,
          cantidad,
          origen,
          precio,
          precio * cantidad,
          fechaObj,
          mes,
          semana,
          personaje || ""
        ]);

      });

    });
  });

  if (output.length > 0){
    hojaDestino.getRange(2,1,output.length,9).setValues(output);
  }
}
