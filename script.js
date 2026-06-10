const totalPages = 21;
let currentPage = 1;
let isFlipping = false;

const pageImg = document.getElementById("pageImg");
const flipPage = document.getElementById("flipPage");
const flipImg = document.getElementById("flipImg");
const counter = document.getElementById("counter");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const firstBtn = document.getElementById("firstBtn");
const fullscreenBtn = document.getElementById("fullscreenBtn");

function pagePath(num){
  return `pages/Pagina-${String(num).padStart(2,"0")}.jpeg`;
}

function updateCounter(){
  counter.textContent = `Página ${currentPage} / ${totalPages}`;
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
}

function goNext(){
  if(isFlipping || currentPage >= totalPages) return;

  isFlipping = true;
  flipImg.src = pagePath(currentPage);
  flipPage.className = "page flip-page next";

  setTimeout(() => {
    currentPage++;
    pageImg.src = pagePath(currentPage);
    updateCounter();
  }, 480);

  setTimeout(() => {
    flipPage.className = "page flip-page";
    isFlipping = false;
  }, 1000);
}

function goPrev(){
  if(isFlipping || currentPage <= 1) return;

  isFlipping = true;
  currentPage--;
  flipImg.src = pagePath(currentPage);
  pageImg.src = pagePath(currentPage);
  flipPage.className = "page flip-page prev";

  setTimeout(() => {
    updateCounter();
  }, 480);

  setTimeout(() => {
    flipPage.className = "page flip-page";
    isFlipping = false;
  }, 1000);
}

nextBtn.addEventListener("click", goNext);
prevBtn.addEventListener("click", goPrev);

firstBtn.addEventListener("click", () => {
  if(isFlipping) return;
  currentPage = 1;
  pageImg.src = pagePath(currentPage);
  updateCounter();
});

fullscreenBtn.addEventListener("click", () => {
  if(!document.fullscreenElement){
    document.documentElement.requestFullscreen();
  }else{
    document.exitFullscreen();
  }
});

document.addEventListener("keydown", (e) => {
  if(e.key === "ArrowRight") goNext();
  if(e.key === "ArrowLeft") goPrev();
});

pageImg.src = pagePath(currentPage);
updateCounter();
