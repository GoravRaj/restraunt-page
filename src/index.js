import "./styles/style.css";
import loadHome from "./modules/home.js";
import loadMenu from "./modules/menu.js";
import loadAbout from "./modules/about.js";

const contentContainer = document.getElementById("content");

const homeNav = document.getElementById("nav-home");
const menuNav = document.getElementById("nav-menu");
const aboutNav = document.getElementById("nav-about");


function setActiveButton(activeBtn) {
    homeNav.classList.remove("active");
    menuNav.classList.remove("active");
    aboutNav.classList.remove("active");

    activeBtn.classList.add("active");
}


homeNav.addEventListener("click", () => {
    setActiveButton(homeNav);
    loadHome(contentContainer);
});

menuNav.addEventListener("click", () => {
    setActiveButton(menuNav);
    loadMenu(contentContainer);
});

aboutNav.addEventListener("click", () => {
    setActiveButton(aboutNav);
    loadAbout(contentContainer);
});


loadHome(contentContainer);
// loadAbout(contentContainer);
// loadMenu(contentContainer);