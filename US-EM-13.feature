Feature: US-EM-13 - Visualizar resumen semanal del negocio
  Como emprendedor de un negocio de plantas, quiero visualizar un resumen semanal del negocio 
  para evaluar el mantenimiento y estado general de mi inventario vivo. [cite: 50]

  Scenario: Resumen semanal disponible
    Given existen registros de la semana en curso [cite: 50]
    When el emprendedor accede al resumen semanal [cite: 50]
    Then la plataforma muestra cantidad de plantas atendidas, alertas generadas y acciones correctivas realizadas [cite: 50]
    And la plataforma muestra una conclusión general del estado del inventario [cite: 50]

  Example: Balance semanal operativo estándar
    |Movimientos, riegos e incidencias registrados de lunes a viernes en los almacenes|
    |Abre el módulo analítico de control gerencial "Resumen Semanal"|
  Example: Output
    |Pinta un panel gerencial con indicadores numéricos de atención y un párrafo automatizado de conclusión|

  Scenario: Semana sin registros suficientes
    Given que no existen registros durante la semana en curso [cite: 50]
    When el emprendedor accede al resumen semanal [cite: 50]
    Then la plataforma muestra el mensaje “No existen registros suficientes para generar el resumen semanal” [cite: 50]
    And la plataforma sugiere registrar acciones de mantenimiento [cite: 50]

  Example: Cero actividad en la semana comercial
    |Días de inactividad operativa o fallas en el cargado de bitácoras de mantenimiento|
    |Abre el módulo analítico de control gerencial "Resumen Semanal"|
  Example: Output
    |Muestra el aviso informativo "No existen registros suficientes..." con tips para documentar tareas|

  Scenario: Resumen semanal con alertas críticas
    Given que durante la semana se registraron alertas críticas [cite: 50]
    When el emprendedor accede al resumen semanal [cite: 50]
    Then la plataforma muestra un resumen de incidencias críticas [cite: 50]
    And la plataforma identifica las plantas más afectadas de la semana [cite: 50]

  Example: Balance de semana de contingencia
    |Ocurrencia de picos severos de calor que dispararon alertas de muerte de stock días atrás|
    |Abre el módulo analítico de control gerencial "Resumen Semanal"|
  Example: Output
    |Genera un reporte especial de daños aislando y listando las variantes botánicas que sufrieron más estrés|