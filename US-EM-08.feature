Feature: US-EM-08 - Consultar pérdidas potenciales por plantas en riesgo
  Como emprendedor de un negocio de plantas, quiero consultar pérdidas potenciales por plantas en riesgo 
  para estimar el impacto económico de un deterioro no atendido. [cite: 45]

  Scenario: Estimación de pérdida potencial
    Given que el emprendedor tiene plantas comerciales en estado crítico [cite: 45]
    And el emprendedor registró un valor referencial para cada planta [cite: 45]
    When el emprendedor accede a la sección “Pérdidas potenciales” [cite: 45]
    Then la plataforma muestra una estimación económica de las plantas en riesgo [cite: 45]
    And la plataforma identifica los cultivos con mayor impacto potencial [cite: 45]

  Example: Proyección contable de riesgo
    |Lotes de orquídeas caras catalogados en estado crítico con precios base definidos|
    |Abre el módulo de analítica financiera de pérdidas|
  Example: Output
    |Calcula y enseña el monto total monetario en riesgo y lista arriba el producto con mayor peso financiero|

  Scenario: Valor referencial faltante
    Given que una planta comercial no tiene valor referencial registrado [cite: 45]
    When la plataforma calcula pérdidas potenciales [cite: 45]
    Then la plataforma muestra el mensaje “Valor no registrado” para esa planta [cite: 45]
    And la plataforma permite editar el valor referencial desde el inventario [cite: 45]

  Example: Datos económicos ausentes
    |Stock marcado en peligro pero guardado con coste unitario en blanco o cero|
    |El motor financiero corre la rutina de cálculo de mermas|
  Example: Output
    |Coloca la advertencia "Valor no registrado" abriendo un enlace rápido para editar su precio base|