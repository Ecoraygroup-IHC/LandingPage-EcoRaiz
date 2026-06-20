const profileLabels = {
  resident: 'Residente urbano',
  expert: 'Experto ambiental / Educador',
  entrepreneur: 'Emprendedor de plantas'
};

const profileConfig = {
  resident: {
    icon: '🏠',
    title: 'Dashboard de residente urbano',
    kicker: 'US-RU · Cuidado de plantas de interior',
    segment: 'Segmento 1: Residentes urbanos',
    welcomeTitle: 'Cuida tus plantas con alertas simples y recomendaciones accionables',
    welcomeCopy: 'Visualiza el estado de cada planta, revisa humedad, luz y temperatura, y marca cuidados como realizados.',
    addLabel: 'Agregar planta',
    itemsTitle: 'Mis plantas de interior',
    itemsEyebrow: 'US-RU-01 / US-RU-03',
    chartTitle: 'Evolución ambiental simplificada',
    detailTitle: 'Calendario y estado del día',
    detailEyebrow: 'US-RU-09 / US-RU-10'
  },
  expert: {
    icon: '🔬',
    title: 'Dashboard técnico para experto ambiental',
    kicker: 'US-EA · Monitoreo y análisis ambiental',
    segment: 'Segmento 2: Expertos y educadores',
    welcomeTitle: 'Monitorea microclimas, variables detalladas y alertas técnicas',
    welcomeCopy: 'Analiza cultivos de investigación con datos simulados, gráficos históricos, comparaciones y reportes.',
    addLabel: 'Agregar cultivo técnico',
    itemsTitle: 'Cultivos de investigación',
    itemsEyebrow: 'US-EA-01 / US-EA-02',
    chartTitle: 'Gráficos históricos de variables',
    detailTitle: 'Comparación de microclimas',
    detailEyebrow: 'US-EA-03 / US-EA-04'
  },
  entrepreneur: {
    icon: '🪴',
    title: 'Dashboard comercial para emprendedor',
    kicker: 'US-EM · Inventario vivo y riesgos',
    segment: 'Segmento 3: Emprendedores de plantas',
    welcomeTitle: 'Supervisa tu inventario vivo y reduce pérdidas comerciales',
    welcomeCopy: 'Controla plantas listas para venta, cultivos críticos, acciones correctivas y pérdidas potenciales.',
    addLabel: 'Agregar planta comercial',
    itemsTitle: 'Inventario vivo comercial',
    itemsEyebrow: 'US-EM-01 / US-EM-07',
    chartTitle: 'Riesgo comercial semanal',
    detailTitle: 'Pérdidas potenciales e inventario',
    detailEyebrow: 'US-EM-03 / US-EM-08'
  }
};

const statusLabels = {
  healthy: 'Saludable',
  warning: 'Advertencia',
  critical: 'Crítico',
  resolved: 'Atendida'
};

const severityLabels = {
  healthy: 'Saludable',
  warning: 'Preventiva',
  critical: 'Crítica'
};

