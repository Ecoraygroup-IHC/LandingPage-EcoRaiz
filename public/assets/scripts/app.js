const authForm = document.querySelector('#auth-form');
const authTabs = document.querySelectorAll('[data-auth-tab]');
const formTitle = document.querySelector('#form-title');
const formSubtitle = document.querySelector('#form-subtitle');
const authStatus = document.querySelector('#auth-status');
const registerOnlyRows = document.querySelectorAll('[data-register-only]');
const demoButtons = document.querySelectorAll('[data-demo-profile]');
const forgotPasswordButton = document.querySelector('#forgot-password');

let authMode = 'register';

const profileLabels = {
  resident: 'Urban resident',
  expert: 'Environmental expert / Educator',
  entrepreneur: 'Plant entrepreneur'
};


function getProfileFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const profile = params.get('profile');
  return profileLabels[profile] ? profile : null;
}

function applyProfileFromQuery() {
  const profile = getProfileFromQuery();
  if (!profile || !authForm?.profile) return;
  authForm.profile.value = profile;
  if (authStatus) {
    authStatus.textContent = `Selected profile: ${profileLabels[profile]}. You can enter the demo dashboard.`;
    authStatus.classList.remove('error');
  }
}

function setAuthMode(mode) {
  authMode = mode === 'login' ? 'login' : 'register';
  authTabs.forEach((tab) => tab.classList.toggle('is-active', tab.dataset.authTab === authMode));

  if (authMode === 'login') {
    formTitle.textContent = 'Demo login';
    formSubtitle.textContent = 'Enter your information or select a profile to access the dashboard.';
    registerOnlyRows.forEach((row) => row.style.display = 'none');
  } else {
    formTitle.textContent = 'Create demo access';
    formSubtitle.textContent = 'Complete basic information and select the profile you want to view.';
    registerOnlyRows.forEach((row) => row.style.display = 'grid');
  }
  clearAllErrors();
  if (authStatus) authStatus.textContent = '';
}

function setFieldError(field, message) {
  const row = field.closest('.form-row');
  const error = row?.querySelector('.error-message');
  if (!row || !error) return;
  row.classList.add('has-error');
  error.textContent = message;
}

function clearFieldError(field) {
  const row = field.closest('.form-row');
  const error = row?.querySelector('.error-message');
  if (!row || !error) return;
  row.classList.remove('has-error');
  error.textContent = '';
}

function clearAllErrors() {
  authForm?.querySelectorAll('input, select').forEach(clearFieldError);
}

function createSession({ name, email, profile }) {
  const safeProfile = profileLabels[profile] ? profile : 'resident';
  const user = {
    name: name?.trim() || 'Demo User',
    email: email?.trim() || 'demo@ecoraiz.com',
    profile: safeProfile,
    profileLabel: profileLabels[safeProfile],
    createdAt: new Date().toISOString()
  };

  localStorage.setItem('ecoraiz-user', JSON.stringify(user));
  localStorage.setItem('ecoraiz-session', 'active');
  window.location.href = 'dashboard.html';
}

function validateEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

if (authForm) {
  authForm.querySelectorAll('input, select').forEach((field) => {
    field.addEventListener('input', () => clearFieldError(field));
    field.addEventListener('change', () => clearFieldError(field));
  });

  authForm.addEventListener('submit', (event) => {
    event.preventDefault();
    clearAllErrors();

    const name = authForm.name.value;
    const email = authForm.email.value.trim();
    const password = authForm.password.value;
    const profile = authForm.profile.value;
    let isValid = true;

    if (authMode === 'register' && !name.trim()) {
      setFieldError(authForm.name, 'Enter your name.');
      isValid = false;
    }

    if (!email) {
      setFieldError(authForm.email, 'Enter your email.');
      isValid = false;
    } else if (!validateEmail(email)) {
      setFieldError(authForm.email, 'Enter a valid email.');
      isValid = false;
    }

    if (!password) {
      setFieldError(authForm.password, 'Enter a password.');
      isValid = false;
    } else if (password.length < 6) {
      setFieldError(authForm.password, 'It must be at least 6 characters.');
      isValid = false;
    }

    if (!profileLabels[profile]) {
      setFieldError(authForm.profile, 'Select a user type.');
      isValid = false;
    }

    if (!isValid) {
      authStatus.textContent = 'Review the marked fields.';
      authStatus.classList.add('error');
      return;
    }

    authStatus.textContent = authMode === 'register' ? 'Account created successfully. Redirecting...' : 'Login successful. Redirecting...';
    authStatus.classList.remove('error');
    setTimeout(() => createSession({ name, email, profile }), 450);
  });
}

authTabs.forEach((tab) => {
  tab.addEventListener('click', () => setAuthMode(tab.dataset.authTab));
});

demoButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const profile = button.dataset.demoProfile;
    createSession({ name: profileLabels[profile], email: 'demo@ecoraiz.com', profile });
  });
});

applyProfileFromQuery();

forgotPasswordButton?.addEventListener('click', () => {
  if (!authStatus) return;
  const email = authForm?.email?.value?.trim();
  if (email && validateEmail(email)) {
    authStatus.textContent = `We will send recovery instructions to ${email}.`;
    authStatus.classList.remove('error');
    return;
  }
  authStatus.textContent = 'Enter a valid email to recover your password.';
  authStatus.classList.add('error');
  authForm?.email?.focus();
});
