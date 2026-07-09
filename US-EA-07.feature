Feature: US-EA-07 - Visualizar alertas técnicas de variables críticas
  Como experto ambiental, quiero visualizar alertas técnicas de variables críticas 
  para actuar oportunamente ante desviaciones ambientales. [cite: 30]

  Scenario: Alerta técnica generada
    Given una variable ambiental supera el rango definido para un cultivo [cite: 30]
    When el experto ambiental accede al panel técnico [cite: 30]
    Then la plataforma muestra una alerta técnica con la variable afectada [cite: 30]
    And la plataforma indica el cultivo y microclima asociados [cite: 30]

  Example: Alarma por exceso térmico
    |La temperatura ambiental del invernadero alcanza un pico anómalo|
    |Experto carga la consola técnica avanzada|
  Example: Output
    |Despliega una alerta destacando la variable fuera de rango junto con el ID de cultivo y microclima|

  Scenario: Revisión de detalle de alerta técnica
    Given que el experto ambiental visualiza una alerta técnica [cite: 30]
    When el experto ambiental selecciona la alerta [cite: 30]
    Then la plataforma muestra el historial reciente de la variable afectada [cite: 30]
    And la plataforma muestra una recomendación de revisión o ajuste del entorno [cite: 30]

  Example: Análisis de causa raíz técnico
    |Fila de alerta activa presente en la lista de incidencias|
    |Selecciona o hace doble clic sobre la alerta técnica|
  Example: Output
    |Abre un panel con el micro-gráfico de las últimas horas de la variable y notas de corrección del entorno|