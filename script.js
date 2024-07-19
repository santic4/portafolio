document.addEventListener("DOMContentLoaded", function() {
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  mobileMenuToggle.addEventListener("click", function() {
    navLinks.classList.toggle("show");
  });

  // Descarga de PDF
  const descargarBtn = document.getElementById('descargarBtn');
  const pdfLink = document.getElementById('pdfLink');

  descargarBtn?.addEventListener('click', function() {
    pdfLink?.click();
  });

  const descargarBtnEsp = document.getElementById('descargar-btn-esp');
  const pdfLinkEsp = document.getElementById('pdfLinkEsp');

  descargarBtnEsp?.addEventListener('click', function() {
    pdfLinkEsp?.click();
  });
});