Feature: US-RU-10 - Visualizar resumen diario de cultivos
  Como residente urbano aficionado a las plantas, quiero visualizar un resumen diario de cultivos 
  para saber qué plantas requieren atención durante el día. [cite: 18]

  Scenario: Resumen diario con acciones pendientes
    Given que el residente urbano tiene recomendaciones activas para el día actual [cite: 18]
    When el residente urbano accede a la pantalla principal [cite: 18]
    Then la aplicación muestra un resumen de acciones pendientes [cite: 18]
    And la aplicación ordena las acciones según su nivel de urgencia [cite: 18]

  Example: Dashboard matutino con quehaceres
    |Pendientes del día listos en la cola del planificador|
    |Usuario inicia o abre la pantalla principal de la aplicación|
  Example: Output
    |Genera una sección compacta de quehaceres ordenando de forma prioritaria los casos más críticos|

  Scenario: Resumen diario sin alertas
    Given que las plantas del residente urbano se encuentran estables [cite: 18]
    When el residente urbano accede a la pantalla principal [cite: 18]
    Then la aplicación muestra el mensaje “Tus plantas se encuentran estables por ahora” [cite: 18]
    And la aplicación mantiene visible el acceso a la lista de plantas [cite: 18]

  Example: Dashboard matutino libre
    |Ningún vegetal bajo tutela demanda intervenciones el día de hoy|
    |Usuario ingresa a la pantalla principal|
  Example: Output
    |Despliega de manera amigable "Tus plantas se encuentran estables por ahora" garantizando los accesos comunes|