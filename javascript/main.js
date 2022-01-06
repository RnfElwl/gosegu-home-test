const toggleBtn = document.querySelector(".startus-bar__buruger");
const menu = document.querySelector(".startus-bar__menu");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});
