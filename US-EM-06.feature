Feature: US-EM-05 - Registrar acciones correctivas comerciales
  Como emprendedor de un negocio de plantas, quiero registrar acciones correctivas comerciales 
  para controlar el mantenimiento aplicado a cada planta en riesgo. [cite: 42]

  Scenario: Registro de acción correctiva
    Given que el emprendedor visualiza una recomendación preventiva [cite: 42]
    When el emprendedor registra una acción correctiva realizada [cite: 42]
    Then la plataforma almacena la acción dentro del historial del cultivo [cite: 42]
    And la plataforma actualiza el estado de la planta comercial [cite: 42]

  Example: Ejecutar mitigación de pérdida
    |Recomendación activa de "Aplicar fungicida" visible en pantalla|
    |Completa los campos e interactúa con el botón de guardar registro|
  Example: Output
    |Salva la actividad en base de datos y conmuta el estado del stock de "Crítico" a "En Recuperación"|

  Scenario: Acción correctiva sin descripción
    Given que el emprendedor intenta registrar una acción correctiva sin descripción [cite: 42]
    When el emprendedor selecciona el botón “Guardar” [cite: 42]
    Then la plataforma muestra el mensaje “Ingrese una descripción de la acción realizada” [cite: 42]
    And la plataforma evita guardar un registro incompleto [cite: 42]

  Example: Omisión de bitácora en acción correctiva
    |Formulario de mitigación sin el llenado de la caja descriptiva obligatoria|
    |Presiona el comando final de guardado|
  Example: Output
    |Lanza la advertencia "Ingrese una descripción..." bloqueando el procesamiento de los datos|