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
      .header-actions-group{align-items:center;}
      .header-actions-group .header-action-control{height:2.25rem;min-height:2.25rem;box-sizing:border-box;}
      .header-actions-group #lang-switch{align-items:stretch;padding:0.125rem;}
      .header-actions-group #lang-switch .lang-switch-btn{height:100%;min-height:0;align-self:stretch;}
      .header-actions-group .header-action-control.btn-accent{line-height:1;}
      .lang-switch-btn.is-active{background:hsl(var(--foreground));color:hsl(var(--background));}
      .dark .light-only{display:none;}
      html:not(.dark) .dark-only{display:none;}
      .brand-logo{background:#fff;object-fit:contain;}

      .mobile-header-actions{align-items:center;}
      .mobile-header-actions #lang-switch-mobile{height:2.5rem;box-sizing:border-box;align-items:stretch;}
      .mobile-header-actions #lang-switch-mobile .lang-switch-btn{height:100%;min-height:0;align-self:stretch;}
      .mobile-header-actions .mobile-menu-toggle{width:2.5rem;height:2.5rem;flex-shrink:0;box-sizing:border-box;}

      .mobile-menu-icon{display:flex;flex-direction:column;justify-content:center;gap:5px;width:18px;height:14px;}
      .mobile-menu-bar{display:block;height:1.5px;width:100%;background:hsl(var(--foreground));border-radius:1px;transition:transform .25s ease,opacity .2s ease;}
      .mobile-menu-toggle[aria-expanded="true"] .mobile-menu-bar:nth-child(1){transform:translateY(6.5px) rotate(45deg);}
      .mobile-menu-toggle[aria-expanded="true"] .mobile-menu-bar:nth-child(2){opacity:0;transform:scaleX(0);}
      .mobile-menu-toggle[aria-expanded="true"] .mobile-menu-bar:nth-child(3){transform:translateY(-6.5px) rotate(-45deg);}

      .mobile-menu{position:fixed;inset:0;z-index:60;pointer-events:none;visibility:hidden;}
      .mobile-menu.is-open{pointer-events:auto;visibility:visible;}
      .mobile-menu-backdrop{position:absolute;inset:0;background:hsl(var(--foreground)/.35);opacity:0;transition:opacity .3s ease;}
      .mobile-menu.is-open .mobile-menu-backdrop{opacity:1;}
      .mobile-menu-panel{position:absolute;top:0;right:0;bottom:0;width:min(100%,20rem);max-width:100%;display:flex;flex-direction:column;background:hsl(var(--background));border-left:1px solid hsl(var(--border));box-shadow:-12px 0 40px -12px hsl(var(--foreground)/.15);transform:translateX(100%);transition:transform .35s cubic-bezier(.16,1,.3,1);}
      .mobile-menu.is-open .mobile-menu-panel{transform:translateX(0);}
      .mobile-menu-panel-head{display:flex;align-items:center;justify-content:space-between;gap:.75rem;padding:1rem 1rem .75rem;border-bottom:1px solid hsl(var(--border));}
      .mobile-menu-nav{flex:1;overflow-y:auto;padding:.75rem 1rem;display:flex;flex-direction:column;gap:.25rem;}
      .mobile-menu-link{display:flex;align-items:center;padding:.75rem 1rem;font-size:1rem;font-weight:500;border-radius:.5rem;color:hsl(var(--foreground));transition:background .2s ease;}
      .mobile-menu-link:hover{background:hsl(var(--muted)/.6);}
      .mobile-menu-link.nav-link-active{background:hsl(var(--muted));color:hsl(var(--foreground));}
      .mobile-menu-panel-foot{margin-top:auto;padding:1rem;border-top:1px solid hsl(var(--border));display:flex;flex-direction:column;gap:1rem;}
      .mobile-menu-cta{margin-top:.25rem;}
      body.mobile-menu-open{overflow:hidden;}
    `;
    document.head.appendChild(style);
  }

  const base = new URL('.', window.location.href).href;

  function applyTheme(dark) {
    const html = document.documentElement;
    html.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }

  function initTheme() {
    const html = document.documentElement;
    const stored = localStorage.getItem('theme');
    if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      html.classList.add('dark');
    }
    document.querySelectorAll('#theme-toggle, #theme-toggle-mobile').forEach((toggle) => {
      if (!toggle || toggle.dataset.bound) return;
      toggle.dataset.bound = '1';
      toggle.addEventListener('click', () => {
        applyTheme(!html.classList.contains('dark'));
      });
    });
  }

  function syncLangButtons(lang) {
    document.querySelectorAll('.lang-switch-btn').forEach((b) => {
      const active = b.dataset.lang === lang;
      b.classList.toggle('is-active', active);
      b.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  function initLangSwitch() {
    const stored = localStorage.getItem('lang-ui');
    if (stored === 'en') syncLangButtons('en');

    document.querySelectorAll('.lang-switch').forEach((langSwitch) => {
      if (langSwitch.dataset.bound) return;
      langSwitch.dataset.bound = '1';
      langSwitch.querySelectorAll('.lang-switch-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          syncLangButtons(btn.dataset.lang);
          localStorage.setItem('lang-ui', btn.dataset.lang);
        });
      });
    });
  }

  function initMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const toggle = document.getElementById('mobile-menu-toggle');
    if (!menu || !toggle || toggle.dataset.bound) return;
    toggle.dataset.bound = '1';

    const panel = document.getElementById('mobile-menu-panel');
    let lastFocus = null;

    function setOpen(open) {
      menu.classList.toggle('is-open', open);
      menu.setAttribute('aria-hidden', open ? 'false' : 'true');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.classList.toggle('mobile-menu-open', open);
      if (open) {
        lastFocus = document.activeElement;
        const first = panel?.querySelector('.mobile-menu-close, .mobile-menu-link');
        first?.focus();
      } else {
        if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
        else toggle.focus();
        lastFocus = null;
      }
    }

    toggle.addEventListener('click', () => {
      setOpen(!menu.classList.contains('is-open'));
    });

    menu.querySelectorAll('[data-mobile-menu-close]').forEach((el) => {
      el.addEventListener('click', () => setOpen(false));
    });

    menu.querySelectorAll('.mobile-menu-link').forEach((link) => {
      link.addEventListener('click', () => setOpen(false));
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) setOpen(false);
    });

    window.addEventListener('resize', () => {
      if (window.matchMedia('(min-width: 1024px)').matches && menu.classList.contains('is-open')) {
        setOpen(false);
      }
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
      initMobileMenu();
      setActiveNav();
      document.dispatchEvent(new CustomEvent('wave-layout-ready'));
    })
    .catch((err) => {
      console.error('[Wave Digital] Layout load error:', err);
      headerEl.innerHTML = '<p class="p-4 text-sm text-red-600">Không tải được header. Vui lòng refresh trang.</p>';
    });
})();
