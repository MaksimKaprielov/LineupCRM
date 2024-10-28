const sideMenu = document.querySelector("aside");
const closeBtn = document.querySelector("#closeBtn");
const themeToggler = document.querySelector(".theme-toggle");
const notify = document.querySelector("#notify");
const notifyBtn = document.querySelector("#notify-btn");

closeBtn.addEventListener("click", () => {
  sideMenu.classList.toggle("aside-active");
  closeBtn.classList.toggle("closeBtn-active");
});

themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});

notifyBtn.addEventListener("click", () => {
  notify.classList.toggle("active");
});