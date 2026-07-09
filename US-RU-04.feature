Feature: US-RU-04 - Consultar condiciones ambientales simplificadas
  Como residente urbano aficionado a las plantas, quiero consultar condiciones ambientales simplificadas 
  para entender la humedad, luz y temperatura sin interpretar datos técnicos complejos. [cite: 12]

  Scenario: Visualización de condiciones disponibles
    Given que la planta registrada cuenta con información ambiental reciente [cite: 12]
    When el residente urbano accede al detalle de la planta [cite: 12]
    Then la aplicación muestra humedad, luz y temperatura mediante indicadores simples [cite: 12]
    And la aplicación acompaña cada indicador con etiquetas como “Bajo”, “Adecuado” o “Alto” [cite: 12]

  Example: Datos interpretados
    |Métricas vigentes almacenadas en el sistema|
    |Usuario accede al panel detallado del cultivo|
  Example: Output
    |Muestra humedad, luz y temperatura mapeados con etiquetas descriptivas "Bajo", "Adecuado" o "Alto"|

  Scenario: Información ambiental no disponible
    Given que la planta registrada no cuenta con información ambiental reciente [cite: 12]
    When el residente urbano accede al detalle de la planta [cite: 12]
    Then la aplicación muestra el mensaje “Información ambiental pendiente de actualización” [cite: 12]
    And la aplicación sugiere registrar o sincronizar nuevos datos del cultivo [cite: 12]

  Example: Datos inexistentes
    |Cultivo sin bitácora ni lecturas vinculadas recientes|
    |Usuario accede al panel detallado del cultivo|
  Example: Output
    |Despliega "Información ambiental pendiente de actualización" con opción de sincronizar|