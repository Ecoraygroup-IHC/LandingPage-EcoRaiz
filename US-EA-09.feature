Feature: US-EA-08 - Identificar patrones ambientales recurrentes
  Como experto ambiental, quiero identificar patrones ambientales recurrentes 
  para comprender comportamientos repetitivos en los cultivos monitoreados. [cite: 31]

  Scenario: Patrón ambiental visible
    Given que la plataforma cuenta con registros históricos suficientes [cite: 31]
    When el experto ambiental accede a la sección “Patrones” [cite: 31]
    Then la plataforma muestra tendencias recurrentes en las variables ambientales [cite: 31]
    And la plataforma relaciona los patrones con los cultivos afectados [cite: 31]

  Example: Identificación de ciclos térmicos
    |Big data consolidado con meses de lecturas estables de sensores|
    |Experto entra al módulo avanzado de "Patrones"|
  Example: Output
    |Expone tendencias repetitivas aisladas (ej: caídas de humedad al mediodía) asociadas a cultivos|

  Scenario: Datos insuficientes para patrones
    Given que la plataforma no cuenta con registros suficientes [cite: 31]
    When el experto ambiental accede a la sección “Patrones” [cite: 31]
    Then la plataforma muestra el mensaje “Se requieren más registros para identificar patrones” [cite: 31]
    And la plataforma sugiere continuar monitoreando los cultivos [cite: 31]

  Example: Cómputo analítico insuficiente
    |Base de datos joven con escasos checkpoints guardados|
    |Experto entra al módulo avanzado de "Patrones"|
  Example: Output
    |Genera un estado vacío indicando "Se requieren más registros..." con pautas para continuar colectando|