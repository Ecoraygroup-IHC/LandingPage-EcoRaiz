Feature: US-RU-12 - Buscar una planta registrada
  Como residente urbano aficionado a las plantas, quiero buscar una planta registrada 
  para acceder rápidamente a su información. [cite: 20]

  Scenario: Búsqueda con coincidencias
    Given que el residente urbano tiene varias plantas registradas [cite: 20]
    When el residente urbano escribe el nombre de una planta en la barra de búsqueda [cite: 20]
    Then la aplicación muestra las plantas que coinciden con el texto ingresado [cite: 20]
    And la aplicación permite seleccionar una planta para ver su detalle [cite: 20]

  Example: Localizar cultivo por caracteres
    |Inventario variado preexistente en la cuenta|
    |Escribe caracteres coincidentes (ej: "Ficus") en la caja de texto|
  Example: Output
    |Filtra dinámicamente y enseña las tarjetas que coincidan, permitiendo clickear para ir al detalle|

  Scenario: Búsqueda sin coincidencias
    Given que no existe una planta registrada con el texto ingresado [cite: 20]
    When el residente urbano realiza la búsqueda [cite: 20]
    Then la aplicación muestra el mensaje “No se encontraron plantas registradas” [cite: 20]
    And la aplicación permite borrar la búsqueda para volver a la lista completa [cite: 20]

  Example: Error de tipeo o elemento inexistente
    |Texto ingresado no empareja con ningún registro real (ej: "XyZ")|
    |Ejecuta o confirma el criterio en la barra|
  Example: Output
    |Proyecta el mensaje "No se encontraron plantas registradas" y limpia el input con un botón de reset|