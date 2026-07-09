Feature: US-GEN-03 - Recuperar contraseña de acceso
  Como usuario de EcoRaíz, quiero recuperar mi contraseña 
  para volver a ingresar a la plataforma si olvido mis credenciales. [cite: 3]

  Scenario: Solicitud de recuperación enviada
    Given que el usuario se encuentra en la pantalla “Recuperar contraseña” [cite: 3]
    When el usuario ingresa un correo asociado a una cuenta existente [cite: 3]
    And el usuario selecciona el botón “Enviar instrucciones” [cite: 3]
    Then la aplicación muestra el mensaje “Se enviaron instrucciones a tu correo” [cite: 3]
    And la aplicación permite que el usuario regrese al inicio de sesión [cite: 3]

  Example: Recuperación válida
    |Usuario en pantalla de recuperación|
    |Ingresa correo asociado a cuenta existente|
    |Selecciona el botón "Enviar instrucciones"|
  Example: Output
    |Muestra "Se enviaron instrucciones a tu correo" y permite regresar al login|

  Scenario: Correo no registrado
    Given que el usuario se encuentra en la pantalla “Recuperar contraseña” [cite: 3]
    When el usuario ingresa un correo que no pertenece a ninguna cuenta [cite: 3]
    Then la aplicación muestra el mensaje “No se encontró una cuenta asociada a este correo” [cite: 3]
    And la aplicación sugiere verificar el correo o crear una cuenta nueva [cite: 3]

  Example: Correo inválido
    |Usuario en pantalla de recuperación|
    |Ingresa correo no registrado en el sistema|
  Example: Output
    |Muestra "No se encontró una cuenta asociada a este correo" y sugiere verificar o registrarse|