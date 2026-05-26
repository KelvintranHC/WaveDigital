/**
 * Wave Digital — i18n (vi default, en via /en/ path + localStorage)
 */
(function (global) {
  const STORAGE_KEY = 'lang-ui';
  const SITE_ORIGIN = typeof location !== 'undefined' ? location.origin : '';
  const SITE_BASE = (typeof location !== 'undefined' && location.pathname.includes('/en/'))
    ? location.pathname.split('/en/')[0] + '/'
    : new URL('.', typeof location !== 'undefined' ? location.href : 'http://localhost/').href;

  let currentLang = 'vi';
  const viCache = new Map();

  function detectLang() {
    if (global.__WAVE_LANG_PRESET__) return global.__WAVE_LANG_PRESET__;
    const path = typeof location !== 'undefined' ? location.pathname : '';
    if (/\/en(\/|$)/.test(path)) return 'en';
    const stored = typeof localStorage !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
    if (stored === 'en' || stored === 'vn' || stored === 'vi') {
      return stored === 'vn' ? 'vi' : stored;
    }
    return 'vi';
  }

  function pageName() {
    let path = typeof location !== 'undefined' ? location.pathname : '';
    path = path.replace(/^\/en\/?/, '/').replace(/^\//, '');
    if (!path || path === 'en') return 'index';
    if (path.startsWith('case-studies')) return 'case-studies';
    if (path.startsWith('case-study')) return 'case-study';
    if (path.endsWith('index.html') || path === '') return 'index';
    return path.replace(/\.html$/, '').split('/').pop() || 'index';
  }

  function localePath(page, lang) {
    const file = page === 'index' ? 'index.html' : page + '.html';
    const root = (typeof location !== 'undefined' ? location.origin : '') + '/';
    if (lang === 'en') return root + 'en/' + file;
    return root + file;
  }

  function getMeta(lang) {
    const page = pageName();
    const byPage = global.WAVE_LOCALES?.[lang]?.metaByPage;
    if (byPage) return byPage[page] || byPage.index || {};
    return global.WAVE_LOCALES?.[lang]?.meta || {};
  }

  function cacheViDefaults() {
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (!key || viCache.has(key)) return;
      const attr = el.getAttribute('data-i18n-attr');
      if (attr) {
        viCache.set(key + '::' + attr, el.getAttribute(attr) || '');
      } else if (el.hasAttribute('data-i18n-html')) {
        viCache.set(key, el.innerHTML);
      } else {
        viCache.set(key, el.textContent);
      }
    });
  }

  function setElementText(el, value) {
    if (value == null) return;
    if (el.childElementCount > 0) {
      let applied = false;
      el.childNodes.forEach((node) => {
        if (node.nodeType === 3) {
          node.textContent = applied ? '' : value;
          applied = true;
        }
      });
      if (!applied) el.appendChild(document.createTextNode(value));
      return;
    }
    el.textContent = value;
  }

  function applyString(key, value, lang) {
    if (value == null) return;
    document.querySelectorAll('[data-i18n="' + key + '"]').forEach((el) => {
      const attr = el.getAttribute('data-i18n-attr');
      if (lang === 'vi') {
        const cached = viCache.get(attr ? key + '::' + attr : key);
        if (cached == null) return;
        if (attr) {
          el.setAttribute(attr, cached);
          return;
        }
        if (el.hasAttribute('data-i18n-html')) el.innerHTML = cached;
        else setElementText(el, cached);
        return;
      }
      if (attr) {
        el.setAttribute(attr, value);
        return;
      }
      if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = value;
        return;
      }
      if (el.childElementCount > 0 && !el.hasAttribute('data-i18n-leaf')) return;
      setElementText(el, value);
    });
  }

  function applyLocale(lang) {
    if (!global.WAVE_LOCALES) return;
    currentLang = lang;
    const strings = global.WAVE_LOCALES[lang]?.strings || {};
    Object.keys(strings).forEach((key) => applyString(key, strings[key], lang));

    const selectors = global.WAVE_LOCALES[lang]?.selectors || [];
    selectors.forEach((item) => {
      const htmlContent =
        typeof item.innerHTML === 'string'
          ? item.innerHTML
          : typeof item.html === 'string' && item.html.includes('<')
            ? item.html
            : null;
      const textContent = item.text != null ? item.text : typeof item.html === 'string' && !item.html.includes('<') ? item.html : null;
      if (lang === 'en' && item.attr && textContent == null && htmlContent == null) return;
      if (lang === 'en' && !item.attr && textContent == null && htmlContent == null) return;

      document.querySelectorAll(item.sel).forEach((el) => {
        const key = 'sel::' + item.sel;
        if (lang === 'vi') {
          const cached = viCache.get(key);
          if (cached != null) {
            if (item.attr) el.setAttribute(item.attr, cached);
            else if (htmlContent != null || (item.html === true && cached)) el.innerHTML = cached;
            else setElementText(el, cached);
          }
          return;
        }
        if (!viCache.has(key)) {
          if (item.attr) viCache.set(key, el.getAttribute(item.attr) || '');
          else if (htmlContent != null) viCache.set(key, el.innerHTML);
          else viCache.set(key, el.textContent);
        }
        if (item.attr) {
          el.setAttribute(item.attr, textContent || '');
        } else if (htmlContent != null) {
          el.innerHTML = htmlContent;
        } else if (textContent != null) {
          setElementText(el, textContent);
        }
      });
    });

    const meta = getMeta(lang);
    if (meta.title) document.title = meta.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc && meta.description) desc.setAttribute('content', meta.description);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && meta.ogTitle) ogTitle.setAttribute('content', meta.ogTitle);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && meta.ogDescription) ogDesc.setAttribute('content', meta.ogDescription);

    document.documentElement.lang = lang === 'en' ? 'en' : 'vi';
    document.documentElement.setAttribute('data-lang', lang);

    injectHreflang();
    syncCaseStudies(lang);
    localizeLinks(lang);
    applyQuoteReplacements(lang);
    document.dispatchEvent(new CustomEvent('wave-i18n-applied', { detail: { lang } }));
  }

  function applyQuoteReplacements(lang) {
    const pairs = global.WAVE_LOCALES?.en?.quoteReplacements;
    if (!pairs?.length) return;
    document.querySelectorAll('#case-studies p.text-sm.text-muted-foreground').forEach((el) => {
      if (!el.dataset.viText) el.dataset.viText = el.textContent;
      if (lang === 'vi') {
        el.textContent = el.dataset.viText;
        return;
      }
      let text = el.dataset.viText;
      pairs.forEach(([vi, en]) => {
        if (text.includes(vi)) text = text.replace(vi, en);
      });
      if (text !== el.dataset.viText) el.textContent = text;
    });
  }

  function localizeLinks(lang) {
    document.querySelectorAll('a[href]').forEach((a) => {
      if (!a.dataset.hrefVi) a.dataset.hrefVi = a.getAttribute('href') || '';
      const base = a.dataset.hrefVi;
      if (!base || base.startsWith('http') || base.startsWith('tel:') || base === '#') return;
      if (lang === 'en') {
        if (base === 'index.html' || base.startsWith('index.html#')) {
          a.setAttribute('href', 'en/' + base);
        } else if (base === 'case-studies.html' || base.startsWith('case-studies.html')) {
          a.setAttribute('href', 'en/case-studies.html' + (base.includes('#') ? base.slice(base.indexOf('#')) : ''));
        } else if (base.startsWith('case-study.html')) {
          a.setAttribute('href', 'en/' + base);
        }
      } else {
        a.setAttribute('href', base);
      }
    });
  }

  function injectHreflang() {
    const page = pageName();
    const viUrl = new URL(localePath(page, 'vi'), SITE_ORIGIN || 'http://localhost').href;
    const enUrl = new URL(localePath(page, 'en'), SITE_ORIGIN || 'http://localhost').href;
    ['wave-hreflang-vi', 'wave-hreflang-en', 'wave-hreflang-x', 'wave-canonical'].forEach((id) => {
      document.getElementById(id)?.remove();
    });
    const head = document.head;
    if (!head) return;
    [
      { id: 'wave-hreflang-vi', rel: 'alternate', hreflang: 'vi', href: viUrl },
      { id: 'wave-hreflang-en', rel: 'alternate', hreflang: 'en', href: enUrl },
      { id: 'wave-hreflang-x', rel: 'alternate', hreflang: 'x-default', href: viUrl },
      { id: 'wave-canonical', rel: 'canonical', href: currentLang === 'en' ? enUrl : viUrl },
    ].forEach(({ id, rel, hreflang, href }) => {
      const link = document.createElement('link');
      link.id = id;
      link.rel = rel;
      if (hreflang) link.hreflang = hreflang;
      link.href = href;
      head.appendChild(link);
    });
  }

  function syncCaseStudies(lang) {
    if (!global.CASE_STUDIES) return;
    const cards = document.querySelectorAll('#cs-grid .cs-card, .csd-related');
    cards.forEach((card) => {
      const href = card.getAttribute('href') || '';
      const m = href.match(/slug=([^&]+)/);
      if (!m) return;
      const slug = m[1];
      const base = global.CASE_STUDIES[slug];
      if (!base) return;
      const en = global.CASE_STUDIES_EN?.[slug];
      const c = lang === 'en' && en ? Object.assign({}, base, en) : base;
      const badge = card.querySelector('.cs-badge');
      const title = card.querySelector('h3, .text-sm.font-medium');
      const desc = card.querySelector('.line-clamp-2, p.text-sm.text-muted-foreground');
      if (badge && c.category) badge.textContent = c.category;
      if (title && c.title) title.textContent = c.title;
      if (desc) {
        const sub = c.subtitle || (card.querySelector('p')?.dataset?.viSubtitle);
        if (lang === 'vi' && card.dataset.viSubtitle) desc.textContent = card.dataset.viSubtitle;
        else if (c.subtitle) desc.textContent = c.subtitle;
      }
      if (!card.dataset.viSubtitle && base.subtitle) {
        card.dataset.viSubtitle = base.subtitle.replace(/<[^>]+>/g, '');
      }
      const metrics = card.querySelectorAll('.cs-metric');
      if (!card.dataset.viMetrics && metrics.length) {
        card.dataset.viMetrics = JSON.stringify([...metrics].map((m) => m.textContent));
      }
      if (lang === 'en' && en?.cardMetrics) {
        metrics.forEach((el, i) => {
          if (en.cardMetrics[i]) el.textContent = en.cardMetrics[i];
        });
      } else if (lang === 'vi' && card.dataset.viMetrics) {
        const vi = JSON.parse(card.dataset.viMetrics);
        metrics.forEach((el, i) => {
          if (vi[i]) el.textContent = vi[i];
        });
      }
    });
  }

  function navigateToLang(lang) {
    const page = pageName();
    const target = localePath(page, lang);
    const qs = typeof location !== 'undefined' ? location.search : '';
    const hash = typeof location !== 'undefined' ? location.hash : '';
    if (typeof localStorage !== 'undefined') localStorage.setItem(STORAGE_KEY, lang === 'en' ? 'en' : 'vn');
    const next = target + qs + hash;
    const current = typeof location !== 'undefined' ? location.pathname + location.search + location.hash : '';
    const nextPath = next.replace(SITE_ORIGIN, '');
    if (typeof location !== 'undefined' && current !== nextPath && !current.endsWith(nextPath)) {
      location.href = next;
    } else {
      applyLocale(lang);
    }
  }

  function init() {
    currentLang = detectLang();
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, currentLang === 'en' ? 'en' : 'vn');
    }
    cacheViDefaults();
    if (currentLang === 'en') applyLocale('en');
    injectHreflang();
  }

  function bootEarly() {
    const lang = detectLang();
    document.documentElement.lang = lang === 'en' ? 'en' : 'vi';
    document.documentElement.setAttribute('data-lang', lang);
  }

  global.WaveI18n = {
    getLang: () => currentLang,
    setLang: navigateToLang,
    apply: applyLocale,
    init,
    bootEarly,
    pageName,
    localePath,
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  document.addEventListener('wave-layout-ready', () => {
    cacheViDefaults();
    const lang = detectLang();
    if (lang === 'en') applyLocale('en');
  });

  global.addEventListener?.('wave-case-study-rendered', () => {
    if (currentLang === 'en') applyLocale('en');
  });
})(typeof window !== 'undefined' ? window : globalThis);
