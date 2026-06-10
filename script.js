$(document).ready(function () {

  const totalPages = 21;

  function calcularTamanoLibro() {
    const altoDisponible = window.innerHeight - 170;
    const anchoDisponible = window.innerWidth - 150;

    let ancho = Math.min(anchoDisponible, 1250);
    let alto = Math.min(altoDisponible, 820);

    return {
      width: ancho,
      height: alto
    };
  }

  const size = calcularTamanoLibro();

  $("#flipbook").turn({
    width: size.width,
    height: size.height,
    autoCenter: true,
    display: "single",
    acceleration: true,
    gradients: true,
    elevation: 90,
    duration: 1200,
    pages: totalPages
  });

  function updateCounter() {
    const page = $("#flipbook").turn("page");
    $("#counter").text(`Página ${page} / ${totalPages}`);
  }

  $("#nextBtn").on("click", function () {
    $("#flipbook").turn("next");
  });

  $("#prevBtn").on("click", function () {
    $("#flipbook").turn("previous");
  });

  $("#firstBtn").on("click", function () {
    $("#flipbook").turn("page", 1);
  });

  $("#fullscreenBtn").on("click", function () {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  });

  $("#flipbook").bind("turned", function () {
    updateCounter();
  });

  $(document).keydown(function (e) {
    if (e.key === "ArrowRight") $("#flipbook").turn("next");
    if (e.key === "ArrowLeft") $("#flipbook").turn("previous");
  });

  $(window).on("resize", function () {
    const newSize = calcularTamanoLibro();
    $("#flipbook").turn("size", newSize.width, newSize.height);
  });

  updateCounter();

});
