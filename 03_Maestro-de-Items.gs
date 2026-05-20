// ===== MASTER =====
function obtenerItemsMaster() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Valor_NPC");
  if (!sheet || sheet.getLastRow() < 2) return {};
  
  const data = sheet.getDataRange().getValues();
  let mapa = {};
  
  for (let i = 1; i < data.length; i++) {
    const item = data[i][0]?.toString().toLowerCase().trim();
    if (!item) continue;

    mapa[item] = {
      precio: Number(data[i][1]) || 0
    };
  }
  return mapa;
}
