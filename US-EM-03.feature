Feature: US-EM-02 - Actualizar disponibilidad comercial de una planta
  Como emprendedor de un negocio de plantas, quiero actualizar la disponibilidad comercial de una planta 
  para diferenciar plantas listas para venta de plantas en recuperación. [cite: 39]

  Scenario: Cambio de disponibilidad comercial
    Given que el emprendedor tiene una planta comercial registrada [cite: 39]
    When el emprendedor cambia su disponibilidad a “Lista para venta”, “Reservada” o “En recuperación” [cite: 39]
    Then la plataforma actualiza la disponibilidad comercial de la planta [cite: 39]
    And la plataforma muestra el nuevo estado dentro del inventario vivo [cite: 39]

  Example: Mover producto a stock disponible
    |Producto agrícola catalogado previamente en cuarentena|
    |Cambia el selector de estado de venta a la opción "Lista para venta"|
  Example: Output
    |Modifica la etiqueta del artículo y refresca el catálogo comercial online|

  Scenario: Cambio a recuperación por alerta activa
    Given que una planta comercial tiene una alerta crítica activa [cite: 39]
    When el emprendedor intenta marcarla como “Lista para venta” [cite: 39]
    Then la plataforma muestra una advertencia sobre su estado crítico [cite: 39]
    And la plataforma permite confirmar el cambio o mantenerla en recuperación [cite: 39]

  Example: Forzar venta de producto enfermo
    |Lote comercial afectado por plaga (alerta crítica roja activa)|
    |Intenta arbitrariamente cambiar el estado a "Lista para venta"|
  Example: Output
    |Interrumpe con un modal restrictivo notificando el peligro y requiriendo una doble confirmación|