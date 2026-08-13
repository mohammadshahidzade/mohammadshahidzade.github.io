(() => {
  const root = document.documentElement;
  const savedTheme = localStorage.getItem('theme');
  const preferredLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  root.dataset.theme = savedTheme || (preferredLight ? 'light' : 'dark');

  const themeButton = document.querySelector('.theme-toggle');
  themeButton?.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    localStorage.setItem('theme', next);
  });

  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  menuButton?.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    nav?.classList.toggle('open', !isOpen);
  });
  nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  }));

  const header = document.querySelector('.site-header');
  const setHeader = () => header?.classList.toggle('scrolled', window.scrollY > 16);
  setHeader();
  window.addEventListener('scroll', setHeader, { passive: true });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -35px' });
  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

  const sections = [...document.querySelectorAll('main section[id]')];
  const navLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];
  if (sections.length && navLinks.length) {
    const sectionObserver = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${visible.target.id}`));
    }, { rootMargin: '-30% 0px -60%', threshold: [0, .2, .5] });
    sections.forEach((section) => sectionObserver.observe(section));
  }

  const year = document.querySelector('#year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
