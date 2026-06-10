const totalPages = 21;
let currentPage = 1;
let locked = false;

const pageBox = document.getElementById("pageBox");
const pageImg = document.getElementById("pageImg");
const counter = document.getElementById("counter");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const firstBtn = document.getElementById("firstBtn");
const fullscreenBtn = document.getElementById("fullscreenBtn");

function path(num){
  return `pages/Pagina-${String(num).padStart(2, "0")}.jpeg`;
}

function update(){
  pageImg.src = path(currentPage);
  counter.textContent = `Página ${currentPage} / ${totalPages}`;
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
}

function animate(direction, nextPage){
  if(locked) return;
  locked = true;

  pageBox.classList.remove("flip-next", "flip-prev");
  void pageBox.offsetWidth;

  pageBox.classList.add(direction);

  setTimeout(() => {
    currentPage = nextPage;
    update();
  }, 320);

  setTimeout(() => {
    pageBox.classList.remove(direction);
    locked = false;
  }, 680);
}

nextBtn.onclick = () => {
  if(currentPage < totalPages){
    animate("flip-next", currentPage + 1);
  }
};

prevBtn.onclick = () => {
  if(currentPage > 1){
    animate("flip-prev", currentPage - 1);
  }
};

firstBtn.onclick = () => {
  currentPage = 1;
  update();
};

fullscreenBtn.onclick = () => {
  if(!document.fullscreenElement){
    document.documentElement.requestFullscreen();
  }else{
    document.exitFullscreen();
  }
};

document.addEventListener("keydown", e => {
  if(e.key === "ArrowRight") nextBtn.click();
  if(e.key === "ArrowLeft") prevBtn.click();
});

update();