const defaultData = {
  resident: {
    items: [
      { id: 'ru-1', name: 'Albahaca', species: 'Ocimum basilicum', location: 'Ventana de cocina', status: 'healthy', humidity: 58, temp: 24, light: 720, recommendation: 'No hay acciones urgentes por ahora.' },
      { id: 'ru-2', name: 'Helecho', species: 'Nephrolepis', location: 'Sala', status: 'warning', humidity: 34, temp: 25, light: 430, recommendation: 'Agregar agua hoy y alejar de luz directa.' },
      { id: 'ru-3', name: 'Suculenta', species: 'Echeveria', location: 'Escritorio', status: 'critical', humidity: 76, temp: 29, light: 940, recommendation: 'Suspender riego y mejorar ventilación.' }
    ],
    alerts: [
      { id: 'al-ru-1', itemId: 'ru-2', severity: 'warning', title: 'Humedad baja en Helecho', message: 'El sustrato está por debajo del rango recomendado.', action: 'Agregar agua hoy.', resolved: false },
      { id: 'al-ru-2', itemId: 'ru-3', severity: 'critical', title: 'Exceso de humedad en Suculenta', message: 'Puede generar deterioro de raíz si no se corrige.', action: 'Suspender riego por 24 horas.', resolved: false }
    ],
    actions: [
      { id: 'ac-ru-1', itemId: 'ru-2', text: 'Agregar agua hoy al Helecho.', done: false },
      { id: 'ac-ru-2', itemId: 'ru-3', text: 'Mover Suculenta a una zona ventilada.', done: false }
    ],
    charts: {
      humidity: [55, 53, 49, 46, 42, 38, 36],
      temp: [23, 24, 24, 25, 26, 27, 26],
      light: [600, 620, 580, 640, 680, 720, 700]
    }
  },
  expert: {
    items: [
      { id: 'ea-1', name: 'Microclima A', species: 'Cactus experimental', location: 'Invernadero 1', microclimate: 'Seco controlado', status: 'healthy', humidity: 42, temp: 26, light: 820, ph: 6.4, recommendation: 'Mantener exposición actual.' },
      { id: 'ea-2', name: 'Microclima B', species: 'Hortalizas', location: 'Aula laboratorio', microclimate: 'Húmedo educativo', status: 'warning', humidity: 69, temp: 28, light: 610, ph: 6.8, recommendation: 'Revisar ventilación durante la tarde.' },
      { id: 'ea-3', name: 'Microclima C', species: 'Hierbas aromáticas', location: 'Módulo de prueba', microclimate: 'Mixto', status: 'critical', humidity: 31, temp: 30, light: 500, ph: 5.9, recommendation: 'Activar riego y registrar observación técnica.' }
    ],
    alerts: [
      { id: 'al-ea-1', itemId: 'ea-2', severity: 'warning', title: 'Temperatura elevada en Microclima B', message: 'La temperatura superó el rango definido para hortalizas.', action: 'Revisar ventilación y registrar observación.', resolved: false },
      { id: 'al-ea-2', itemId: 'ea-3', severity: 'critical', title: 'Humedad crítica en Microclima C', message: 'Los valores pueden afectar la supervivencia del cultivo.', action: 'Activar riego y comparar con registros previos.', resolved: false }
    ],
    actions: [
      { id: 'ac-ea-1', itemId: 'ea-2', text: 'Registrar observación técnica sobre temperatura.', done: false },
      { id: 'ac-ea-2', itemId: 'ea-3', text: 'Comparar humedad con el periodo anterior.', done: false }
    ],
    charts: {
      humidity: [44, 45, 43, 47, 41, 38, 36],
      temp: [24, 25, 25, 26, 27, 29, 28],
      light: [520, 600, 610, 680, 700, 740, 760]
    }
  },
  entrepreneur: {
    items: [
      { id: 'em-1', name: 'Lote Helechos', species: 'Helechos', location: 'Zona húmeda', status: 'critical', quantity: 18, value: 25, availability: 'En recuperación', humidity: 29, temp: 27, light: 420, recommendation: 'Aumentar humedad y separar plantas deterioradas.' },
      { id: 'em-2', name: 'Lote Suculentas', species: 'Suculentas', location: 'Mesa de exhibición', status: 'healthy', quantity: 40, value: 18, availability: 'Lista para venta', humidity: 48, temp: 25, light: 880, recommendation: 'Mantener condiciones actuales.' },
      { id: 'em-3', name: 'Lote Lirios', species: 'Lirios', location: 'Almacén temporal', status: 'warning', quantity: 12, value: 35, availability: 'Reservada', humidity: 52, temp: 30, light: 760, recommendation: 'Bajar exposición solar y revisar hojas.' }
    ],
    alerts: [
      { id: 'al-em-1', itemId: 'em-1', severity: 'critical', title: 'Riesgo comercial en Helechos', message: '18 unidades pueden deteriorarse por baja humedad.', action: 'Atender humedad y registrar acción correctiva.', resolved: false },
      { id: 'al-em-2', itemId: 'em-3', severity: 'warning', title: 'Lirios con exposición elevada', message: 'El lote puede perder calidad comercial.', action: 'Mover a zona con menor luz.', resolved: false }
    ],
    actions: [
      { id: 'ac-em-1', itemId: 'em-1', text: 'Registrar acción correctiva para Helechos.', done: false },
      { id: 'ac-em-2', itemId: 'em-3', text: 'Actualizar disponibilidad comercial de Lirios.', done: false }
    ],
    charts: {
      humidity: [61, 58, 52, 48, 42, 36, 31],
      temp: [25, 26, 27, 28, 29, 30, 29],
      light: [680, 720, 740, 780, 810, 850, 820]
    }
  }
};

