const header = document.querySelector('.site-header');
  const btn    = document.getElementById('nav-toggle');
  const nav    = document.getElementById('nav');

function closeMenu() {
    header.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');
  }

  btn.addEventListener('click', () => {
    const open = header.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // 點連結後關閉
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', closeMenu);
  });

  // 按 Esc 關閉
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  // 視窗放大回桌機時重置狀態
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) closeMenu();
  });

  document.addEventListener('click', (e) => {
    if (!header.contains(e.target)) closeMenu();
  });
