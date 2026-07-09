    Feature: US-EA-06 - Registrar observaciones técnicas
  Como experto ambiental, quiero registrar observaciones técnicas 
  para complementar los datos ambientales con información cualitativa del cultivo. [cite: 29]

  Scenario: Registrar de observación técnica
    Given que el experto ambiental se encuentra en el detalle de un cultivo [cite: 29]
    When el experto ambiental escribe una observación técnica [cite: 29]
    And el experto ambiental presiona el botón “Guardar observación” [cite: 29]
    Then la plataforma almacena la observación dentro del historial del cultivo [cite: 29]
    And la plataforma muestra la fecha y autor de la observación [cite: 29]

  Example: Anotación en bitácora de campo
    |Usuario revisando la ficha analítica de un lote experimental|
    |Escribe comentarios sobre clorosis observada en las hojas|
    |Presiona "Guardar observación"|
  Example: Output
    |Indexa la nota cualitativa en el feed histórico anexando firma digital y hora de inserción|

  Scenario: Observación vacía
    Given que el experto ambiental intenta guardar una observación sin contenido [cite: 29]
    When el experto ambiental presiona el botón “Guardar observación” [cite: 29]
    Then la plataforma muestra el mensaje “Ingrese una observación antes de guardar” [cite: 29]
    And la plataforma evita almacenar un registro vacío [cite: 29]

  Example: Envío de caja vacía
    |Caja de comentarios completamente en blanco|
    |Presiona accidentalmente o intencionalmente "Guardar observación"|
  Example: Output
    |Muestra la alerta "Ingrese una observación antes de guardar" y deniega el posteo|