Feature: US-EA-01 - Registrar cultivos de investigación
  Como experto ambiental, quiero registrar cultivos de investigación 
  para monitorear especies o microclimas de manera organizada. [cite: 24]

  Scenario: Registro exitoso de cultivo técnico
    Given que el experto ambiental se encuentra en la pantalla “Agregar cultivo” [cite: 24]
    When el experto ambiental ingresa el nombre del cultivo, especie, ubicación y microclima asociado [cite: 24]
    And el experto ambiental selecciona el botón “Guardar cultivo” [cite: 24]
    Then la plataforma registra el cultivo técnico correctamente [cite: 24]
    And la plataforma muestra el cultivo dentro del panel de monitoreo [cite: 24]

  Example: Registro técnico exitoso
    |Experto en la interfaz avanzada de alta de cultivos|
    |Digita los parámetros experimentales e indica el ecosistema controlado|
    |Presiona el botón ejecutor "Guardar cultivo"|
  Example: Output
    |Da de alta el objeto científico en el sistema y lo renderiza en el panel de telemetría|

  Scenario: Registro con datos técnicos incompletos
    Given que el experto ambiental intenta registrar un cultivo sin indicar microclima asociado [cite: 24]
    When el experto ambiental selecciona the botón “Guardar cultivo” [cite: 24]
    Then la plataforma muestra el mensaje “Complete los datos técnicos requeridos” [cite: 24]
    And la plataforma evita registrar el cultivo incompleto [cite: 24]

  Example: Omisión de microclima
    |Formulario carente de la especificación ambiental obligatoria|
    |Presiona el botón ejecutor "Guardar cultivo"|
  Example: Output
    |Arroja "Complete los datos técnicos requeridos" anulando cualquier persistencia en backend|