
// slider js
 var $carousel = $('[data-owl-carousel]');
 if ($carousel.length) {
     $carousel.each(function (index, el) {
         $(this).owlCarousel($(this).data('owl-carousel'));
     });
 }


  $(function() {
    $('.scroll-down').click(function() {
      $('html, body').animate({scrollTop: $('section.about').offset().top }, 'slow');
      return false;
    });
  });



// header link
  document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    navLinks.forEach(link => {
      const linkHref = link.getAttribute("href").trim();

      // Remove existing active class (if any)
      link.classList.remove("active");

      // Match current page
      if (linkHref === currentPage) {
        link.classList.add("active");
      }
    });
  });

   




 