const dom = {
  title: document.querySelector('#dashboard-title'),
  profileKicker: document.querySelector('#profile-kicker'),
  profilePill: document.querySelector('#profile-pill'),
  segmentLabel: document.querySelector('#segment-label'),
  welcomeTitle: document.querySelector('#welcome-title'),
  welcomeCopy: document.querySelector('#welcome-copy'),
  openAddModal: document.querySelector('#open-add-modal'),
  simulateAlert: document.querySelector('#simulate-alert'),
  kpiGrid: document.querySelector('#kpi-grid'),
  alertCount: document.querySelector('#alert-count'),
  alertList: document.querySelector('#alert-list'),
  actionList: document.querySelector('#action-list'),
  itemGrid: document.querySelector('#item-grid'),
  itemsTitle: document.querySelector('#items-title'),
  itemsEyebrow: document.querySelector('#items-eyebrow'),
  searchInput: document.querySelector('#search-input'),
  statusFilter: document.querySelector('#status-filter'),
  chartTitle: document.querySelector('#chart-title'),
  chartTabs: document.querySelector('#chart-tabs'),
  lineChart: document.querySelector('#line-chart'),
  detailTitle: document.querySelector('#detail-title'),
  detailEyebrow: document.querySelector('#detail-eyebrow'),
  detailModule: document.querySelector('#detail-module'),
  reportPreview: document.querySelector('#report-preview'),
  exportBtn: document.querySelector('#export-btn'),
  logoutBtn: document.querySelector('#logout-btn'),
  modalBackdrop: document.querySelector('#modal-backdrop'),
  modalTitle: document.querySelector('#modal-title'),
  modalClose: document.querySelector('#modal-close'),
  addForm: document.querySelector('#add-form'),
  mobileSidebarToggle: document.querySelector('.mobile-sidebar-toggle'),
  sidebar: document.querySelector('.sidebar')
};

function getUser() {
  try {
    return JSON.parse(localStorage.getItem('ecoraiz-user'));
  } catch {
    return null;
  }
}

function ensureSession() {
  const user = getUser();
  if (user && profileLabels[user.profile]) return user;
  const demo = { name: 'Usuario Demo', email: 'demo@ecoraiz.com', profile: 'resident', profileLabel: profileLabels.resident };
  localStorage.setItem('ecoraiz-user', JSON.stringify(demo));
  localStorage.setItem('ecoraiz-session', 'active');
  return demo;
}

const user = ensureSession();
let currentProfile = user.profile;
let currentChart = 'humidity';
let state = loadState();

function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function loadState() {
  const key = `ecoraiz-dashboard-state-${currentProfile}`;
  try {
    const saved = JSON.parse(localStorage.getItem(key));
    if (saved?.items && saved?.alerts && saved?.actions && saved?.charts) return saved;
  } catch {}
  const initial = clone(defaultData[currentProfile]);
  localStorage.setItem(key, JSON.stringify(initial));
  return initial;
}

function saveState() {
  localStorage.setItem(`ecoraiz-dashboard-state-${currentProfile}`, JSON.stringify(state));
}

function activeAlerts() {
  return state.alerts.filter((alert) => !alert.resolved);
}

function itemById(id) {
  return state.items.find((item) => item.id === id);
}

function formatMoney(value) {
  return `S/ ${Number(value || 0).toFixed(0)}`;
}

function avg(values) {
  if (!values.length) return 0;
  return Math.round(values.reduce((sum, value) => sum + Number(value || 0), 0) / values.length);
}

function potentialLoss() {
  return state.items
    .filter((item) => item.status === 'critical')
    .reduce((sum, item) => sum + Number(item.quantity || 1) * Number(item.value || 0), 0);
}

function getKpis() {
  const healthy = state.items.filter((i) => i.status === 'healthy').length;
  const warning = state.items.filter((i) => i.status === 'warning').length;
  const critical = state.items.filter((i) => i.status === 'critical').length;
  const alerts = activeAlerts().length;
  const pendingActions = state.actions.filter((a) => !a.done).length;

  if (currentProfile === 'expert') {
    const microclimates = new Set(state.items.map((item) => item.microclimate || item.location)).size;
    return [
      { icon: '🌱', label: 'Cultivos', value: state.items.length, copy: 'monitoreados' },
      { icon: '🧪', label: 'Microclimas', value: microclimates, copy: 'comparables' },
      { icon: '⚠️', label: 'Alertas técnicas', value: alerts, copy: 'activas' },
      { icon: '💧', label: 'Humedad promedio', value: `${avg(state.items.map((i) => i.humidity))}%`, copy: 'última lectura' }
    ];
  }

  if (currentProfile === 'entrepreneur') {
    const units = state.items.reduce((sum, item) => sum + Number(item.quantity || 1), 0);
    const ready = state.items.filter((item) => item.availability === 'Lista para venta').reduce((sum, item) => sum + Number(item.quantity || 1), 0);
    return [
      { icon: '📦', label: 'Inventario vivo', value: units, copy: 'unidades registradas' },
      { icon: '🚨', label: 'Plantas críticas', value: critical, copy: 'lotes en riesgo' },
      { icon: '💸', label: 'Pérdida potencial', value: formatMoney(potentialLoss()), copy: 'por deterioro' },
      { icon: '✅', label: 'Listas para venta', value: ready, copy: 'unidades disponibles' }
    ];
  }

  return [
    { icon: '🪴', label: 'Plantas', value: state.items.length, copy: 'registradas' },
    { icon: '✅', label: 'Saludables', value: healthy, copy: 'sin acciones urgentes' },
    { icon: '⚠️', label: 'Alertas', value: alerts, copy: 'preventivas activas' },
    { icon: '📌', label: 'Cuidados', value: pendingActions, copy: 'pendientes hoy' }
  ];
}

