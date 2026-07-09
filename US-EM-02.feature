Feature: US-EM-01 - Registrar plantas comerciales en inventario
  Como emprendedor de un negocio de plantas, quiero registrar plantas comerciales en inventario 
  para controlar los cultivos disponibles para venta, alquiler o mantenimiento. [cite: 38]

  Scenario: Registro exitoso de planta comercial
    Given que el emprendedor se encuentra en la pantalla “Agregar planta comercial” [cite: 38]
    When el emprendedor ingresa el nombre, especie, cantidad y valor referencial de la planta [cite: 38]
    And el emprendedor selecciona el botón “Guardar” [cite: 38]
    Then la plataforma registra la planta dentro del inventario vivo [cite: 38]
    And la plataforma muestra la planta en el panel comercial [cite: 38]

  Example: Ingreso de stock comercial
    |Usuario en interfaz comercial de alta de mercancía|
    |Coloca datos comerciales, costo unitario y un lote de 50 unidades|
    |Presiona el botón de confirmación "Guardar"|
  Example: Output
    |Suma las unidades al balance contable del inventario vivo y lo muestra en el panel de stock|

  Scenario: Cantidad inválida
    Given que el emprendedor ingresa una cantidad menor o igual a cero [cite: 38]
    When el emprendedor intenta guardar la planta comercial [cite: 38]
    Then la plataforma muestra el mensaje “Ingrese una cantidad válida” [cite: 38]
    And la plataforma evita registrar el cultivo comercial [cite: 38]

  Example: Error de digitación en cantidad
    |Formulario completado pero con un valor de cantidad negativo (ej: -5)|
    |Presiona el botón de confirmación "Guardar"|
  Example: Output
    |Frena la transacción enseñando en pantalla el warning "Ingrese una cantidad válida"|