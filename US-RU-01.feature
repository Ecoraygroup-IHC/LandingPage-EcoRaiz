Feature: US-RU-01 - Registrar una planta de interior
  Como residente urbano aficionado a las plantas, quiero registrar una planta de interior 
  para iniciar su monitoreo y recibir recomendaciones de cuidado. [cite: 9]

  Scenario: Registro exitoso de planta
    Given que el residente urbano se encuentra en la pantalla “Agregar planta” [cite: 9]
    When el residente urbano ingresa el nombre de la planta, especie aproximada y ubicación dentro del hogar [cite: 9]
    And el residente urbano selecciona el botón “Guardar planta” [cite: 9]
    Then la aplicación registra la planta en la cuenta del residente urbano [cite: 9]
    And la aplicación muestra la planta dentro de la lista de cultivos registrados [cite: 9]

  Example: Registrar nueva planta
    |Usuario en la pantalla "Agregar planta"|
    |Ingresa nombre, especie y locación dentro de la casa|
    |Selecciona el botón "Guardar planta"|
  Example: Output
    |Registra el espécimen y lo muestra reflejado en su lista de cultivos|

  Scenario: Registro sin especie definida
    Given que el residente urbano no conoce la especie exacta de la planta [cite: 9]
    When el residente urbano selecciona la opción “No sé la especie” [cite: 9]
    Then la aplicación permite registrar la planta con datos básicos [cite: 9]
    And la aplicación muestra recomendaciones generales hasta completar la información [cite: 9]

  Example: Especie desconocida
    |Usuario sin conocimiento exacto de la especie botánica|
    |Selecciona la opción alternativa "No sé la especie"|
  Example: Output
    |Permite el registro básico y despliega recomendaciones generales preventivas|

  Scenario: Campos obligatorios incompletos
    Given que el residente urbano se encuentra en la pantalla “Agregar planta” [cite: 9]
    When el residente urbano intenta guardar la planta sin ingresar un nombre [cite: 9]
    Then la aplicación muestra el mensaje “Ingrese un nombre para la planta” [cite: 9]
    And la aplicación evita guardar el registro incompleto [cite: 9]

  Example: Intento sin nombre de planta
    |Usuario en la pantalla "Agregar planta"|
    |Intenta guardar la información dejando el campo del nombre vacío|
  Example: Output
    |Muestra la alerta "Ingrese un nombre para la planta" y cancela la operación|