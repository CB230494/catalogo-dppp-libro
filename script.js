const pages = document.querySelectorAll(".page");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pageCounter = document.getElementById("pageCounter");

let currentPage = 0;
const totalPages = pages.length;

function showPage(index) {
  pages.forEach(page => page.classList.remove("active"));
  pages[index].classList.add("active");

  pageCounter.textContent = `Página ${index + 1} / ${totalPages}`;

  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === totalPages - 1;
}

nextBtn.addEventListener("click", () => {
  if (currentPage < totalPages - 1) {
    currentPage++;
    showPage(currentPage);
  }
});

prevBtn.addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage--;
    showPage(currentPage);
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") nextBtn.click();
  if (e.key === "ArrowLeft") prevBtn.click();
});

showPage(currentPage);
