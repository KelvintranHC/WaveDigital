/**
 * Wave Digital — shared header & footer
 * Usage: <div id="site-header"></div> … <div id="site-footer"></div>
 *        <script src="shared-layout.js" data-page="home|case-studies|case-study"></script>
 */
(function () {
  const script = document.currentScript;
  const pageId = script?.dataset?.page || '';
  const headerEl = document.getElementById('site-header');
  const footerEl = document.getElementById('site-footer');
  if (!headerEl || !footerEl) return;

  if (document.body) document.body.classList.add('site-has-fixed-header');

  if (!document.getElementById('wave-layout-styles')) {
    const style = document.createElement('style');
    style.id = 'wave-layout-styles';
    style.textContent = `
      #site-header{position:fixed;top:0;left:0;right:0;z-index:50;width:100%;}
      #site-header header{width:100%;border-bottom:1px solid hsl(var(--border));background:hsl(var(--background)/.92);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);}
      body.site-has-fixed-header{padding-top:4rem;}
      .nav-link-active{background:hsl(var(--muted));color:hsl(var(--foreground));}
      .lang-switch{gap:.125rem;}
      .lang-switch-btn{display:inline-flex;align-items:center;justify-content:center;min-width:2.25rem;height:1.75rem;padding:0 .5rem;font-size:11px;font-weight:600;letter-spacing:.06em;border-radius:.25rem;color:hsl(var(--muted-foreground));transition:color .2s,background .2s;}
      .lang-switch-btn.is-active{background:hsl(var(--foreground));color:hsl(var(--background));}
      .dark .light-only{display:none;}
      html:not(.dark) .dark-only{display:none;}
    `;
    document.head.appendChild(style);
  }

  const base = new URL('.', window.location.href).href;

  function initTheme() {
    const html = document.documentElement;
    const stored = localStorage.getItem('theme');
    if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      html.classList.add('dark');
    }
    const toggle = document.getElementById('theme-toggle');
    if (toggle && !toggle.dataset.bound) {
      toggle.dataset.bound = '1';
      toggle.addEventListener('click', () => {
        html.classList.toggle('dark');
        localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
      });
    }
  }

  function initLangSwitch() {
    const langSwitch = document.getElementById('lang-switch');
    if (!langSwitch || langSwitch.dataset.bound) return;
    langSwitch.dataset.bound = '1';
    const buttons = langSwitch.querySelectorAll('.lang-switch-btn');
    const stored = localStorage.getItem('lang-ui');
    if (stored === 'en') {
      buttons.forEach((b) => {
        const active = b.dataset.lang === 'en';
        b.classList.toggle('is-active', active);
        b.setAttribute('aria-pressed', active ? 'true' : 'false');
      });
    }
    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        buttons.forEach((b) => {
          const active = b === btn;
          b.classList.toggle('is-active', active);
          b.setAttribute('aria-pressed', active ? 'true' : 'false');
        });
        localStorage.setItem('lang-ui', btn.dataset.lang);
      });
    });
  }

  function setActiveNav() {
    if (!pageId) return;
    const map = {
      home: null,
      'case-studies': 'case-studies',
      'case-study': 'case-studies',
    };
    const key = map[pageId];
    if (!key) return;
    document.querySelectorAll('[data-nav]').forEach((link) => {
      const active = link.getAttribute('data-nav') === key;
      link.classList.toggle('nav-link-active', active);
      if (active) link.setAttribute('aria-current', 'page');
    });
  }

  async function loadPartial(name) {
    const url = new URL('partials/' + name + '.html', base).href;
    const res = await fetch(url);
    if (!res.ok) throw new Error('Failed to load ' + name);
    return res.text();
  }

  Promise.all([loadPartial('header'), loadPartial('footer')])
    .then(([headerHtml, footerHtml]) => {
      headerEl.innerHTML = headerHtml;
      footerEl.innerHTML = footerHtml;
      document.body.classList.add('site-has-fixed-header');
      initTheme();
      initLangSwitch();
      setActiveNav();
      document.dispatchEvent(new CustomEvent('wave-layout-ready'));
    })
    .catch((err) => {
      console.error('[Wave Digital] Layout load error:', err);
      headerEl.innerHTML = '<p class="p-4 text-sm text-red-600">Không tải được header. Vui lòng refresh trang.</p>';
    });
})();
