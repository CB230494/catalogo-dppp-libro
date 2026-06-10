$(document).ready(function () {

  const totalPages = 21;

  function calcularTamanoLibro() {
    const altoDisponible = window.innerHeight - 190;
    const anchoDisponible = window.innerWidth - 180;

    /*
      Tus páginas son cuadradas.
      Para no cortar información usamos proporción 1:1.
      Esto elimina el blanco causado por marcos rectangulares.
    */
    let pageSize = Math.min(altoDisponible, anchoDisponible);

    if (pageSize > 820) pageSize = 820;
    if (pageSize < 330) pageSize = 330;

    return {
      width: pageSize,
      height: pageSize
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
