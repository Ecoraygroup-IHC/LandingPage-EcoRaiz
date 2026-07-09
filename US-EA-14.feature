Feature: US-EA-13 - Buscar registros técnicos
  Como experto ambiental, quiero buscar registros técnicos 
  para encontrar rápidamente información específica de cultivos o microclimas. [cite: 36]

  Scenario: Búsqueda con resultados
    Given que existen registros técnicos almacenados en la plataforma [cite: 36]
    When el experto ambiental escribe una palabra clave en la barra de búsqueda [cite: 36]
    Then la plataforma muestra los registros que coinciden con la búsqueda [cite: 36]
    And la plataforma permite abrir el detalle del registro seleccionado [cite: 36]

  Example: Filtrado por término de laboratorio
    |Múltiples entradas indexadas en el gestor de conocimiento técnico|
    |Digita un término específico (ej: "Hidroponía") en el buscador técnico|
  Example: Output
    |Aísla y renderiza en pantalla las filas de registros coincidentes habilitando el ingreso a su detalle|

  Scenario: Búsqueda sin resultados
    Given que no existen registros asociados a la palabra clave ingresada [cite: 36]
    When el experto ambiental realiza la búsqueda [cite: 36]
    Then la plataforma muestra el mensaje “No se encontraron registros técnicos” [cite: 36]
    And la plataforma sugiere modificar la palabra clave [cite: 36]

  Example: Criterio erróneo o sin match
    |Escribe una cadena aleatoria sin relación botánica (ej: "QwErTy")|
    |Presiona enter o el botón lupa|
  Example: Output
    |Presenta un placeholder centrado con "No se encontraron registros técnicos" sugiriendo cambiar términos|