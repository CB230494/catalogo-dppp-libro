const totalPages = 21;
let currentPage = 1;

const book = document.getElementById("book");
const leftImg = document.getElementById("leftImg");
const rightImg = document.getElementById("rightImg");
const counter = document.getElementById("counter");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const firstBtn = document.getElementById("firstBtn");
const fullscreenBtn = document.getElementById("fullscreenBtn");

function pagePath(num){
  return `pages/Pagina-${String(num).padStart(2,"0")}.jpeg`;
}

function updateBook(){
  let left = currentPage;
  let right = currentPage + 1;

  leftImg.src = pagePath(left);

  if(right <= totalPages){
    rightImg.src = pagePath(right);
    rightImg.style.visibility = "visible";
  }else{
    rightImg.style.visibility = "hidden";
  }

  counter.textContent = right <= totalPages
    ? `Páginas ${left} - ${right} / ${totalPages}`
    : `Página ${left} / ${totalPages}`;

  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage >= totalPages;
}

function animate(direction){
  book.classList.remove("turn-next","turn-prev");
  void book.offsetWidth;
  book.classList.add(direction);
}

nextBtn.addEventListener("click", () => {
  if(currentPage < totalPages){
    animate("turn-next");
    currentPage += 2;
    if(currentPage > totalPages) currentPage = totalPages;
    setTimeout(updateBook, 260);
  }
});

prevBtn.addEventListener("click", () => {
  if(currentPage > 1){
    animate("turn-prev");
    currentPage -= 2;
    if(currentPage < 1) currentPage = 1;
    setTimeout(updateBook, 260);
  }
});

firstBtn.addEventListener("click", () => {
  currentPage = 1;
  updateBook();
});

fullscreenBtn.addEventListener("click", () => {
  if(!document.fullscreenElement){
    document.documentElement.requestFullscreen();
  }else{
    document.exitFullscreen();
  }
});

document.addEventListener("keydown", (e) => {
  if(e.key === "ArrowRight") nextBtn.click();
  if(e.key === "ArrowLeft") prevBtn.click();
});

updateBook();
