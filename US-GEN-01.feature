Feature: US-GEN-01 - Registrar una cuenta de usuario
  Como usuario de EcoRaíz, quiero registrar una cuenta 
  para acceder a las funciones de monitoreo, recomendaciones y seguimiento de cultivos.

  Scenario: Registro exitoso de cuenta
    Given que el usuario se encuentra en la pantalla de registro de EcoRaíz
    And el usuario cuenta con conexión a internet
    When el usuario ingresa su nombre, correo electrónico, contraseña y tipo de perfil
    And el usuario selecciona el botón “Registrarse”
    Then la aplicación crea la cuenta del usuario
    And la aplicación muestra el mensaje “Cuenta creada correctamente”

  Example: Registro exitoso
    |Usuario en pantalla de registro con conexión activa|
    |Ingresa nombre, correo, contraseña y tipo de perfil válido|
    |Selecciona el botón "Registrarse"|
  Example: Output
    |La aplicación crea la cuenta y muestra "Cuenta creada correctamente"|

  Scenario: Registro con correo ya utilizado
    Given que el usuario se encuentra en la pantalla de registro de EcoRaíz
    And el correo ingresado ya pertenece a una cuenta existente
    When el usuario selecciona el botón “Registrarse”
    Then la aplicación muestra el mensaje “El correo ya se encuentra registrado”
    And la aplicación mantiene los datos ingresados para que el usuario pueda corregirlos

  Example: Correo duplicado
    |Usuario en pantalla de registro|
    |Ingresa un correo electrónico ya existente en el sistema|
    |Selecciona el botón "Registrarse"|
  Example: Output
    |Muestra el mensaje "El correo ya se encuentra registrado" y mantiene los datos|

  Scenario: Registro con campos incompletos
    Given que el usuario se encuentra en la pantalla de registro de EcoRaíz
    When el usuario intenta registrarse sin completar los campos obligatorios
    Then la aplicación muestra los campos pendientes de completar
    And la aplicación evita crear una cuenta incompleta

  Example: Campos vacíos
    |Usuario en pantalla de registro|
    |Intenta registrarse dejando campos obligatorios vacíos|
  Example: Output
    |Muestra campos pendientes y evita la creación de la cuenta|