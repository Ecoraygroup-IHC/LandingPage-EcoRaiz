Feature: US-EA-10 - Generar reporte visual de monitoreo
  Como experto ambiental, quiero generar reportes visuales de monitoreo 
  para compartir resultados con equipos, estudiantes o instituciones. [cite: 33]

  Scenario: Generación de reporte visual
    Given que el experto ambiental tiene gráficos y registros disponibles [cite: 33]
    When el experto ambiental selecciona la opción “Generar reporte” [cite: 33]
    Then la plataforma crea un reporte con gráficos, resumen de alertas y observaciones [cite: 33]
    And la plataforma permite descargar el reporte en formato PDF [cite: 33]

  Example: Compilar informe de laboratorio
    |Cuadros estadísticos e historial cualitativo cargados|
    |Selecciona el control ejecutor "Generar reporte"|
  Example: Output
    |Ensambla una plantilla estética con infografías y resúmenes habilitando la bajada en PDF|

  Scenario: Reporte con filtros aplicados
    Given que el experto ambiental tiene filtros activos en el análisis [cite: 33]
    When el experto ambiental genera el reporte visual [cite: 33]
    Then la plataforma incluye únicamente los datos filtrados [cite: 33]
    And la plataforma indica el rango de análisis usado en el reporte [cite: 33]

  Example: Compilar informe acotado
    |Filtro temporal activo que muestra solo la última semana epidemiológica|
    |Selecciona el control ejecutor "Generar reporte"|
  Example: Output
    |Construye el documento PDF omitiendo el resto del año e imprimiendo la leyenda del rango usado|