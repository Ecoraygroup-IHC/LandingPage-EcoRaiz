Feature: US-GEN-08 - Visualizar guía inicial del sistema
  Como usuario de EcoRaíz, quiero visualizar una guía inicial 
  para comprender rápidamente cómo usar las funciones principales de la plataforma. [cite: 8]

  Scenario: Guía inicial para nuevo usuario
    Given que el usuario inicia sesión por primera vez en EcoRaíz [cite: 8]
    When la aplicación carga el dashboard inicial [cite: 8]
    Then la aplicación muestra una guía breve sobre registro de cultivos, alertas y recomendaciones [cite: 8]
    And la aplicación permite avanzar o saltar la guía [cite: 8]

  Example: Primer ingreso
    |Usuario inicia sesión por primera vez en la app|
    |La aplicación carga el dashboard principal|
  Example: Output
    |Despliega una guía breve e interactiva permitiendo avanzar o saltar el tutorial|

  Scenario: Acceso manual a la guía
    Given que el usuario se encuentra usando la plataforma [cite: 8]
    When el usuario selecciona la opción “Ayuda” [cite: 8]
    Then la aplicación muestra nuevamente la guía inicial del sistema [cite: 8]
    And la aplicación organiza la ayuda por módulos principales [cite: 8]

  Example: Consulta manual de ayuda
    |Usuario navegando en el sistema|
    |Selecciona la opción del menú "Ayuda"|
  Example: Output
    |Muestra la guía inicial organizada de manera modular por temas principales|