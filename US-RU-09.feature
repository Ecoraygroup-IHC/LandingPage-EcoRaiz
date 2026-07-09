Feature: US-RU-09 - Consultar un calendario de cuidados
  Como residente urbano aficionado a las plantas, quiero consultar un calendario de cuidados 
  para organizar las acciones recomendadas durante la semana. [cite: 17]

  Scenario: Calendario con tareas pendientes
    Given que el residente urbano tiene recomendaciones programadas durante la semana [cite: 17]
    When el residente urbano accede al calendario de cuidados [cite: 17]
    Then la aplicación muestra las tareas organizadas por día [cite: 17]
    And la aplicación muestra la planta asociada a cada tarea [cite: 17]

  Example: Ver agenda semanal
    |Cronograma automatizado con actividades planificadas para los próximos días|
    |Usuario pulsa sobre la opción de ver el Calendario de cuidados|
  Example: Output
    |Renderiza un almanaque semanal distribuyendo las tareas por bloques diarios adjuntando el nombre de la planta|

  Scenario: Día sin tareas pendientes
    Given que un día seleccionado no tiene tareas programadas [cite: 17]
    When el residente urbano consulta ese día en el calendario [cite: 17]
    Then la aplicación muestra el mensaje “No hay cuidados programados para este día” [cite: 17]
    And la aplicación permite volver a la vista semanal [cite: 17]

  Example: Fecha libre
    |Usuario selecciona en la cuadrícula un día sin requerimientos operativos|
    |Visualiza el desglose específico de esa fecha|
  Example: Output
    |Muestra "No hay cuidados programados para este día" ofreciendo un control interactivo de retorno|

  Scenario: Acción de cuidado completada desde el calendario
    Given que el residente urbano visualiza una tarea pendiente dentro del calendario [cite: 17]
    When el residente urbano selecciona la opción “Marcar como realizada” [cite: 17]
    Then la aplicación actualiza el estado de la tarea [cite: 17]
    And la aplicación refleja el cambio en el historial de cuidados [cite: 17]

  Example: Completar desde agenda
    |Tarea agendada visible en la interfaz del calendario|
    |Usuario interactúa directamente con el botón rápido "Marcar como realizada"|
  Example: Output
    |Tacha la tarea en el calendario, actualiza su estatus interno y la inyecta en el historial general|