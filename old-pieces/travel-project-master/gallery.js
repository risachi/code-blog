window.onload = function() {

  var IMAGE_DIR = "pdximages/";
  
  var slides = [
    "mtHoodLake.jpg",
    "multnomah.jpg",
    "haystack.jpg",
    "portlandHill.jpg",
    "portlandDusk.jpg",
    "portlandHood.jpg",
    "portlandTheater.jpg",
    "timberline.jpg",
    "whitestag.jpg"
  ];

  slides.current = 0;

  var img = document.getElementById('gallery');
  if (img) {
    setInterval(function() {
      img.src = IMAGE_DIR + slides[slides.current++];
      if (slides.current === slides.length) {
        slides.current = 0;
      }
    }, 4000);
  }
};
