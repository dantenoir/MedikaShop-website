document.addEventListener("DOMContentLoaded", function() {
  const images = ['/images/img1.jpg', '/images/img2.jpg', '/images/img3.jpg', '/images/img4.jpg', '/images/img5.jpg'];
  const headings = ['Medikashop', 'Aparatura', 'Produse naturiste', 'Beauty', 'Testeaza-te!'];
  const descrieri = ['Medikashop este un magazin online de aparatura medicala, teste. Gama noastra variata de produse face ca beneficiarii sa poata face toate cumparaturile dintr-un singur loc. Portofoliul nostru vast are ca principiu calitate inalta a produselor. Fiabilitatea magazinului noastu il face sa fie potrivit pentru spitale, clinici, laboratoare, saloane si pentru pacientii de acasa.',
                     'Tehnologiile noastre de ultima generatie vin in ajutorul pacientiilor in diagnosticarea si tratarea diverselor afectiuni. Ne dorim sa facem ca aceste etape sa fie cat mai usor si rapid de parcurs.', 
                     'Medikashop se preteaza si pe nevoile oamenilor de acasa, avand o multitudine de produse naturiste, pentru imunitate, obezitate, depresie, anxietate, dureri musculare si articulare si pentru multe alte afectiuni.',
                     'Zona de beauty face parte din magazinul nostru cu produse 100% bio.',
                     'Usor si rapid cu ajutorul testelor noastre de inalta calitate.'];
  const hrefs = ['descriere.html', 'aparatura.html', '', 'beauty.html', 'teste.html'];
  let currentIndex = 0;
  const currentImage = document.getElementById('currentImage');
  const overlay = document.querySelector('.overlay');

  function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    fadeOut(currentImage, () => {
      currentImage.src = images[currentIndex];
      fadeIn(currentImage);
    });
    fadeOut(overlay, () => {
      const overlayHeading = document.querySelector('.overlay h2');
      const overlayParagraph = document.querySelector('.overlay p');
      const overlayhref = document.querySelector('.overlay a');
      overlayHeading.textContent = headings[currentIndex];
      overlayParagraph.textContent = descrieri[currentIndex];
      overlayhref.href = hrefs[currentIndex];
      fadeIn(overlay);
    });
  }

  function showPrevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    fadeOut(currentImage, () => {
      currentImage.src = images[currentIndex];
      fadeIn(currentImage);
    });
    fadeOut(overlay, () => {
      const overlayHeading = document.querySelector('.overlay h2');
      const overlayParagraph = document.querySelector('.overlay p');
      const overlayhref = document.querySelector('.overlay a');
      overlayHeading.textContent = headings[currentIndex];
      overlayParagraph.textContent = descrieri[currentIndex];
      overlayhref.href = hrefs[currentIndex];
      fadeIn(overlay);
    });
  }


  const imagesTeste = ['/images/test HBsAg.jpg', '/images/test HCV Ac.jpg', '/images/test HIV 1+2.jpg'];
  let currentIndexTeste = 0;
  const currentImageTeste = document.getElementById('currentImageTeste');

  function showNextImageTeste() {
    currentIndexTeste = (currentIndexTeste + 1) % imagesTeste.length;
    fadeOut(currentImageTeste, () => {
      currentImageTeste.src = imagesTeste[currentIndexTeste];
      fadeIn(currentImageTeste);
    });
  }
  
  function startImageSlideshow() {
    setInterval(showNextImage, 10000);
    setInterval(showNextImageTeste, 10000);
  }

  startImageSlideshow();

  function fadeOut(element, callback) {
    element.style.opacity = 0;
    element.style.transition = 'opacity 0.5s';
    setTimeout(callback, 500);
  }

  function fadeIn(element) {
    element.style.opacity = 1;
    element.style.transition = 'opacity 0.5s';
  }

  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const gallery = document.getElementsByClassName('gallery')[0];
  let timer;

  gallery.addEventListener('mouseenter', () => {
    timer = setTimeout(() => {
      prevButton.style.opacity = 1;
      nextButton.style.opacity = 1;
    }, 2000);
  });

  gallery.addEventListener('mouseleave', () => {
    clearTimeout(timer);
    prevButton.style.opacity = 0;
    nextButton.style.opacity = 0;
  });

  prevButton.addEventListener('click', showPrevImage);
  nextButton.addEventListener('click', showNextImage);
});

