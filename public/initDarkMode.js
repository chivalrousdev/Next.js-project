var setDarkStyles = function () {
  var root = document.documentElement;
  root.style.setProperty('--color-html', 'var(--color-cream)');
  root.style.setProperty('--color-html-bg', 'var(--color-almost-black)');
  root.style.setProperty('--color-cursor', 'var(--color-darker-gray)');
  root.style.setProperty('--color-cursor-highlight', 'var(--color-gray)');
  root.classList.add('isDark');
}

var setLightStyles = function () {
  var root = document.documentElement;
  root.style.setProperty('--color-html', 'var(--color-almost-black)');
  root.style.setProperty('--color-html-bg', 'var(--color-white)');
  root.style.setProperty('--color-cursor', 'var(--color-lighter-gray)');
  root.style.setProperty('--color-cursor-highlight', 'var(--color-gray)');
  root.classList.remove('isDark');
}

var initDarkMode = (function initDarkMode() {
  var storedTheme = localStorage.getItem('theme');

  let themeToUse = storedTheme;

  // NOTE: if their preference is stored as 'auto', get it from their system
  if (storedTheme === 'auto') {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) themeToUse = 'dark';
    if (window.matchMedia('(prefers-color-scheme: light)').matches) themeToUse = 'light';
  }

  if (themeToUse === 'dark') setDarkStyles();
  if (themeToUse === 'light') setLightStyles();
})();
