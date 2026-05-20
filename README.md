# Proyecto-Personal-Compilado-Loot-y-Dashboard

Automatización de extracción de datos provenientes de un CSV pegado por cada integrante del grupo, para creación de base de datos y Dashboard.

---

## Objetivo

Lograr obtener una base de datos proveniente de un texto pegado en un Google Sheet, que posteriormente derive en un Dashboard en Power BI.

---

## Funcionalidades

- Detección de distintos Items.
- Separación por cantidad e Items
- Cruce con base de datos de Precios NPC
- Automatización de fecha al pega el CSV
- Label consultando Nombre de Personaje
- Restricción en hoja especifica referente a Nombre de Personaje (4 horas de memoria de nombre)
- Consolidación de datos
- Automatización en actualización
- Integración en Google Sheet
- Creación de Dashboard en Power BI

---

## Tecnoligías utilizadas

- JavaScript
- Google Sheet
- App Script
- Power BI

---

## Resultado

La automatización permitió contabilizar ganancia de jugadores en tiempo real y junto al dashboard poder visualizar de mejor manera el día de mayor ganancia, comparar con otros jugadores, el Item más valioso obtenido y la fecha, y finalmente distinguir quien ha logrado obtener mayores ganancias.

## Estructura del proyecto

```bash
Proyecto-Personal-Compilado-Loot-y-Dashboard/
│
├── 00_Fecha-Automatica-Nombre-Personaje.gs
├── 01_Obtener-Nombre-Personaje.gs
├── 02_Triggers.gs
├── 03_Maestro-de-Items.gs
├── 04_Generar-Tabla.gs
├── 05_Formato-Temporal.gs
├── 06_Consolidado-de-Bases.gs
├── 07_Crear-Base-de-Datos-SQL.gs //En proceso//
└── README.md
```

---

## Aprendizaje

- Automatización de creación de base de datos con Google Sheet
- Aplicación de JavaScript para uso de App Script
- Integración de datos de multiples fuentes de información
- Aplicación de Power BI con funciones DAX y marcadores
- Optimizar visualizaciones

---

## En proceso

- Creación de pagina Web
- Atajos para cada personaje en la Web para obtener su base de Google Sheet y Observar su Dashboard

---

## Autor

Kevin Daniel Shiray Vergara
