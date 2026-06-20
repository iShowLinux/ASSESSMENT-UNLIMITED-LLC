document.addEventListener('DOMContentLoaded', function () {
  // Navbar scroll behavior
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // Close mobile menu when a link is clicked
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  const bsCollapse = navbarCollapse ? bootstrap.Collapse.getInstance(navbarCollapse) : null;

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (window.innerWidth < 992 && navbarCollapse.classList.contains('show')) {
        bootstrap.Collapse.getInstance(navbarCollapse).hide();
      }
    });
  });

  // Active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', function () {
    let current = '';
    sections.forEach(function (section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop - 150) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });
});
