Feature: US-RU-15 - Visualizar evolución del estado de una planta
  Como residente urbano aficionado a las plantas, quiero visualizar la evolución del estado de una planta 
  para saber si los cuidados realizados están funcionando. [cite: 23]

  Scenario: Línea de tiempo con evolución
    Given que la planta tiene estados registrados en diferentes fechas [cite: 23]
    When el residente urbano accede a la sección “Evolución” [cite: 23]
    Then la aplicación muestra una línea de tiempo del estado de la planta [cite: 23]
    And la aplicación diferencia visualmente los estados saludable, advertencia y crítico [cite: 23]

  Example: Consultar progreso histórico
    |Colección de estados almacenados de forma secuencial en las últimas semanas|
    |Usuario ingresa al módulo gráfico de "Evolución"|
  Example: Output
    |Dibuja un diagrama o línea de tiempo mapeando con colores verde, amarillo y rojo las variaciones de salud|

  Scenario: Evolución sin datos suficientes
    Given que la planta tiene pocos registros históricos [cite: 23]
    When el residente urbano accede a la sección “Evolución” [cite: 23]
    Then la aplicación muestra el mensaje “Aún no hay datos suficientes para mostrar evolución” [cite: 23]
    And la aplicación sugiere continuar registrando acciones de cuidado [cite: 23]

  Example: Progreso bloqueado por falta de muestras
    |Elemento nuevo o sin suficientes checkpoints en el tiempo|
    |Usuario ingresa al módulo gráfico de "Evolución"|
  Example: Output
    |Muestra la leyenda informativa de datos insuficientes con un call-to-action para añadir cuidados|