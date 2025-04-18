const menuOpenButton = document.getElementById("menu-icon");
const menuCloseButton = document.getElementById("close-icon");

menuOpenButton.addEventListener("click", () => {
  document.body.classList.add("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => {
  document.body.classList.remove("show-mobile-menu");
});
