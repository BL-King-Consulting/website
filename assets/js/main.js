document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.mobile-nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  document.querySelectorAll('.has-dropdown > button').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      document.querySelectorAll('.has-dropdown > button').forEach(function (b) {
        b.setAttribute('aria-expanded', 'false');
      });
      btn.setAttribute('aria-expanded', expanded ? 'false' : 'true');
    });
  });

  // Escape closes any open dropdown and returns focus to its button (WCAG 2.1.1 / 1.4.13)
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape' && e.key !== 'Esc') return;
    var open = document.querySelector('.has-dropdown > button[aria-expanded="true"]');
    if (open) {
      open.setAttribute('aria-expanded', 'false');
      open.focus();
    } else if (toggle && nav && nav.classList.contains('nav-open')) {
      nav.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    }
  });
});
