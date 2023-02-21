const menu = document.getElementById("menubar");
const navbar = document.querySelector(".navbar");
const darkMode = document.querySelector(".dark");

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-bars");
  navbar.classList.toggle("open");
});

window.onscroll = () => {
  menu.classList.remove("fa-bars");
  navbar.classList.remove("open");
};

darkMode.addEventListener("click", () => {
  if (darkMode.firstElementChild.classList.contains("fa-moon")) {
    darkMode.firstElementChild.classList.replace("fa-moon", "fa-sun");
    document.body.classList.add("dark");
  } else {
    darkMode.firstElementChild.classList.replace("fa-sun", "fa-moon");
    document.body.classList.remove("dark");
  }
});
