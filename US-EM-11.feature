Feature: US-EM-10 - Comparar estado de lotes comerciales
  Como emprendedor de un negocio de plantas, quiero comparar el estado de lotes comerciales 
  para identificar qué grupo requiere mayor atención. [cite: 47]

  Scenario: Comparación de lotes
    Given que el emprendedor tiene dos o más lotes registrados [cite: 47]
    When el emprendedor selecciona los lotes que desea comparar [cite: 47]
    Then la plataforma muestra el estado general de cada lote [cite: 47]
    And la plataforma resalta el lote con mayor cantidad de plantas críticas [cite: 47]

  Example: Auditoría comparativa de almacenes
    |Diferentes agrupaciones comerciales guardadas en la cuenta de la empresa|
    |Selecciona "Lote Sucursales" y "Lote Central" confirmando la acción de contraste|
  Example: Output
    |Muestra gráficos de salud paralelos y pone foco visual sobre el lote con más mermas o muertes|

  Scenario: Lotes insuficientes
    Given que el emprendedor tiene menos de dos lotes registrados [cite: 47]
    When el emprendedor intenta comparar lotes [cite: 47]
    Then la plataforma muestra el mensaje “Registre al menos dos lotes para comparar” [cite: 47]
    And la plataforma mantiene visible la opción de crear nuevo lote [cite: 47]

  Example: Operación comparativa con un solo grupo
    |Cuenta comercial que posee únicamente un lote creado en su histórico|
    |Intenta presionar el gatillo de comparación avanzada|
  Example: Output
    |Bloquea la acción proyectando el aviso de contingencia "Registre al menos dos lotes para comparar"|