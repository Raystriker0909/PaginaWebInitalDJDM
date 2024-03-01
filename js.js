document.getElementById("botonRegresar").addEventListener("click", function() {
  window.history.back(); 
  window.close(); 
});

document.addEventListener("DOMContentLoaded", function() {
    var image = document.querySelector(".interiordis");
    setTimeout(function() {
      image.classList.add("show");
    }, 100);
  });
  