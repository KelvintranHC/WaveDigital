/**
 * Load Vietnamese HTML pages under /en/ with correct theme + asset paths.
 */
(function () {
  var root = new URL('../', window.location.href).href;
  var page = (window.__WAVE_EN_PAGE__ || 'index') + '.html';
  var qs = window.location.search || '';
  var hash = window.location.hash || '';

  try {
    localStorage.setItem('lang-ui', 'en');
  } catch (e) {}

  function prepareHtml(html) {
    html = html.replace(/<html lang="[^"]*">/, '<html lang="en" data-lang="en">');
    if (!/<base\s/i.test(html)) {
      html = html.replace(/<head([^>]*)>/i, '<head$1><base href="' + root + '">');
    }
    return html;
  }

  function afterInject() {
    if (window.WaveTheme) {
      window.WaveTheme.apply(window.WaveTheme.prefersDark());
    }
    if (window.WaveI18n) {
      window.WaveI18n.bootEarly();
      window.WaveI18n.init();
    }
  }

  fetch(root + page + qs, { credentials: 'same-origin' })
    .then(function (r) {
      if (!r.ok) throw new Error('fetch failed');
      return r.text();
    })
    .then(function (html) {
      document.open();
      document.write(prepareHtml(html));
      document.close();
      if (hash) window.location.hash = hash;
      afterInject();
    })
    .catch(function () {
      document.body.innerHTML =
        '<p style="font-family:system-ui;padding:2rem;color:#fff;background:#0d1117;min-height:100vh">Unable to load English page. <a href="' +
        root +
        'index.html">Return home</a>.</p>';
    });
})();
