Feature: US-EA-04 - Comparar microclimas de cultivos
  Como experto ambiental, quiero comparar microclimas de cultivos 
  para identificar diferencias entre entornos controlados. [cite: 27]

  Scenario: Comparación de dos microclimas
    Given que el experto ambiental tiene cultivos asociados a diferentes microclimas [cite: 27]
    When el experto ambiental selecciona dos microclimas para comparar [cite: 27]
    Then la plataforma muestra los indicadores ambientales de ambos microclimas en paralelo [cite: 27]
    And la plataforma permite identificar diferencias entre temperatura, humedad y luz [cite: 27]

  Example: Análisis comparativo cruzado
    |Múltiples entornos monitorizados activos simultáneamente|
    |Marca dos casillas de verificación de entornos distintos y ejecuta la acción|
  Example: Output
    |Despliega una tabla comparativa bivariada lado a lado contrastando métricas físicas|

  Scenario: Selección insuficiente para comparación
    Given que el experto ambiental selecciona solo un microclima [cite: 27]
    When el experto ambiental intenta iniciar la comparación [cite: 27]
    Then la plataforma muestra el mensaje “Seleccione al menos dos microclimas para comparar” [cite: 27]
    And la plataforma evita generar una comparación incompleta [cite: 27]

  Example: Error por selección unitaria
    |Solo un entorno marcado en la lista de opciones|
    |Presiona el botón de acción "Comparar"|
  Example: Output
    |Despliega la advertencia "Seleccione al menos dos microclimas para comparar" y aborta la vista dual|

  Scenario: Comparación con datos incompletos
    Given que uno de los microclimas seleccionados tiene información parcial [cite: 27]
    When el experto ambiental inicia la comparación [cite: 27]
    Then la plataforma muestra los datos disponibles del microclima [cite: 27]
    And la plataforma indica visualmente las variables faltantes [cite: 27]

  Example: Datos parciales en contraste
    |Uno de los entornos tiene el sensor de luz roto (sin datos)|
    |Ejecuta la comparación multifactorial|
  Example: Output
    |Renderiza las variables comunes y dibuja celdas vacías o nulas resaltadas para las métricas faltantes|