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
  resident: 'Residente urbano',
  expert: 'Experto ambiental / Educador',
  entrepreneur: 'Emprendedor de plantas'
};

function setAuthMode(mode) {
  authMode = mode === 'login' ? 'login' : 'register';
  authTabs.forEach((tab) => tab.classList.toggle('is-active', tab.dataset.authTab === authMode));

  if (authMode === 'login') {
    formTitle.textContent = 'Iniciar sesión demo';
    formSubtitle.textContent = 'Ingresa tus datos o selecciona un perfil para entrar al dashboard.';
    registerOnlyRows.forEach((row) => row.style.display = 'none');
  } else {
    formTitle.textContent = 'Crear acceso demo';
    formSubtitle.textContent = 'Completa datos básicos y selecciona el perfil que quieres visualizar.';
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
    name: name?.trim() || 'Usuario Demo',
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
      setFieldError(authForm.name, 'Ingresa tu nombre.');
      isValid = false;
    }

    if (!email) {
      setFieldError(authForm.email, 'Ingresa tu correo.');
      isValid = false;
    } else if (!validateEmail(email)) {
      setFieldError(authForm.email, 'Ingresa un correo válido.');
      isValid = false;
    }

    if (!password) {
      setFieldError(authForm.password, 'Ingresa una contraseña.');
      isValid = false;
    } else if (password.length < 6) {
      setFieldError(authForm.password, 'Debe tener mínimo 6 caracteres.');
      isValid = false;
    }

    if (!profileLabels[profile]) {
      setFieldError(authForm.profile, 'Selecciona un tipo de usuario.');
      isValid = false;
    }

    if (!isValid) {
      authStatus.textContent = 'Revisa los campos marcados.';
      authStatus.classList.add('error');
      return;
    }

    authStatus.textContent = authMode === 'register' ? 'Cuenta creada correctamente. Redirigiendo...' : 'Inicio de sesión correcto. Redirigiendo...';
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

forgotPasswordButton?.addEventListener('click', () => {
  if (!authStatus) return;
  const email = authForm?.email?.value?.trim();
  if (email && validateEmail(email)) {
    authStatus.textContent = `Te enviaremos instrucciones de recuperación a ${email}.`;
    authStatus.classList.remove('error');
    return;
  }
  authStatus.textContent = 'Ingresa un correo válido para recuperar tu contraseña.';
  authStatus.classList.add('error');
  authForm?.email?.focus();
});
