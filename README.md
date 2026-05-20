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

## Procedimiento

## Proceso Automatizado

### 1. Captura y procesamiento del mensaje inicial

El proceso comienza una vez finalizado algún contenido dentro del juego. Como recompensa, el sistema entrega automáticamente un mensaje con los ítems obtenidos por el jugador. Dicho mensaje puede variar según el idioma configurado por el usuario (Portugués, Inglés o Español).

Ejemplos de mensajes procesados:

- 23:22 Você recebeu: Damson shard, 20 Echo Shards, 13 Star dusts, 25 Rough Gemstones, 3 Technological Crystals (Tier: 8) e Technological Crystal (Tier: 7).
- 22:34 You've received: Technological Crystal (Tier: 8), 8 Star dusts, 21 Rough Gemstones, Scarlet Shard and Technological Crystal (Tier: 7).
- 18:16 Has recibido: 994 tanzanite crystals, 95 Star dusts, 146 south sea pearls, 202 marquise emeralds, 11 Mystic Stars, 145 rough diamonds, 100 Echo Shards y 1030 pear tourmalines.

Una vez copiado y pegado el mensaje en la hoja correspondiente al contenido realizado, el sistema solicitará automáticamente el nombre del personaje asociado al registro.

![Solicitud Nombre](Imagenes/Solicitud-Nombre.png)

---

### 2. Registro automático de información

Una vez ingresado y confirmado el nombre del personaje, el script registra automáticamente:

- Fecha del ingreso
- Nombre del personaje
- Contenido procesado
- Ítems obtenidos

Todo esto queda almacenado en una base estructurada para su posterior análisis.

![Base Terror](Imagenes/Base-Terror.png)

---

### 3. Cruce de información y valorización automática

Al detectar un nuevo registro, el sistema ejecuta automáticamente un cruce entre los ítems obtenidos y la base de valores unitarios almacenada en la hoja `Valor_NPC`.

![Base Valor NPC](Imagenes/Base-Valor-NPC.png)

Como resultado, se genera una base consolidada que contiene:

- Cantidad obtenida
- Valor unitario
- Valor total
- Tipo de ítem
- Información del jugador

![Base Total](Imagenes/Base-Total.png)

Con el objetivo de evitar pérdida o manipulación de información entre jugadores, cada usuario dispone de su propia planilla individual en Google Sheets.

---

### 4. Consolidación centralizada de información

Posteriormente, el sistema integra automáticamente todas las planillas individuales en una base consolidada centralizada, la cual contiene los siguientes campos:

| Item | Cantidad | Origen | Precio Unitario | Valor Total | Fecha | Mes | Semana | Personaje | Jugador |
|---|---|---|---|---|---|---|---|---|---|

![Base Consolidado](Imagenes/Base-Consolidado.png)

La actualización de esta base se ejecuta automáticamente durante la madrugada, garantizando que la información se encuentre actualizada diariamente.

---

### 5. Visualización y análisis en Power BI

Finalmente, la base consolidada es conectada a Power BI, donde mediante el uso de:

- Funciones DAX
- Marcadores
- Modelado de datos
- Cruces entre tablas
- Visualizaciones dinámicas

se construyen dashboards interactivos que permiten analizar ganancias, ítems obtenidos y métricas operacionales del juego.

Además, el sistema incorpora automáticamente las imágenes de los ítems mediante el cruce entre la base consolidada y la tabla `Valor_NPC`.

![Dashboard Power BI](Imagenes/Dashboard-PB.png)
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
