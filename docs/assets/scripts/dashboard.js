const profileLabels = {
  resident: 'Urban resident',
  expert: 'Environmental expert / Educator',
  entrepreneur: 'Plant entrepreneur'
};

const profileConfig = {
  resident: {
    icon: '🏠',
    title: 'Urban resident dashboard',
    kicker: 'US-RU · Indoor plant care',
    segment: 'Segment 1: Urban residents',
    welcomeTitle: 'Care for your plants with simple alerts and actionable recommendations',
    welcomeCopy: 'View each plant status, review humidity, light and temperature, and mark care tasks as completed.',
    addLabel: 'Add plant',
    itemsTitle: 'My indoor plants',
    itemsEyebrow: 'US-RU-01 / US-RU-03',
    chartTitle: 'Simplified environmental evolution',
    detailTitle: 'Calendar and daily status',
    detailEyebrow: 'US-RU-09 / US-RU-10'
  },
  expert: {
    icon: '🔬',
    title: 'Technical dashboard for environmental experts',
    kicker: 'US-EA · Environmental monitoring and analysis',
    segment: 'Segment 2: Experts and educators',
    welcomeTitle: 'Monitor microclimates, detailed variables and technical alerts',
    welcomeCopy: 'Analyze research crops with simulated data, historical charts, comparisons and reports.',
    addLabel: 'Add technical crop',
    itemsTitle: 'Research crops',
    itemsEyebrow: 'US-EA-01 / US-EA-02',
    chartTitle: 'Historical variable charts',
    detailTitle: 'Microclimatete comparison',
    detailEyebrow: 'US-EA-03 / US-EA-04'
  },
  entrepreneur: {
    icon: '🪴',
    title: 'Commercial dashboard for entrepreneurs',
    kicker: 'US-EM · Live inventory and risks',
    segment: 'Segment 3: Plant entrepreneurs',
    welcomeTitle: 'Monitor your live inventory and reduce commercial losses',
    welcomeCopy: 'Control plants ready for sale, critical crops, corrective actions and potential losses.',
    addLabel: 'Add commercial plant',
    itemsTitle: 'Commercial live inventory',
    itemsEyebrow: 'US-EM-01 / US-EM-07',
    chartTitle: 'Weekly commercial risk',
    detailTitle: 'Potential losses and inventory',
    detailEyebrow: 'US-EM-03 / US-EM-08'
  }
};

const statusLabels = {
  healthy: 'Healthy',
  warning: 'Warning',
  critical: 'Critical',
  resolved: 'Resolved'
};

const severityLabels = {
  healthy: 'Healthy',
  warning: 'Preventive',
  critical: 'Critical'
};

