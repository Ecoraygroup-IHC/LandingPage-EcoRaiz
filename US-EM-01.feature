Feature: US-EA-14 - Configurar vista de análisis técnico
  Como experto ambiental, quiero configurar la vista de análisis técnico 
  para adaptar la presentación de datos a mis necesidades de trabajo. [cite: 37]

  Scenario: Cambio de vista de análisis
    Given que el experto ambiental se encuentra en el módulo de análisis [cite: 37]
    When el experto ambiental selecciona una vista de tabla, gráfico o comparación [cite: 37]
    Then la plataforma cambia la presentación de los datos [cite: 37]
    And la plataforma mantiene la configuración seleccionada durante la sesión [cite: 37]

  Example: Cambiar layout a matriz de datos
    |Módulo de analítica cargado inicialmente en modo gráfico|
    |Selecciona la pestaña o vista alternativa "Tabla de datos"|
  Example: Output
    |Re-ordena el DOM ocultando gráficos y mostrando filas tabulares, persistiendo el layout en la sesión|

  Scenario: Restauración de vista predeterminada
    Given que el experto ambiental modificó la vista de análisis [cite: 37]
    When el experto ambiental selecciona la opción “Restaurar vista” [cite: 37]
    Then la plataforma vuelve a la configuración visual predeterminada [cite: 37]
    And la plataforma muestra el mensaje “Vista restaurada correctamente” [cite: 37]

  Example: Resetear organización de interfaz
    |Interfaz personalizada con múltiples cambios de paneles|
    |Presiona el control general de configuración "Restaurar vista"|
  Example: Output
    |Vuelve instantáneamente al orden de fábrica arrojando el aviso "Vista restaurada correctamente"|