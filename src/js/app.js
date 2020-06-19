import '../style/tailwind.scss';
import '../style/dashboard.scss';

if (module.hot) {
  module.hot.accept();
}

(function () {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.removeAttribute('data-theme');
    localStorage.setItem('theme', '');
  }
})();

document.addEventListener('DOMContentLoaded', function () {
  let toggleSidebar = document.getElementById('toggle-sidebar');
  let toggleSidebarMobile = document.getElementById('toggle-sidebar-mobile');
  let sidebarDimmer = document.querySelector('div.sidebar-dimmer');
  let toggleTheme = document.getElementById('toggle-theme');

  toggleSidebar.addEventListener('click', function () {
    document.querySelector('aside.sidebar').classList.toggle('show');
  });

  sidebarDimmer.addEventListener('click', function() {
    document.querySelector('aside.sidebar').classList.toggle('mobile');
  });

  toggleSidebarMobile.addEventListener('click', function () {
    document.querySelector('aside.sidebar').classList.toggle('mobile');
  });

  toggleTheme.addEventListener('click', function () {
    let body = document.body;
    if (body.getAttribute('data-theme') === null) {
      body.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      return;
    }
    body.removeAttribute('data-theme');
    localStorage.setItem('theme', '');
  });

  setTimeout(() => {
    document.querySelector('div.preloader').remove();
  }, 575);
});
