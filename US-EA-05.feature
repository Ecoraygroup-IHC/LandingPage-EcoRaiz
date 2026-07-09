Feature: US-EA-05 - Filtrar registros por rango de fechas
  Como experto ambiental, quiero filtrar registros por rango de fechas 
  para analizar periodos específicos de monitoreo. [cite: 28]

  Scenario: Filtro aplicado correctamente
    Given que el experto ambiental tiene registros históricos disponibles [cite: 28]
    When el experto ambiental selecciona una fecha inicial y una fecha final [cite: 28]
    Then la plataforma muestra únicamente los registros del periodo seleccionado [cite: 28]
    And la plataforma actualiza los gráficos y tablas asociados [cite: 28]

  Example: Acotar ventana temporal
    |Logs continuos que cubren varios meses de estudio continuo|
    |Ajusta el selector de fechas definiendo del "01/05" al "15/05"|
  Example: Output
    |Recorta y refresca las tablas dinámicas y curvas gráficas basándose solo en esa quincena|

  Scenario: Rango de fechas sin registros
    Given que no existen registros dentro del rango seleccionado [cite: 28]
    When el experto ambiental aplica el filtro [cite: 28]
    Then la plataforma muestra el mensaje “No se encontraron registros para el periodo seleccionado” [cite: 28]
    And la plataforma permite modificar el rango de fechas [cite: 28]

  Example: Ventana de tiempo vacía
    |Definición de un intervalo de fechas anterior al despliegue de los sensores|
    |Confirma la selección del rango|
  Example: Output
    |Imprime "No se encontraron registros para el periodo seleccionado" abriendo de nuevo los selectores|