const defaultData = {
  resident: {
    items: [
      { id: 'ru-1', name: 'Basil', species: 'Ocimum basilicum', location: 'Kitchen window', status: 'healthy', humidity: 58, temp: 24, light: 720, recommendation: 'No urgent actions for now.' },
      { id: 'ru-2', name: 'Fern', species: 'Nephrolepis', location: 'Living room', status: 'warning', humidity: 34, temp: 25, light: 430, recommendation: 'Add water today and move away from direct light.' },
      { id: 'ru-3', name: 'Succulent', species: 'Echeveria', location: 'Desk', status: 'critical', humidity: 76, temp: 29, light: 940, recommendation: 'Stop watering and improve ventilation.' }
    ],
    alerts: [
      { id: 'al-ru-1', itemId: 'ru-2', severity: 'warning', title: 'Low humidity in Fern', message: 'The substrate is below the recommended range.', action: 'Agregar agua hoy.', resolved: false },
      { id: 'al-ru-2', itemId: 'ru-3', severity: 'critical', title: 'Excess humidity in Succulent', message: 'It may cause root deterioration if not corrected.', action: 'Stop watering for 24 hours.', resolved: false }
    ],
    actions: [
      { id: 'ac-ru-1', itemId: 'ru-2', text: 'Add water to the Fern today.', done: false },
      { id: 'ac-ru-2', itemId: 'ru-3', text: 'Move Succulent to a ventilated area.', done: false }
    ],
    charts: {
      humidity: [55, 53, 49, 46, 42, 38, 36],
      temp: [23, 24, 24, 25, 26, 27, 26],
      light: [600, 620, 580, 640, 680, 720, 700]
    }
  },
  expert: {
    items: [
      { id: 'ea-1', name: 'Microclimate A', species: 'Cactus experimental', location: 'Greenhouse 1', microclimate: 'Controlled dry', status: 'healthy', humidity: 42, temp: 26, light: 820, ph: 6.4, recommendation: 'Maintain current exposure.' },
      { id: 'ea-2', name: 'Microclimate B', species: 'Vegetables', location: 'Lab classroom', microclimate: 'Educational humid', status: 'warning', humidity: 69, temp: 28, light: 610, ph: 6.8, recommendation: 'Check ventilation during the afternoon.' },
      { id: 'ea-3', name: 'Microclimate C', species: 'Aromatic herbs', location: 'Testing module', microclimate: 'Mixed', status: 'critical', humidity: 31, temp: 30, light: 500, ph: 5.9, recommendation: 'Activate watering and record technical observation.' }
    ],
    alerts: [
      { id: 'al-ea-1', itemId: 'ea-2', severity: 'warning', title: 'High temperature in Microclimatete B', message: 'Temperature exceeded the range defined for vegetables.', action: 'Check ventilation and record observation.', resolved: false },
      { id: 'al-ea-2', itemId: 'ea-3', severity: 'critical', title: 'Critical humidity in Microclimatete C', message: 'The values may affect crop survival.', action: 'Activate watering and compare with previous records.', resolved: false }
    ],
    actions: [
      { id: 'ac-ea-1', itemId: 'ea-2', text: 'Record technical observation on temperature.', done: false },
      { id: 'ac-ea-2', itemId: 'ea-3', text: 'Compare humidity with the previous period.', done: false }
    ],
    charts: {
      humidity: [44, 45, 43, 47, 41, 38, 36],
      temp: [24, 25, 25, 26, 27, 29, 28],
      light: [520, 600, 610, 680, 700, 740, 760]
    }
  },
  entrepreneur: {
    items: [
      { id: 'em-1', name: 'Fern Batch', species: 'Ferns', location: 'Humid area', status: 'critical', quantity: 18, value: 25, availability: 'Recovering', humidity: 29, temp: 27, light: 420, recommendation: 'Increase humidity and separate deteriorated plants.' },
      { id: 'em-2', name: 'Succulent Batch', species: 'Succulents', location: 'Display table', status: 'healthy', quantity: 40, value: 18, availability: 'Ready for sale', humidity: 48, temp: 25, light: 880, recommendation: 'Maintain current conditions.' },
      { id: 'em-3', name: 'Lily Batch', species: 'Lilies', location: 'Temporary storage', status: 'warning', quantity: 12, value: 35, availability: 'Reserved', humidity: 52, temp: 30, light: 760, recommendation: 'Reduce sun exposure and check leaves.' }
    ],
    alerts: [
      { id: 'al-em-1', itemId: 'em-1', severity: 'critical', title: 'Commercial risk in Ferns', message: '18 units may deteriorate due to low humidity.', action: 'Address humidity and record corrective action.', resolved: false },
      { id: 'al-em-2', itemId: 'em-3', severity: 'warning', title: 'Lilies with high exposure', message: 'The batch may lose commercial quality.', action: 'Move to an area with less light.', resolved: false }
    ],
    actions: [
      { id: 'ac-em-1', itemId: 'em-1', text: 'Record corrective action for Ferns.', done: false },
      { id: 'ac-em-2', itemId: 'em-3', text: 'Update commercial availability of Lilies.', done: false }
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
  logoutBackdrop: document.querySelector('#logout-backdrop'),
  logoutCancel: document.querySelector('#logout-cancel'),
  logoutCancelX: document.querySelector('#logout-cancel-x'),
  logoutConfirm: document.querySelector('#logout-confirm'),
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
  const demo = { name: 'Demo User', email: 'demo@ecoraiz.com', profile: 'resident', profileLabel: profileLabels.resident };
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
  const key = `ecoraiz-dashboard-state-en-${currentProfile}`;
  try {
    const saved = JSON.parse(localStorage.getItem(key));
    if (saved?.items && saved?.alerts && saved?.actions && saved?.charts) return saved;
  } catch {}
  const initial = clone(defaultData[currentProfile]);
  localStorage.setItem(key, JSON.stringify(initial));
  return initial;
}

function saveState() {
  localStorage.setItem(`ecoraiz-dashboard-state-en-${currentProfile}`, JSON.stringify(state));
}

function openLogoutModal() {
  if (!dom.logoutBackdrop) return;
  dom.logoutBackdrop.hidden = false;
  dom.logoutConfirm?.focus();
}

function closeLogoutModal() {
  if (!dom.logoutBackdrop) return;
  dom.logoutBackdrop.hidden = true;
  dom.logoutBtn?.focus();
}

function confirmLogout() {
  localStorage.removeItem('ecoraiz-session');
  window.location.href = 'app.html';
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
      { icon: '🌱', label: 'Crops', value: state.items.length, copy: 'monitored' },
      { icon: '🧪', label: 'Microclimates', value: microclimates, copy: 'comparable' },
      { icon: '⚠️', label: 'Technical alerts', value: alerts, copy: 'active' },
      { icon: '💧', label: 'Average humidity', value: `${avg(state.items.map((i) => i.humidity))}%`, copy: 'last reading' }
    ];
  }

  if (currentProfile === 'entrepreneur') {
    const units = state.items.reduce((sum, item) => sum + Number(item.quantity || 1), 0);
    const ready = state.items.filter((item) => item.availability === 'Ready for sale').reduce((sum, item) => sum + Number(item.quantity || 1), 0);
    return [
      { icon: '📦', label: 'Live inventory', value: units, copy: 'registered units' },
      { icon: '🚨', label: 'Critical plants', value: critical, copy: 'at-risk batches' },
      { icon: '💸', label: 'Potential loss', value: formatMoney(potentialLoss()), copy: 'due to deterioration' },
      { icon: '✅', label: 'Ready for sale', value: ready, copy: 'available units' }
    ];
  }

  return [
    { icon: '🪴', label: 'Plantas', value: state.items.length, copy: 'registradas' },
    { icon: '✅', label: 'Healthys', value: healthy, copy: 'sin acciones urgentes' },
    { icon: '⚠️', label: 'Alerts', value: alerts, copy: 'active preventive' },
    { icon: '📌', label: 'Care tasks', value: pendingActions, copy: 'pending today' }
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
  dom.alertCount.textContent = `${active} active`;

  if (!alerts.length) {
    dom.alertList.innerHTML = '<div class="empty-state">No alerts have been registered.</div>';
    return;
  }

  dom.alertList.innerHTML = alerts.map((alert) => {
    const item = itemById(alert.itemId);
    const status = alert.resolved ? 'resolved' : alert.severity;
    return `
      <article class="alert-item">
        <div>
          <div class="alert-meta">
            <span class="status-badge ${status}">${alert.resolved ? 'Resolved' : severityLabels[alert.severity]}</span>
            <span class="status-badge">${item?.name || 'Record'}</span>
          </div>
          <h3>${alert.title}</h3>
          <p>${alert.message}</p>
          <p><strong>Action:</strong> ${alert.action}</p>
        </div>
        <button class="btn btn-secondary btn-small" type="button" data-resolve-alert="${alert.id}" ${alert.resolved ? 'disabled' : ''}>${alert.resolved ? 'Resolved' : 'Address'}</button>
      </article>
    `;
  }).join('');
}

function renderActions() {
  if (!state.actions.length) {
    dom.actionList.innerHTML = '<div class="empty-state">No pending recommendations.</div>';
    return;
  }

  dom.actionList.innerHTML = state.actions.map((action) => {
    const item = itemById(action.itemId);
    return `
      <article class="action-item">
        <div class="action-meta">
          <span class="status-badge ${action.done ? 'resolved' : 'warning'}">${action.done ? 'Completed' : 'Pending'}</span>
          <span class="status-badge">${item?.name || 'Record'}</span>
        </div>
        <h3>${action.text}</h3>
        <p>${currentProfile === 'expert' ? 'Support monitoring with observations and historical data.' : currentProfile === 'entrepreneur' ? 'Helps reduce losses and maintain commercial quality.' : 'Mark the action when you finish the care task.'}</p>
        <button class="btn btn-primary btn-small" type="button" data-complete-action="${action.id}" ${action.done ? 'disabled' : ''}>${action.done ? 'Done' : 'Mark as done'}</button>
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
    dom.itemGrid.innerHTML = '<div class="empty-state">No records were found with that filter.</div>';
    return;
  }

  dom.itemGrid.innerHTML = items.map((item) => {
    const extra = currentProfile === 'entrepreneur'
      ? `<span class="status-badge">${item.quantity || 1} units</span><span class="status-badge">${formatMoney(item.value)} each</span>`
      : currentProfile === 'expert'
        ? `<span class="status-badge">${item.microclimate || 'Microclimate'}</span><span class="status-badge">pH ${item.ph || '—'}</span>`
        : `<span class="status-badge">${item.location}</span>`;

    return `
      <article class="plant-card ${item.status}">
        <div class="plant-meta">
          <span class="status-badge ${item.status}">${statusLabels[item.status]}</span>
          ${extra}
        </div>
        <h3>${item.name}</h3>
        <p>${item.species || 'Undefined species'} · ${item.location || 'Undefined location'}</p>
        <div class="metric-strip">
          <div><span>Humidity</span><strong>${item.humidity}%</strong></div>
          <div><span>Temp.</span><strong>${item.temp}°C</strong></div>
          <div><span>Light</span><strong>${item.light} lux</strong></div>
        </div>
        <p><strong>Recommendation:</strong> ${item.recommendation}</p>
      </article>
    `;
  }).join('');
}

function renderChartTabs() {
  const tabs = [
    { key: 'humidity', label: 'Humidity' },
    { key: 'temp', label: 'Temperature' },
    { key: 'light', label: 'Light' }
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
          <p>${item.microclimate} · Humidity ${item.humidity}% · Temp. ${item.temp}°C · Light ${item.light} lux</p>
        </div>
        <span class="status-badge ${item.status}">${statusLabels[item.status]}</span>
      </article>
    `).join('');
    return;
  }

  if (currentProfile === 'entrepreneur') {
    const critical = state.items.filter((item) => item.status === 'critical');
    const rows = [
      { icon: '💸', title: 'Potential loss', copy: 'Estimate based on critical plants and reference value.', value: formatMoney(potentialLoss()), status: 'critical' },
      { icon: '📦', title: 'Batches in recovery', copy: `${state.items.filter((item) => item.availability === 'Recovering').length} batches require follow-up.`, value: 'Review', status: 'warning' },
      { icon: '🚨', title: 'Current highest risk', copy: critical[0]?.name || 'No active critical batch.', value: critical[0] ? statusLabels[critical[0].status] : 'Stable', status: critical[0] ? critical[0].status : 'healthy' }
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
    { icon: '📅', title: 'Today\'s care tasks', copy: `${pending.length} pending actions to keep your plants in good condition.`, value: pending.length ? 'Pending' : 'Ready', status: pending.length ? 'warning' : 'healthy' },
    { icon: '🪴', title: 'Most delicate plant', copy: state.items.find((item) => item.status === 'critical')?.name || 'No critical plants.', value: state.items.find((item) => item.status === 'critical') ? 'Critical' : 'Stable', status: state.items.find((item) => item.status === 'critical') ? 'critical' : 'healthy' },
    { icon: '💡', title: 'Personalized tip', copy: 'Check the light of plants near windows during the afternoon.', value: 'Tip', status: 'healthy' }
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
        { label: 'Total inventory', value: state.items.reduce((sum, item) => sum + Number(item.quantity || 1), 0), copy: 'registered live units' },
        { label: 'Commercial alerts', value: alerts, copy: 'active risks' },
        { label: 'Potential loss', value: formatMoney(potentialLoss()), copy: 'current estimate' }
      ]
    : currentProfile === 'expert'
      ? [
          { label: 'Technical crops', value: state.items.length, copy: 'monitored records' },
          { label: 'Technical alerts', value: alerts, copy: 'critical variables' },
          { label: 'Completed actions', value: actionsDone, copy: 'observations/adjustments' }
        ]
      : [
          { label: 'Registered plants', value: state.items.length, copy: 'under tracking' },
          { label: 'Preventive alerts', value: alerts, copy: 'require attention' },
          { label: 'Critical statuses', value: critical, copy: 'delicate plants' }
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
    item.recommendation = 'Alert addressed. Continue monitoring.';
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
    ? 'Act immediately to avoid commercial loss.'
    : currentProfile === 'expert'
      ? 'Review the critical variable and record a technical observation.'
      : 'Perform preventive action today.';
  const id = `al-${Date.now()}`;
  state.alerts.unshift({
    id,
    itemId: target.id,
    severity: 'critical',
    title: `New critical alert in ${target.name}`,
    message: 'A simulated deviation outside the recommended range was detected.',
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
        <label for="new-name">Name</label>
        <input id="new-name" name="name" type="text" placeholder="e.g., Basil" required />
        <small class="error-message"></small>
      </div>
      <div class="form-row">
        <label for="new-species">Species</label>
        <input id="new-species" name="species" type="text" placeholder="e.g., Ocimum basilicum" required />
        <small class="error-message"></small>
      </div>
    </div>
  `;

  if (currentProfile === 'expert') {
    return `${common}
      <div class="form-grid">
        <div class="form-row"><label for="new-location">Location</label><input id="new-location" name="location" type="text" placeholder="Lab / classroom" required /><small class="error-message"></small></div>
        <div class="form-row"><label for="new-microclimate">Microclimate</label><input id="new-microclimate" name="microclimate" type="text" placeholder="Humid / dry / mixed" required /><small class="error-message"></small></div>
      </div>
      <div class="modal-actions"><button class="btn btn-secondary" type="button" data-close-modal>Cancel</button><button class="btn btn-primary" type="submit">Save crop</button></div>`;
  }

  if (currentProfile === 'entrepreneur') {
    return `${common}
      <div class="form-grid">
        <div class="form-row"><label for="new-quantity">Quantity</label><input id="new-quantity" name="quantity" type="number" min="1" value="1" required /><small class="error-message"></small></div>
        <div class="form-row"><label for="new-value">Reference value S/</label><input id="new-value" name="value" type="number" min="1" value="20" required /><small class="error-message"></small></div>
      </div>
      <div class="form-grid">
        <div class="form-row"><label for="new-location">Location</label><input id="new-location" name="location" type="text" placeholder="Sales area" required /><small class="error-message"></small></div>
        <div class="form-row"><label for="new-availability">Availability</label><select id="new-availability" name="availability"><option>Ready for sale</option><option>Reserved</option><option>Recovering</option></select><small class="error-message"></small></div>
      </div>
      <div class="modal-actions"><button class="btn btn-secondary" type="button" data-close-modal>Cancel</button><button class="btn btn-primary" type="submit">Save commercial plant</button></div>`;
  }

  return `${common}
    <div class="form-row"><label for="new-location">Home location</label><input id="new-location" name="location" type="text" placeholder="Living room, window, kitchen..." required /><small class="error-message"></small></div>
    <div class="modal-actions"><button class="btn btn-secondary" type="button" data-close-modal>Cancel</button><button class="btn btn-primary" type="submit">Save plant</button></div>`;
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
      addFormError(field, 'Required field.');
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
    recommendation: 'Record created. Continue monitoring.'
  };

  if (currentProfile === 'expert') {
    newItem.microclimate = String(fd.get('microclimate') || '').trim() || 'New microclimate';
    newItem.ph = (Math.random() * 1.2 + 5.8).toFixed(1);
  }

  if (currentProfile === 'entrepreneur') {
    newItem.quantity = Math.max(1, Number(fd.get('quantity') || 1));
    newItem.value = Math.max(1, Number(fd.get('value') || 20));
    newItem.availability = String(fd.get('availability') || 'Ready for sale');
  }

  state.items.unshift(newItem);
  state.actions.unshift({ id: `ac-${Date.now()}`, itemId: newItem.id, text: currentProfile === 'expert' ? `Record first technical observation for ${name}.` : currentProfile === 'entrepreneur' ? `Verify commercial availability for ${name}.` : `Review initial conditions for ${name}.`, done: false });
  saveState();
  closeModal();
  renderAll();
}

function exportReport() {
  const config = profileConfig[currentProfile];
  const report = [
    `EcoRaíz - ${config.title}`,
    `User: ${user.name}`,
    `Profile: ${profileLabels[currentProfile]}`,
    `Date: ${new Date().toLocaleString('en-US')}`,
    '',
    'Indicators:',
    ...getKpis().map((kpi) => `- ${kpi.label}: ${kpi.value} (${kpi.copy})`),
    '',
    'Alerts active:',
    ...(activeAlerts().length ? activeAlerts().map((alert) => `- ${alert.title}: ${alert.action}`) : ['- No active alerts']),
    '',
    'Records:',
    ...state.items.map((item) => `- ${item.name} | ${statusLabels[item.status]} | Humidity ${item.humidity}% | Temp. ${item.temp}°C | Light ${item.light} lux`)
  ].join('\n');

  const blob = new Blob([report], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `ecoraiz-report-${currentProfile}.txt`;
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
dom.logoutBtn?.addEventListener('click', openLogoutModal);
dom.logoutCancel?.addEventListener('click', closeLogoutModal);
dom.logoutCancelX?.addEventListener('click', closeLogoutModal);
dom.logoutConfirm?.addEventListener('click', confirmLogout);
dom.logoutBackdrop?.addEventListener('click', (event) => {
  if (event.target === dom.logoutBackdrop) closeLogoutModal();
});
dom.mobileSidebarToggle?.addEventListener('click', () => dom.sidebar.classList.toggle('is-open'));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && dom.logoutBackdrop && !dom.logoutBackdrop.hidden) closeLogoutModal();
});
document.querySelectorAll('.sidebar-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelectorAll('.sidebar-nav a').forEach((item) => item.classList.remove('is-active'));
    link.classList.add('is-active');
    const targetId = link.getAttribute('href')?.replace('#', '');
    const targetPanel = targetId ? document.getElementById(targetId) : null;
    if (targetPanel?.tagName === 'DETAILS') targetPanel.open = true;
    dom.sidebar?.classList.remove('is-open');
  });
});

renderAll();
