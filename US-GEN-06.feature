Feature: US-GEN-05 - Configurar preferencias de notificación
  Como usuario de EcoRaíz, quiero configurar mis preferencias de notificación 
  para recibir alertas de acuerdo con mi disponibilidad y necesidades. [cite: 5]

  Scenario: Configuración de preferencias guardada
    Given que el usuario se encuentra en la sección de configuración de notificaciones [cite: 5]
    When el usuario selecciona los tipos de alertas que desea recibir [cite: 5]
    And el usuario presiona el botón “Guardar preferencias” [cite: 5]
    Then la aplicación guarda la configuración seleccionada [cite: 5]
    And la aplicación muestra el mensaje “Preferencias actualizadas” [cite: 5]

  Example: Guardar alertas
    |Usuario en la sección de configuración de notificaciones|
    |Selecciona tipos de alertas específicas|
    |Presiona el botón "Guardar preferencias"|
  Example: Output
    |Guarda la configuración y muestra el mensaje "Preferencias actualizadas"|

  Scenario: Notificaciones desactivadas
    Given que el usuario se encuentra en la sección de configuración de notificaciones [cite: 5]
    When el usuario desactiva todas las notificaciones [cite: 5]
    Then la aplicación muestra una advertencia sobre posibles alertas no recibidas [cite: 5]
    And la aplicación permite confirmar o cancelar la desactivación [cite: 5]

  Example: Desactivar todo
    |Usuario en la sección de notificaciones|
    |Desmarca todas las opciones de alertas|
  Example: Output
    |Muestra advertencia sobre alertas no recibidas brindando opción de confirmar o cancelar|