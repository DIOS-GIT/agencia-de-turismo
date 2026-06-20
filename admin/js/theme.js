/* =========================================================
   Modo oscuro — compartido entre el sitio principal y el panel admin
   La detección inicial del tema vive como script en línea en el
   <head> de cada página (para evitar parpadeos). Este archivo solo
   contiene el botón de cambio y la sincronización del ícono.
   ========================================================= */

function updateThemeIcons(theme) {
    document.querySelectorAll('.theme-toggle-icon').forEach(function (icon) {
        icon.className = 'theme-toggle-icon fa-solid ' + (theme === 'dark' ? 'fa-sun' : 'fa-moon');
    });
}

function toggleTheme() {
    var current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    var next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateThemeIcons(next);
}

document.addEventListener('DOMContentLoaded', function () {
    var current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    updateThemeIcons(current);
});
