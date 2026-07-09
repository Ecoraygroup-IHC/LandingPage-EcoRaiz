Feature: US-EM-06 - Consultar historial de mantenimiento comercial
  Como emprendedor de un negocio de plantas, quiero consultar el historial de mantenimiento comercial 
  para revisar las acciones aplicadas a mis plantas. [cite: 43]

  Scenario: Historial con registros
    Given que existen acciones de mantenimiento registradas [cite: 43]
    When el emprendedor accede al historial de una planta comercial [cite: 43]
    Then la plataforma muestra las acciones realizadas en orden cronológico [cite: 43]
    And la plataforma muestra la fecha, responsable y descripción de cada acción [cite: 43]

  Example: Trazabilidad de operaciones comerciales
    |Acciones previas de poda y riego industrial documentadas|
    |Accede a la línea de tiempo de mantenimiento del lote de venta|
  Example: Output
    |Enseña una cuadrícula cronológica con indicación explícita de la fecha, operario a cargo y labor hecha|

  Scenario: Historial sin registros
    Given que una planta comercial no tiene acciones de mantenimiento registradas [cite: 43]
    When el emprendedor accede al historial de la planta [cite: 43]
    Then la plataforma muestra el mensaje “Aún no hay mantenimiento registrado” [cite: 43]
    And la plataforma muestra la opción para registrar una nueva acción [cite: 43]

  Example: Lote comercial nuevo sin intervenciones
    |Mercancía de reciente adquisición sin manipulación técnica guardada|
    |Accede a la línea de tiempo de mantenimiento del lote de venta|
  Example: Output
    |Arroja la interfaz limpia con el texto "Aún no hay mantenimiento registrado" con atajo para añadir acción|