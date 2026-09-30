const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function setupReveal() {
  const items = document.querySelectorAll('[data-reveal]');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('in'));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -5% 0px' },
  );
  items.forEach((el) => observer.observe(el));
}

// Close the language menu when clicking elsewhere.
function setupLangMenu() {
  const menu = document.querySelector('.lang-switch details');
  if (!menu) return;
  document.addEventListener('click', (event) => {
    if (menu.open && event.target instanceof Node && !menu.contains(event.target)) menu.open = false;
  });
}

document.addEventListener('astro:page-load', () => {
  document.documentElement.classList.add('js');
  setupReveal();
  setupLangMenu();
});
document.addEventListener('astro:after-swap', () => document.documentElement.classList.add('js'));
