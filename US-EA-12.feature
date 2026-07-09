Feature: US-EA-12 - Compartir resumen del estado de cultivos
  Como experto ambiental, quiero compartir un resumen del estado de cultivos 
  para comunicar hallazgos relevantes a mi equipo o estudiantes. [cite: 35]

  Scenario: Generación de resumen compartible
    Given que el experto ambiental tiene cultivos monitoreados [cite: 35]
    When el experto ambiental selecciona la opción “Compartir resumen” [cite: 35]
    Then la plataforma genera una vista resumida con estados, alertas y recomendaciones [cite: 35]
    And la plataforma permite copiar o descargar el resumen generado [cite: 35]

  Example: Enviar minuta rápida
    |Proyectos activos bajo supervisión en la pantalla actual|
    |Presiona la opción "Compartir resumen"|
  Example: Output
    |Crea un bloque de texto ligero y limpio con opción de copiado rápido al portapapeles|

  Scenario: Resumen sin alertas activas
    Given que los cultivos monitoreados no tienen alertas activas [cite: 35]
    When el experto ambiental genera el resumen [cite: 35]
    Then la plataforma muestra el estado general estable de los cultivos [cite: 35]
    And la plataforma evita mostrar secciones vacías o confusas [cite: 35]

  Example: Estado impecable compartido
    |Falta absoluta de alertas críticas o preventivas en el sistema|
    |Presiona la opción "Compartir resumen"|
  Example: Output
    |Genera el reporte sintetizado manifestando la estabilidad general sin imprimir bloques en blanco|