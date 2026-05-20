//SQL//

function enviarAMySQL() {
  const hoja = SpreadsheetApp.getActiveSpreadsheet()
    .getSheetByName("Consolidado");

  if (!hoja) throw new Error("No existe la hoja Consolidado");

  const data = hoja.getDataRange().getValues();
  if (data.length <= 1) throw new Error("No hay datos para enviar");

  const url = "Datos Personales";
  const user = "Datos Personales";
  const password = "Datos Personales";

  const conn = Jdbc.getConnection(url, user, password);
  const stmt = conn.prepareStatement(`
    INSERT INTO loot 
    (item, cantidad, origen, boss, precio_unitario, valor_total, usuario)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `);

  // limpiar tabla antes (opcional)
  conn.createStatement().execute("TRUNCATE TABLE loot");

  for (let i = 1; i < data.length; i++) {
    stmt.setString(1, String(data[i][0]));
    stmt.setInt(2, Number(data[i][1]) || 0);
    stmt.setString(3, String(data[i][2]));
    stmt.setString(4, String(data[i][3]));
    stmt.setFloat(5, Number(data[i][4]) || 0);
    stmt.setFloat(6, Number(data[i][5]) || 0);
    stmt.setString(7, String(data[i][6]));
    stmt.setString(8, String(data[i][7]));
    stmt.setString(9, String(data[i][8]));
    stmt.setString(10, String(data[i][9]));

    stmt.addBatch();
  }

  stmt.executeBatch();

  stmt.close();
  conn.close();
}
