/**
 * Áp theme trước first paint — tránh flash nền trắng khi reload.
 * Load đầu tiên trong <head>, trước Tailwind và CSS trang.
 */
(function (w, d) {
  var BG_LIGHT = 'hsl(30, 25%, 98%)';
  var BG_DARK = 'hsl(220, 20%, 6%)';

  function prefersDark() {
    try {
      var stored = w.localStorage.getItem('theme');
      if (stored === 'dark') return true;
      if (stored === 'light') return false;
    } catch (e) {}
    return w.matchMedia && w.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function apply(dark) {
    var html = d.documentElement;
    html.classList.toggle('dark', dark);
    html.style.colorScheme = dark ? 'dark' : 'light';
    html.style.backgroundColor = dark ? BG_DARK : BG_LIGHT;
  }

  apply(prefersDark());

  w.WaveTheme = {
    prefersDark: prefersDark,
    apply: apply,
  };
})(window, document);
