Feature: US-EA-11 - Comparar periodos de análisis
  Como experto ambiental, quiero comparar periodos de análisis 
  para evaluar cambios ambientales entre diferentes intervalos de tiempo. [cite: 34]

  Scenario: Comparación de periodos válida
    Given que el experto ambiental tiene registros históricos disponibles [cite: 34]
    When el experto ambiental selecciona dos periodos de análisis [cite: 34]
    Then la plataforma muestra indicadores comparativos entre ambos periodos [cite: 34]
    And la plataforma resalta incrementos o disminuciones relevantes [cite: 34]

  Example: Comparar Primavera vs Invierno
    |Información extendida multitemporal en la base de datos|
    |Selecciona Periodo A (Enero) y Periodo B (Junio) en el panel|
  Example: Output
    |Entrega un reporte de deltas porcentuales destacando variaciones abruptas de temperatura|

  Scenario: Periodos incompletos
    Given que uno de los periodos seleccionados no tiene registros suficientes [cite: 34]
    When el experto ambiental intenta comparar los periodos [cite: 34]
    Then la plataforma muestra el mensaje “Uno de los periodos no cuenta con datos suficientes” [cite: 34]
    And la plataforma permite seleccionar otro periodo [cite: 34]

  Example: Comparación asimétrica inválida
    |Periodo B coincide con un mes donde la estación estuvo apagada por mantenimiento|
    |Ejecuta el gatillo de comparación de intervalos|
  Example: Output
    |Lanza la notificación "Uno de los periodos no cuenta con datos suficientes" reabriendo la selección|