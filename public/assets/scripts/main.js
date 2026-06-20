const themeButtons = document.querySelectorAll('[data-theme-toggle]');
const rootElement = document.documentElement;

function applyTheme(theme) {
  const nextTheme = theme === 'dark' ? 'dark' : 'light';
  rootElement.setAttribute('data-theme', nextTheme);
  localStorage.setItem('ecoraiz-theme', nextTheme);

  themeButtons.forEach((button) => {
    const isDark = nextTheme === 'dark';
    const knobIcon = button.querySelector('.theme-switch__knob-icon');
    button.classList.toggle('is-dark', isDark);
    button.setAttribute('aria-pressed', String(isDark));
    button.setAttribute('aria-label', isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
    if (knobIcon) knobIcon.textContent = isDark ? '🌙' : '☀️';
  });
}

applyTheme(localStorage.getItem('ecoraiz-theme') || rootElement.getAttribute('data-theme') || 'light');

themeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const currentTheme = rootElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
  });
});

const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    menuToggle.classList.toggle('is-open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('is-open');
      menuToggle.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const revealElements = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('is-visible'));
}

const contactForm = document.querySelector('#contact-form');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

if (contactForm) {
  const status = document.querySelector('#form-status');
  const fields = Array.from(contactForm.querySelectorAll('input, select, textarea'));

  fields.forEach((field) => {
    field.addEventListener('input', () => clearFieldError(field));
    field.addEventListener('change', () => clearFieldError(field));
  });

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let isValid = true;

    fields.forEach((field) => {
      clearFieldError(field);
      if (!field.value.trim()) {
        setFieldError(field, 'Este campo es obligatorio.');
        isValid = false;
      }
    });

    const email = contactForm.querySelector('#email');
    if (email && email.value.trim() && !emailRegex.test(email.value.trim())) {
      setFieldError(email, 'Ingresa un correo electrónico válido.');
      isValid = false;
    }

    if (!isValid) {
      if (status) {
        status.textContent = 'Revisa los campos marcados antes de enviar.';
        status.classList.add('error');
      }
      return;
    }

    if (status) {
      status.textContent = 'Tu mensaje fue enviado correctamente.';
      status.classList.remove('error');
    }
    contactForm.reset();
  });
}
