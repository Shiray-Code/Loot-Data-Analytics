// ===== FORMATO MES =====
function formatearMes(fecha) {
  const meses = ["Ene.","Feb.","Mar.","Abr.","May.","Jun.","Jul.","Ago.","Sep.","Oct.","Nov.","Dic."];
  return meses[fecha.getMonth()];
}

// ===== SEMANA ISO =====
function getISOWeek(date) {
  const tempDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = tempDate.getUTCDay() || 7;
  tempDate.setUTCDate(tempDate.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(tempDate.getUTCFullYear(),0,1));
  return Math.ceil((((tempDate - yearStart) / 86400000) + 1)/7);
}

// ===== SINGULAR =====
function singularizar(texto){
  const excepciones = ["leaves"];
  
  return texto.split(" ").map(w=>{
    if (excepciones.includes(w.toLowerCase())) return w;
    if (/ies$/i.test(w)) return w.replace(/ies$/i,"y");
    if (/ves$/i.test(w)) return w.replace(/ves$/i,"f");
    if (/(xes|ches|shes|ses)$/i.test(w)) return w.replace(/es$/i,"");
    if (/s$/i.test(w) && !/ss$/i.test(w)) return w.replace(/s$/i,"");
    return w;
  }).join(" ");
}
