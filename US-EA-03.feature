          Feature: US-EA-02 - Visualizar variables ambientales detalladas
  Como experto ambiental, quiero visualizar variables ambientales detalladas 
  para interpretar con mayor precisión el estado de los cultivos monitoreados. [cite: 25]

  Scenario: Visualización de variables disponibles
    Given que el cultivo cuenta con registros ambientales recientes [cite: 25]
    When el experto ambiental accede al detalle del cultivo [cite: 25]
    Then la plataforma muestra valores de humedad, temperatura, luz y estado general [cite: 25]
    And la plataforma muestra la fecha de última actualización de los datos [cite: 25]

  Example: Lectura cuantitativa precisa
    |Muestras de sensores ingresadas recientemente en la base de datos|
    |Experto abre el cuadro de telemetría detallada|
  Example: Output
    |Expone métricas numéricas exactas junto con la marca temporal del último ping del sensor|

  Scenario: Datos desactualizados
    Given que el cultivo no cuenta con datos recientes [cite: 25]
    When el experto ambiental accede al detalle del cultivo [cite: 25]
    Then la plataforma muestra el mensaje “Datos pendientes de actualización” [cite: 25]
    And la plataforma diferencia visualmente los valores desactualizados [cite: 25]

  Example: Pérdida de conectividad con nodos
    |Especimen sin transmisión de variables por más de 24 horas|
    |Experto abre el cuadro de telemetría detallada|
  Example: Output
    |Muestra el texto "Datos pendientes de actualización" y opaca/atenúa las últimas lecturas conocidas|