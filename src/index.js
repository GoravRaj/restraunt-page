import "./styles/style.css";
import loadHome from "./modules/home.js";
import loadMenu from "./modules/menu.js";
import loadAbout from "./modules/about.js";

const contentContainer = document.getElementById("content");

const homeNav = document.getElementById("nav-home");
const menuNav = document.getElementById("nav-menu");
const aboutNav = document.getElementById("nav-about");


homeNav.addEventListener("click", () => loadHome(contentContainer));
menuNav.addEventListener("click", () => loadMenu(contentContainer));
aboutNav.addEventListener("click", () => loadAbout(contentContainer));


 loadHome(contentContainer);
// loadAbout(contentContainer);
// loadMenu(contentContainer);