const header = document.getElementById('site-header');
const menuToggle = document.getElementById('menu-toggle');
const primaryNav = document.getElementById('primary-nav');

if (menuToggle && header && primaryNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = header.classList.toggle('menu-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  primaryNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      header.classList.remove('menu-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const faqButtons = document.querySelectorAll('.faq-question');

faqButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const currentItem = button.closest('.faq-item');
    const isOpen = currentItem.classList.contains('open');

    faqButtons.forEach((btn) => {
      btn.setAttribute('aria-expanded', 'false');
      btn.closest('.faq-item').classList.remove('open');
    });

    if (!isOpen) {
      button.setAttribute('aria-expanded', 'true');
      currentItem.classList.add('open');
    }
  });
});

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());
