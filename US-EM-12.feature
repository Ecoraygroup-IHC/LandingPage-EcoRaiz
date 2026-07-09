Feature: US-EM-11 - Exportar reporte comercial de estado
  Como emprendedor de un negocio de plantas, quiero exportar un reporte comercial de estado 
  para revisar o compartir la situación de mi inventario vivo. [cite: 48]

  Scenario: Exportación de reporte comercial
    Given que el emprendedor tiene plantas comerciales registradas [cite: 48]
    When el emprendedor selecciona la opción “Exportar reporte comercial” [cite: 48]
    Then la plataforma genera un reporte con estados, alertas y acciones correctivas [cite: 48]
    And la plataforma permite descargar el reporte en formato PDF [cite: 48]

  Example: Descarga de estado de activos corporativos
    |Bitácora comercial activa con información consolidada de mermas y ventas|
    |Hace clic sobre el control "Exportar reporte comercial"|
  Example: Output
    |Compila y descarga en segundo plano un PDF estructurado con balances de salud y acciones operativas|

  Scenario: Reporte filtrado por estado
    Given que el emprendedor aplicó un filtro por estado crítico o en recuperación [cite: 48]
    When el emprendedor exporta el reporte comercial [cite: 48]
    Then la plataforma genera el reporte únicamente con los cultivos filtrados [cite: 48]
    And la plataforma muestra el criterio de filtro dentro del reporte [cite: 48]

  Example: Descarga de reporte de bajas selectivo
    |Filtro de visualización configurado solo para ver productos "En recuperación"|
    |Ejecuta el control de descarga de reporte comercial|
  Example: Output
    |Genera el documento de auditoría acotando el contenido solo a ese segmento y plasmando el tag de filtro usado|