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
  