function renderHeader() {
  const config = profileConfig[currentProfile];
  dom.title.textContent = config.title;
  dom.profileKicker.textContent = config.kicker;
  dom.profilePill.textContent = `${config.icon} ${profileLabels[currentProfile]}`;
  dom.segmentLabel.textContent = config.segment;
  dom.welcomeTitle.textContent = config.welcomeTitle;
  dom.welcomeCopy.textContent = config.welcomeCopy;
  dom.openAddModal.textContent = config.addLabel;
  dom.itemsTitle.textContent = config.itemsTitle;
  dom.itemsEyebrow.textContent = config.itemsEyebrow;
  dom.chartTitle.textContent = config.chartTitle;
  dom.detailTitle.textContent = config.detailTitle;
  dom.detailEyebrow.textContent = config.detailEyebrow;
}

function renderKpis() {
  dom.kpiGrid.innerHTML = getKpis().map((kpi) => `
    <article class="kpi-card">
      <div class="kpi-card__top">
        <div>
          <h3>${kpi.label}</h3>
          <strong>${kpi.value}</strong>
        </div>
        <span class="kpi-icon">${kpi.icon}</span>
      </div>
      <p>${kpi.copy}</p>
    </article>
  `).join('');
}

function renderAlerts() {
  const alerts = state.alerts.slice().sort((a, b) => Number(a.resolved) - Number(b.resolved));
  const active = activeAlerts().length;
  dom.alertCount.textContent = `${active} activas`;

  if (!alerts.length) {
    dom.alertList.innerHTML = '<div class="empty-state">No existen alertas registradas.</div>';
    return;
  }

  dom.alertList.innerHTML = alerts.map((alert) => {
    const item = itemById(alert.itemId);
    const status = alert.resolved ? 'resolved' : alert.severity;
    return `
      <article class="alert-item">
        <div>
          <div class="alert-meta">
            <span class="status-badge ${status}">${alert.resolved ? 'Atendida' : severityLabels[alert.severity]}</span>
            <span class="status-badge">${item?.name || 'Registro'}</span>
          </div>
          <h3>${alert.title}</h3>
          <p>${alert.message}</p>
          <p><strong>Acción:</strong> ${alert.action}</p>
        </div>
        <button class="btn btn-secondary btn-small" type="button" data-resolve-alert="${alert.id}" ${alert.resolved ? 'disabled' : ''}>${alert.resolved ? 'Atendida' : 'Atender'}</button>
      </article>
    `;
  }).join('');
}

function renderActions() {
  if (!state.actions.length) {
    dom.actionList.innerHTML = '<div class="empty-state">No hay recomendaciones pendientes.</div>';
    return;
  }

  dom.actionList.innerHTML = state.actions.map((action) => {
    const item = itemById(action.itemId);
    return `
      <article class="action-item">
        <div class="action-meta">
          <span class="status-badge ${action.done ? 'resolved' : 'warning'}">${action.done ? 'Completada' : 'Pendiente'}</span>
          <span class="status-badge">${item?.name || 'Registro'}</span>
        </div>
        <h3>${action.text}</h3>
        <p>${currentProfile === 'expert' ? 'Complementa el monitoreo con observaciones y datos históricos.' : currentProfile === 'entrepreneur' ? 'Ayuda a reducir pérdidas y mantener calidad comercial.' : 'Marca la acción cuando termines el cuidado.'}</p>
        <button class="btn btn-primary btn-small" type="button" data-complete-action="${action.id}" ${action.done ? 'disabled' : ''}>${action.done ? 'Realizado' : 'Marcar como realizado'}</button>
      </article>
    `;
  }).join('');
}

