Feature: US-RU-05 - Recibir recomendaciones simples de cuidado
  Como residente urbano aficionado a las plantas, quiero recibir recomendaciones simples de cuidado 
  para saber qué acción realizar en mi planta. [cite: 13]

  Scenario: Recomendación de riego
    Given que el sistema identifica baja humedad en la planta registrada [cite: 13]
    When el residente urbano revisa el detalle de la planta [cite: 13]
    Then la aplicación muestra la recomendación “Agregar agua hoy” [cite: 13]
    And la aplicación explica brevemente que la humedad se encuentra baja [cite: 13]

  Example: Falta de agua
    |Detección automatizada de déficit hídrico crítico en el sustrato|
    |Usuario revisa la ficha del cultivo|
  Example: Output
    |Muestra de forma directa la recomendación "Agregar agua hoy" justificando la baja humedad|

  Scenario: Recomendación de luz
    Given que el sistema identifica baja exposición de luz en la planta registrada [cite: 13]
    When el residente urbano revisa el detalle de la planta [cite: 13]
    Then la aplicación muestra la recomendación “Mover la planta a una zona con más luz” [cite: 13]
    And la aplicación muestra la recomendación con lenguaje claro y no técnico [cite: 13]

  Example: Déficit lumínico
    |Detección automatizada de ambientes excesivamente sombríos|
    |Usuario revisa la ficha del cultivo|
  Example: Output
    |Muestra la sugerencia "Mover la planta a una zona con más luz" de manera comprensible|

  Scenario: Sin recomendación urgente
    Given que las condiciones de la planta se encuentran dentro de rangos adecuados [cite: 13]
    When el residente urbano revisa el detalle de la planta [cite: 13]
    Then la aplicación muestra el mensaje “No hay acciones urgentes por ahora” [cite: 13]
    And la aplicación mantiene visible el estado actual de la planta [cite: 13]

  Example: Cultivo estable
    |Variables dentro de los umbrales ideales preestablecidos|
    |Usuario revisa la ficha del cultivo|
  Example: Output
    |Coloca el mensaje pasivo "No hay acciones urgentes por ahora" sin alterar la vista base|