let gallery = document.querySelector(".gallery");
let backBtn = document.querySelector("#backBtn");
let nextBtn = document.querySelector("#nextBtn");

gallery.addEventListener("wheel", (e) => {
  e.preventDefault();
  gallery.scrollLeft += e.deltaY;
});

backBtn.addEventListener("click", () => {
  gallery.style.scrollBehavior = "smooth";
  gallery.scrollLeft += -960;
});

nextBtn.addEventListener("click", () => {
  gallery.style.scrollBehavior = "smooth";
  gallery.scrollLeft += 960;
});
