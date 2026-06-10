const totalPages = 21;

const pageFlip = new St.PageFlip(document.getElementById("book"), {
  width: 760,
  height: 760,
  size: "stretch",
  minWidth: 300,
  maxWidth: 760,
  minHeight: 300,
  maxHeight: 760,
  showCover: false,
  usePortrait: true,
  drawShadow: true,
  maxShadowOpacity: 0.55,
  flippingTime: 900,
  mobileScrollSupport: false,
  swipeDistance: 30
});

pageFlip.loadFromHTML(document.querySelectorAll(".page"));

const counter = document.getElementById("counter");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateCounter(){
  const current = pageFlip.getCurrentPageIndex() + 1;
  counter.textContent = `Página ${current} / ${totalPages}`;
}

nextBtn.onclick = () => pageFlip.flipNext();
prevBtn.onclick = () => pageFlip.flipPrev();

document.getElementById("firstBtn").onclick = () => pageFlip.turnToPage(0);

document.getElementById("fullscreenBtn").onclick = () => {
  if(!document.fullscreenElement){
    document.documentElement.requestFullscreen();
  }else{
    document.exitFullscreen();
  }
};

pageFlip.on("flip", updateCounter);

document.addEventListener("keydown", e => {
  if(e.key === "ArrowRight") pageFlip.flipNext();
  if(e.key === "ArrowLeft") pageFlip.flipPrev();
});

updateCounter();
