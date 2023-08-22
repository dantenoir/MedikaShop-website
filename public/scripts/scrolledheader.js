window.addEventListener("scroll", function() {
    var logoMenu = document.getElementsByClassName("logo-menu")[0];
    var logoContainer = document.getElementsByClassName("logo-container")[0];
  
    if (window.pageYOffset > 0) {
      logoMenu.classList.add("small", "transparent");
      logoContainer.classList.add("small");
    } else {
      logoMenu.classList.remove("small", "transparent");
      logoContainer.classList.remove("small");
    }
  });
  
  const mobileMenuButton = document.getElementById('mobileMenuButton');
  const menu = document.querySelector('.menu');
  
  mobileMenuButton.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
  
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      menu.classList.remove('active');
    }
  });