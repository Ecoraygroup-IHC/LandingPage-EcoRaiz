Feature: US-RU-02 - Editar datos de una planta registrada
  Como residente urbano aficionado a las plantas, quiero editar los datos de una planta registrada 
  para corregir información o actualizar su ubicación. [cite: 10]

  Scenario: Edición exitosa de datos
    Given que el residente urbano tiene una planta registrada en la plataforma [cite: 10]
    When el residente urbano modifica el nombre, ubicación o tipo de planta [cite: 10]
    And el residente urbano selecciona el botón “Guardar cambios” [cite: 10]
    Then la aplicación actualiza la información de la planta [cite: 10]
    And la aplicación muestra el mensaje “Datos de la planta actualizados” [cite: 10]

  Example: Editar datos existentes
    |Planta previamente guardada en la base de datos|
    |Modifica campos como el nombre o el ambiente donde se ubica|
    |Selecciona el botón "Guardar cambios"|
  Example: Output
    |Actualiza los campos en la base de datos y muestra "Datos de la planta actualizados"|

  Scenario: Cancelación de cambios
    Given que el residente urbano está editando una planta registrada [cite: 10]
    When el residente urbano selecciona la opción “Cancelar” [cite: 10]
    Then la aplicación descarta los cambios realizados [cite: 10]
    And la aplicación mantiene la información anterior de la planta [cite: 10]

  Example: Abortar edición
    |Usuario modificando datos en el formulario de edición|
    |Selecciona la opción "Cancelar"|
  Example: Output
    |Descarta modificaciones y preserva intactos los valores históricos|