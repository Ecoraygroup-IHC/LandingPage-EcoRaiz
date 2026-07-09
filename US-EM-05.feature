Feature: US-EM-04 - Visualizar plantas comerciales críticas
  Como emprendedor de un negocio de plantas, quiero visualizar plantas comerciales críticas 
  para atender primero los cultivos que pueden generar pérdidas. [cite: 41]

  Scenario: Priorización de plantas críticas
    Given existen plantas comerciales con estado crítico [cite: 41]
    When el emprendedor accede al panel principal del negocio [cite: 41]
    Then la plataforma muestra primero las plantas que requieren atención inmediata [cite: 41]
    And la plataforma destaca las plantas críticas con indicadores rojos [cite: 41]

  Example: Clasificación por urgencia financiera
    |Inventario mixto con algunos lotes sufriendo estrés hídrico extremo|
    |Abre el dashboard de operaciones de la empresa|
  Example: Output
    |Reordena la lista inyectando arriba los lotes en peligro inminente con tags rojos de advertencia|

  Scenario: Panel sin plantas críticas
    Given que no existen plantas comerciales con estado crítico [cite: 41]
    When el emprendedor accede al panel principal del negocio [cite: 41]
    Then la plataforma muestra el mensaje “No hay plantas críticas en este momento” [cite: 41]
    And la plataforma muestra las plantas en advertencia y saludables [cite: 41]

  Example: Gestión de rutina sin incidentes graves
    |Lotes de plantas operando en rangos óptimos o de cuidado leve|
    |Abre el dashboard de operaciones de la empresa|
  Example: Output
    |Despliega el banner de tranquilidad "No hay plantas críticas..." listando el stock regular con normalidad|