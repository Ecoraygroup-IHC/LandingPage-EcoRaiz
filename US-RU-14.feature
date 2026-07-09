Feature: US-RU-14 - Eliminar una planta registrada
  Como residente urbano aficionado a las plantas, quiero eliminar una planta registrada 
  para mantener organizada mi lista de cultivos. [cite: 22]

  Scenario: Confirmación de eliminación
    Given que el residente urbano selecciona una planta registrada [cite: 22]
    When el residente urbano presiona el botón “Eliminar” [cite: 22]
    Then la aplicación muestra una ventana de confirmación [cite: 22]
    And la aplicación permite confirmar o cancelar la eliminación [cite: 22]

  Example: Abrir diálogo de borrado
    |Ficha de una planta específica en pantalla|
    |Usuario pulsa sobre el botón o icono de tacho "Eliminar"|
  Example: Output
    |Interrumpe con un modal pop-up que interroga al usuario si desea continuar o declinar el proceso|

  Scenario: Eliminación confirmada
    Given que la aplicación muestra la ventana de confirmación [cite: 22]
    When el residente urbano confirma la eliminación [cite: 22]
    Then la aplicación elimina la planta de la lista de cultivos [cite: 22]
    And la aplicación muestra el mensaje “Planta eliminada correctamente” [cite: 22]

  Example: Ejecución del borrado
    |Ventana de confirmación activa e interactiva en primer plano|
    |El usuario hace clic firme en el botón secundario "Confirmar"|
  Example: Output
    |Remueve permanentemente el registro, refresca el listado general y enseña un aviso de éxito|