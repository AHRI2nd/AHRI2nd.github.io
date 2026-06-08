// ─────────────────────────────────────────
// Reveal on Scroll
// ─────────────────────────────────────────
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach((el) => {
  // Elements already in viewport on load → show immediately
  const rect = el.getBoundingClientRect();
  if (rect.top < window.innerHeight - 40 && rect.bottom > 0) {
    el.classList.add('visible');
  } else {
    observer.observe(el);
  }
});

// ─────────────────────────────────────────
// Nav background on scroll
// ─────────────────────────────────────────
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
}, { passive: true });

// ─────────────────────────────────────────
// Smooth active nav highlight
// ─────────────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navAnchors.forEach((a) => {
          a.style.color = a.getAttribute('href') === `#${entry.target.id}`
            ? 'var(--accent)'
            : '';
        });
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach((s) => sectionObserver.observe(s));
