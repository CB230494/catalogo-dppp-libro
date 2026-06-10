$(document).ready(function () {

  const totalPages = 21;

  const bookWidth = $("#flipbook").width();
  const bookHeight = $("#flipbook").height();

  $("#flipbook").turn({
    width: bookWidth,
    height: bookHeight,
    autoCenter: true,
    display: "double",
    acceleration: true,
    gradients: true,
    elevation: 80,
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
    if (e.key === "ArrowRight") {
      $("#flipbook").turn("next");
    }

    if (e.key === "ArrowLeft") {
      $("#flipbook").turn("previous");
    }
  });

  updateCounter();

});