function renderItems() {
  const query = dom.searchInput.value.trim().toLowerCase();
  const filter = dom.statusFilter.value;
  const items = state.items.filter((item) => {
    const matchQuery = !query || [item.name, item.species, item.location, item.microclimate, item.availability].filter(Boolean).join(' ').toLowerCase().includes(query);
    const matchStatus = filter === 'all' || item.status === filter;
    return matchQuery && matchStatus;
  });

  if (!items.length) {
    dom.itemGrid.innerHTML = '<div class="empty-state">No se encontraron registros con ese filtro.</div>';
    return;
  }

  dom.itemGrid.innerHTML = items.map((item) => {
    const extra = currentProfile === 'entrepreneur'
      ? `<span class="status-badge">${item.quantity || 1} unidades</span><span class="status-badge">${formatMoney(item.value)} c/u</span>`
      : currentProfile === 'expert'
        ? `<span class="status-badge">${item.microclimate || 'Microclima'}</span><span class="status-badge">pH ${item.ph || '—'}</span>`
        : `<span class="status-badge">${item.location}</span>`;

    return `
      <article class="plant-card ${item.status}">
        <div class="plant-meta">
          <span class="status-badge ${item.status}">${statusLabels[item.status]}</span>
          ${extra}
        </div>
        <h3>${item.name}</h3>
        <p>${item.species || 'Especie no definida'} · ${item.location || 'Ubicación no definida'}</p>
        <div class="metric-strip">
          <div><span>Humedad</span><strong>${item.humidity}%</strong></div>
          <div><span>Temp.</span><strong>${item.temp}°C</strong></div>
          <div><span>Luz</span><strong>${item.light} lux</strong></div>
        </div>
        <p><strong>Recomendación:</strong> ${item.recommendation}</p>
      </article>
    `;
  }).join('');
}

function renderChartTabs() {
  const tabs = [
    { key: 'humidity', label: 'Humedad' },
    { key: 'temp', label: 'Temperatura' },
    { key: 'light', label: 'Luz' }
  ];
  dom.chartTabs.innerHTML = tabs.map((tab) => `
    <button type="button" class="${currentChart === tab.key ? 'is-active' : ''}" data-chart="${tab.key}">${tab.label}</button>
  `).join('');
}

