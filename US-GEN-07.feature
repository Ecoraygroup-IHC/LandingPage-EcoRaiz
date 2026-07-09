Feature: US-GEN-06 - Editar datos del perfil personal
  Como usuario de EcoRaíz, quiero editar mis datos de perfil 
  para mantener actualizada mi información dentro de la plataforma. [cite: 6]

  Scenario: Actualización exitosa de perfil
    Given que el usuario se encuentra en la sección “Mi perfil” [cite: 6]
    When el usuario modifica su nombre, foto o tipo de perfil permitido [cite: 6]
    And el usuario selecciona el botón “Guardar cambios” [cite: 6]
    Then la aplicación actualiza la información del perfil [cite: 6]
    And la aplicación muestra el mensaje “Perfil actualizado correctamente” [cite: 6]

  Example: Actualizar datos
    |Usuario en sección "Mi perfil"|
    |Modifica su nombre de usuario o foto de perfil|
    |Selecciona el botón "Guardar cambios"|
  Example: Output
    |Actualiza los datos del perfil y muestra "Perfil actualizado correctamente"|

  Scenario: Formato de correo inválido
    Given que el usuario se encuentra editando su perfil [cite: 6]
    When el usuario ingresa un correo con formato inválido [cite: 6]
    Then la aplicación muestra el mensaje “Ingrese un correo válido” [cite: 6]
    And la aplicación evita guardar el cambio hasta corregir el dato [cite: 6]

  Example: Correo mal estructurado
    |Usuario editando el perfil|
    |Ingresa una dirección de correo sin el símbolo @ o dominio|
  Example: Output
    |Muestra el mensaje "Ingrese un correo válido" y bloquea el guardado|