const enlacePDF = document.getElementById("pdfLink");
const botonDescargar = document.getElementById("descargarBtn");


botonDescargar.addEventListener('click', function() {
    enlacePDF.click();
});

const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
const navLinks = document.querySelector(".nav-links");

mobileMenuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
 
 mobileMenuToggle.classList.toggle('clicked');

});

