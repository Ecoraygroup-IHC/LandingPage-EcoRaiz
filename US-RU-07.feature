Feature: US-RU-07 - Marcar una recomendación como realizada
  Como residente urbano aficionado a las plantas, quiero marcar una recomendación como realizada 
  para llevar control de las acciones aplicadas a mis cultivos. [cite: 15]

  Scenario: Registro de recomendación completada
    Given que el residente urbano visualiza una recomendación pendiente [cite: 15]
    When el residente urbano selecciona la opción “Realizado” [cite: 15]
    Then la aplicación registra la acción como completada [cite: 15]
    And la aplicación guarda la fecha de realización en el historial de la planta [cite: 15]

  Example: Confirmar tarea ejecutada
    |Sugerencia abierta y sin chequear en el panel|
    |Usuario marca o selecciona la casilla o botón "Realizado"|
  Example: Output
    |Modifica el estatus interno de la tarea y estampa el timestamp en la bitácora histórica|

  Scenario: Confirmación visual de acción completada
    Given que el residente urbano marcó una recomendación como realizada [cite: 15]
    When la aplicación actualiza la pantalla [cite: 15]
    Then la aplicación cambia el estado de la recomendación a “Completada” [cite: 15]
    And la aplicación muestra un mensaje de confirmación para evitar dudas del usuario [cite: 15]

  Example: Feedback gráfico inmediato
    |Cambio de estado procesado por el backend|
    |La interfaz refresca automáticamente el contenido|
  Example: Output
    |Transforma visualmente el ítem a un estado "Completada" y arroja un banner breve de confirmación|