function renderLineChart() {
  const values = state.charts[currentChart] || [];
  const width = 420;
  const height = 180;
  const padding = 22;
  const min = Math.min(...values) - 5;
  const max = Math.max(...values) + 5;
  const range = max - min || 1;
  const points = values.map((value, index) => {
    const x = padding + (index * (width - padding * 2)) / Math.max(values.length - 1, 1);
    const y = height - padding - ((value - min) / range) * (height - padding * 2);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ');

  const grid = [0, 1, 2, 3].map((step) => {
    const y = padding + step * ((height - padding * 2) / 3);
    return `<line x1="${padding}" y1="${y}" x2="${width - padding}" y2="${y}" stroke="rgba(76, 175, 80, 0.16)" stroke-width="1" />`;
  }).join('');

  const dots = points.split(' ').map((point, index) => {
    const [x, y] = point.split(',');
    return `<circle cx="${x}" cy="${y}" r="4" fill="#4CAF50"><title>${values[index]}</title></circle>`;
  }).join('');

  dom.lineChart.innerHTML = `
    ${grid}
    <polyline fill="none" stroke="#4CAF50" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" points="${points}" />
    ${dots}
  `;
}

function renderDetails() {
  if (currentProfile === 'expert') {
    const sorted = state.items.slice().sort((a, b) => a.temp - b.temp);
    dom.detailModule.innerHTML = sorted.map((item) => `
      <article class="detail-row">
        <span class="detail-icon">🧪</span>
        <div>
          <h3>${item.name}</h3>
          <p>${item.microclimate} · Humedad ${item.humidity}% · Temp. ${item.temp}°C · Luz ${item.light} lux</p>
        </div>
        <span class="status-badge ${item.status}">${statusLabels[item.status]}</span>
      </article>
    `).join('');
    return;
  }

  if (currentProfile === 'entrepreneur') {
    const critical = state.items.filter((item) => item.status === 'critical');
    const rows = [
      { icon: '💸', title: 'Pérdida potencial', copy: 'Estimación según plantas críticas y valor referencial.', value: formatMoney(potentialLoss()), status: 'critical' },
      { icon: '📦', title: 'Lotes en recuperación', copy: `${state.items.filter((item) => item.availability === 'En recuperación').length} lotes requieren seguimiento.`, value: 'Revisar', status: 'warning' },
      { icon: '🚨', title: 'Mayor riesgo actual', copy: critical[0]?.name || 'No hay lote crítico activo.', value: critical[0] ? statusLabels[critical[0].status] : 'Estable', status: critical[0] ? critical[0].status : 'healthy' }
    ];
    dom.detailModule.innerHTML = rows.map((row) => `
      <article class="detail-row">
        <span class="detail-icon">${row.icon}</span>
        <div><h3>${row.title}</h3><p>${row.copy}</p></div>
        <span class="status-badge ${row.status}">${row.value}</span>
      </article>
    `).join('');
    return;
  }

  const pending = state.actions.filter((action) => !action.done);
  const rows = [
    { icon: '📅', title: 'Cuidados de hoy', copy: `${pending.length} acciones pendientes para mantener el estado de tus plantas.`, value: pending.length ? 'Pendiente' : 'Listo', status: pending.length ? 'warning' : 'healthy' },
    { icon: '🪴', title: 'Planta más delicada', copy: state.items.find((item) => item.status === 'critical')?.name || 'No hay plantas críticas.', value: state.items.find((item) => item.status === 'critical') ? 'Crítico' : 'Estable', status: state.items.find((item) => item.status === 'critical') ? 'critical' : 'healthy' },
    { icon: '💡', title: 'Consejo personalizado', copy: 'Revisa la luz de las plantas cercanas a ventanas durante la tarde.', value: 'Tip', status: 'healthy' }
  ];
  dom.detailModule.innerHTML = rows.map((row) => `
    <article class="detail-row">
      <span class="detail-icon">${row.icon}</span>
      <div><h3>${row.title}</h3><p>${row.copy}</p></div>
      <span class="status-badge ${row.status}">${row.value}</span>
    </article>
  `).join('');
}

function renderReportPreview() {
  const alerts = activeAlerts().length;
  const critical = state.items.filter((item) => item.status === 'critical').length;
  const actionsDone = state.actions.filter((action) => action.done).length;
  const rows = currentProfile === 'entrepreneur'
    ? [
        { label: 'Inventario total', value: state.items.reduce((sum, item) => sum + Number(item.quantity || 1), 0), copy: 'unidades vivas registradas' },
        { label: 'Alertas comerciales', value: alerts, copy: 'riesgos activos' },
        { label: 'Pérdida potencial', value: formatMoney(potentialLoss()), copy: 'estimación actual' }
      ]
    : currentProfile === 'expert'
      ? [
          { label: 'Cultivos técnicos', value: state.items.length, copy: 'registros monitoreados' },
          { label: 'Alertas técnicas', value: alerts, copy: 'variables críticas' },
          { label: 'Acciones completadas', value: actionsDone, copy: 'observaciones/ajustes' }
        ]
      : [
          { label: 'Plantas registradas', value: state.items.length, copy: 'en seguimiento' },
          { label: 'Alertas preventivas', value: alerts, copy: 'requieren atención' },
          { label: 'Estados críticos', value: critical, copy: 'plantas delicadas' }
        ];

  dom.reportPreview.innerHTML = rows.map((row) => `
    <article class="report-row">
      <p>${row.label}</p>
      <strong>${row.value}</strong>
      <p>${row.copy}</p>
    </article>
  `).join('');
}

function renderAll() {
  renderHeader();
  renderKpis();
  renderAlerts();
  renderActions();
  renderItems();
  renderChartTabs();
  renderLineChart();
  renderDetails();
  renderReportPreview();
}

function resolveAlert(alertId) {
  const alert = state.alerts.find((item) => item.id === alertId);
  if (!alert) return;
  alert.resolved = true;
  const item = itemById(alert.itemId);
  if (item) {
    item.status = item.status === 'critical' ? 'warning' : 'healthy';
    item.recommendation = 'Alerta atendida. Continuar monitoreo.';
  }
  const relatedAction = state.actions.find((action) => action.itemId === alert.itemId && !action.done);
  if (relatedAction) relatedAction.done = true;
  saveState();
  renderAll();
}

function completeAction(actionId) {
  const action = state.actions.find((item) => item.id === actionId);
  if (!action) return;
  action.done = true;
  const item = itemById(action.itemId);
  if (item && item.status === 'warning') item.status = 'healthy';
  saveState();
  renderAll();
}

function simulateAlert() {
  const target = state.items[Math.floor(Math.random() * state.items.length)];
  if (!target) return;
  target.status = 'critical';
  target.recommendation = currentProfile === 'entrepreneur'
    ? 'Atender de inmediato para evitar pérdida comercial.'
    : currentProfile === 'expert'
      ? 'Revisar variable crítica y registrar observación técnica.'
      : 'Realizar acción preventiva hoy.';
  const id = `al-${Date.now()}`;
  state.alerts.unshift({
    id,
    itemId: target.id,
    severity: 'critical',
    title: `Nueva alerta crítica en ${target.name}`,
    message: 'Se detectó una desviación simulada fuera del rango recomendado.',
    action: target.recommendation,
    resolved: false
  });
  state.actions.unshift({ id: `ac-${Date.now()}`, itemId: target.id, text: target.recommendation, done: false });
  saveState();
  renderAll();
}

function openModal() {
  const config = profileConfig[currentProfile];
  dom.modalTitle.textContent = config.addLabel;
  dom.addForm.innerHTML = buildFormFields();
  dom.modalBackdrop.hidden = false;
  dom.addForm.querySelector('input, select')?.focus();
}

function closeModal() {
  dom.modalBackdrop.hidden = true;
  dom.addForm.innerHTML = '';
}

function buildFormFields() {
  const common = `
    <div class="form-grid">
      <div class="form-row">
        <label for="new-name">Nombre</label>
        <input id="new-name" name="name" type="text" placeholder="Ej. Albahaca" required />
        <small class="error-message"></small>
      </div>
      <div class="form-row">
        <label for="new-species">Especie</label>
        <input id="new-species" name="species" type="text" placeholder="Ej. Ocimum basilicum" required />
        <small class="error-message"></small>
      </div>
    </div>
  `;

  if (currentProfile === 'expert') {
    return `${common}
      <div class="form-grid">
        <div class="form-row"><label for="new-location">Ubicación</label><input id="new-location" name="location" type="text" placeholder="Laboratorio / aula" required /><small class="error-message"></small></div>
        <div class="form-row"><label for="new-microclimate">Microclima</label><input id="new-microclimate" name="microclimate" type="text" placeholder="Húmedo / seco / mixto" required /><small class="error-message"></small></div>
      </div>
      <div class="modal-actions"><button class="btn btn-secondary" type="button" data-close-modal>Cancelar</button><button class="btn btn-primary" type="submit">Guardar cultivo</button></div>`;
  }

  if (currentProfile === 'entrepreneur') {
    return `${common}
      <div class="form-grid">
        <div class="form-row"><label for="new-quantity">Cantidad</label><input id="new-quantity" name="quantity" type="number" min="1" value="1" required /><small class="error-message"></small></div>
        <div class="form-row"><label for="new-value">Valor referencial S/</label><input id="new-value" name="value" type="number" min="1" value="20" required /><small class="error-message"></small></div>
      </div>
      <div class="form-grid">
        <div class="form-row"><label for="new-location">Ubicación</label><input id="new-location" name="location" type="text" placeholder="Zona de venta" required /><small class="error-message"></small></div>
        <div class="form-row"><label for="new-availability">Disponibilidad</label><select id="new-availability" name="availability"><option>Lista para venta</option><option>Reservada</option><option>En recuperación</option></select><small class="error-message"></small></div>
      </div>
      <div class="modal-actions"><button class="btn btn-secondary" type="button" data-close-modal>Cancelar</button><button class="btn btn-primary" type="submit">Guardar planta comercial</button></div>`;
  }

  return `${common}
    <div class="form-row"><label for="new-location">Ubicación en casa</label><input id="new-location" name="location" type="text" placeholder="Sala, ventana, cocina..." required /><small class="error-message"></small></div>
    <div class="modal-actions"><button class="btn btn-secondary" type="button" data-close-modal>Cancelar</button><button class="btn btn-primary" type="submit">Guardar planta</button></div>`;
}

function addFormError(field, message) {
  const row = field.closest('.form-row');
  const error = row?.querySelector('.error-message');
  if (!row || !error) return;
  row.classList.add('has-error');
  error.textContent = message;
}

function clearAddFormErrors() {
  dom.addForm.querySelectorAll('.form-row').forEach((row) => {
    row.classList.remove('has-error');
    const error = row.querySelector('.error-message');
    if (error) error.textContent = '';
  });
}

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function handleAddSubmit(event) {
  event.preventDefault();
  clearAddFormErrors();
  const fd = new FormData(dom.addForm);
  const name = String(fd.get('name') || '').trim();
  const species = String(fd.get('species') || '').trim();
  const location = String(fd.get('location') || '').trim();
  let isValid = true;

  ['name', 'species', 'location'].forEach((fieldName) => {
    const field = dom.addForm.elements[fieldName];
    if (field && !String(field.value || '').trim()) {
      addFormError(field, 'Campo obligatorio.');
      isValid = false;
    }
  });

  if (!isValid) return;

  const idPrefix = currentProfile === 'expert' ? 'ea' : currentProfile === 'entrepreneur' ? 'em' : 'ru';
  const newItem = {
    id: `${idPrefix}-${Date.now()}`,
    name,
    species,
    location,
    status: 'healthy',
    humidity: randomBetween(42, 68),
    temp: randomBetween(22, 28),
    light: randomBetween(520, 880),
    recommendation: 'Registro creado. Continuar monitoreo.'
  };

  if (currentProfile === 'expert') {
    newItem.microclimate = String(fd.get('microclimate') || '').trim() || 'Nuevo microclima';
    newItem.ph = (Math.random() * 1.2 + 5.8).toFixed(1);
  }

  if (currentProfile === 'entrepreneur') {
    newItem.quantity = Math.max(1, Number(fd.get('quantity') || 1));
    newItem.value = Math.max(1, Number(fd.get('value') || 20));
    newItem.availability = String(fd.get('availability') || 'Lista para venta');
  }

  state.items.unshift(newItem);
  state.actions.unshift({ id: `ac-${Date.now()}`, itemId: newItem.id, text: currentProfile === 'expert' ? `Registrar primera observación técnica de ${name}.` : currentProfile === 'entrepreneur' ? `Verificar disponibilidad comercial de ${name}.` : `Revisar condiciones iniciales de ${name}.`, done: false });
  saveState();
  closeModal();
  renderAll();
}

function exportReport() {
  const config = profileConfig[currentProfile];
  const report = [
    `EcoRaíz - ${config.title}`,
    `Usuario: ${user.name}`,
    `Perfil: ${profileLabels[currentProfile]}`,
    `Fecha: ${new Date().toLocaleString('es-PE')}`,
    '',
    'Indicadores:',
    ...getKpis().map((kpi) => `- ${kpi.label}: ${kpi.value} (${kpi.copy})`),
    '',
    'Alertas activas:',
    ...(activeAlerts().length ? activeAlerts().map((alert) => `- ${alert.title}: ${alert.action}`) : ['- Sin alertas activas']),
    '',
    'Registros:',
    ...state.items.map((item) => `- ${item.name} | ${statusLabels[item.status]} | Humedad ${item.humidity}% | Temp. ${item.temp}°C | Luz ${item.light} lux`)
  ].join('\n');

  const blob = new Blob([report], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `ecoraiz-reporte-${currentProfile}.txt`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

// Event delegation

document.addEventListener('click', (event) => {
  const resolveButton = event.target.closest('[data-resolve-alert]');
  if (resolveButton) resolveAlert(resolveButton.dataset.resolveAlert);

  const completeButton = event.target.closest('[data-complete-action]');
  if (completeButton) completeAction(completeButton.dataset.completeAction);

  const chartButton = event.target.closest('[data-chart]');
  if (chartButton) {
    currentChart = chartButton.dataset.chart;
    renderChartTabs();
    renderLineChart();
  }

  if (event.target.closest('[data-close-modal]')) closeModal();
});

dom.openAddModal?.addEventListener('click', openModal);
dom.simulateAlert?.addEventListener('click', simulateAlert);
dom.modalClose?.addEventListener('click', closeModal);
dom.modalBackdrop?.addEventListener('click', (event) => {
  if (event.target === dom.modalBackdrop) closeModal();
});
dom.addForm?.addEventListener('submit', handleAddSubmit);
dom.searchInput?.addEventListener('input', renderItems);
dom.statusFilter?.addEventListener('change', renderItems);
dom.exportBtn?.addEventListener('click', exportReport);
dom.logoutBtn?.addEventListener('click', () => {
  localStorage.removeItem('ecoraiz-session');
  window.location.href = 'app.html';
});
dom.mobileSidebarToggle?.addEventListener('click', () => dom.sidebar.classList.toggle('is-open'));
document.querySelectorAll('.sidebar-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelectorAll('.sidebar-nav a').forEach((item) => item.classList.remove('is-active'));
    link.classList.add('is-active');
    dom.sidebar?.classList.remove('is-open');
  });
});

renderAll();
