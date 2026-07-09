Feature: US-GEN-02 - Iniciar sesión en la plataforma
  Como usuario de EcoRaíz, quiero iniciar sesión 
  para acceder a mi información personalizada de cultivos y alertas. [cite: 2]

  Scenario: Inicio de sesión exitoso
    Given que el usuario se encuentra en la pantalla de inicio de sesión [cite: 2]
    And el usuario tiene una cuenta registrada en EcoRaíz [cite: 2]
    When el usuario ingresa su correo y contraseña correctos [cite: 2]
    And el usuario selecciona el botón “Iniciar sesión” [cite: 2]
    Then la aplicación permite el acceso a la cuenta del usuario [cite: 2]
    And la aplicación redirige al usuario al dashboard correspondiente a su perfil [cite: 2]

  Example: Login exitoso
    |Usuario en pantalla de inicio de sesión con cuenta válida|
    |Ingresa correo y contraseña correctos|
    |Selecciona el botón "Iniciar sesión"|
  Example: Output
    |Permite acceso y redirige al dashboard de su perfil|

  Scenario: Credenciales incorrectas
    Given que el usuario se encuentra en la pantalla de inicio de sesión [cite: 2]
    When el usuario ingresa un correo o contraseña incorrectos [cite: 2]
    And el usuario selecciona el botón “Iniciar sesión” [cite: 2]
    Then la aplicación muestra el mensaje “Correo o contraseña incorrectos” [cite: 2]
    And la aplicación permite que el usuario vuelva a intentar el acceso [cite: 2]

  Example: Credenciales erróneas
    |Usuario en pantalla de inicio de sesión|
    |Ingresa datos incorrectos de acceso|
    |Selecciona el botón "Iniciar sesión"|
  Example: Output
    |Muestra "Correo o contraseña incorrectos" y permite reintentar|

  Scenario: Usuario no registrado
    Given que el usuario se encuentra en la pantalla de inicio de sesión [cite: 2]
    When el usuario ingresa un correo que no pertenece a ninguna cuenta registrada [cite: 2]
    Then la aplicación muestra el mensaje “La cuenta ingresada no existe” [cite: 2]
    And la aplicación sugiere registrarse en EcoRaíz [cite: 2]

  Example: Cuenta inexistente
    |Usuario en pantalla de inicio de sesión|
    |Ingresa un correo electrónico no registrado|
  Example: Output
    |Muestra "La cuenta ingresada no existe" y sugiere registrarse|

  Scenario: Campos obligatorios vacíos
    Given que el usuario se encuentra en la pantalla de inicio de sesión [cite: 2]
    When el usuario intenta iniciar sesión sin completar el correo o contraseña [cite: 2]
    Then la aplicación muestra mensajes de validación en los campos obligatorios [cite: 2]
    And la aplicación evita el acceso al sistema [cite: 2]

  Example: Campos vacíos en login
    |Usuario en pantalla de inicio de sesión|
    |Intenta acceder con campos de correo o contraseña vacíos|
  Example: Output
    |Muestra mensajes de validación y bloquea el acceso|