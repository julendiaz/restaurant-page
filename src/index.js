import { home } from "./pages/home";
import { Menu } from './pages/menu';
import { HomeContent } from "./pages/HomeContent";
import './style.css';

const content = document.querySelector("#content");

content.appendChild(home());

const mainContent = document.querySelector("#main-content");
const homeBtn = document.querySelector("#homeBtn");
const menuBtn = document.querySelector("#menuBtn");

const removeMainContent = () => {
    while(mainContent.firstChild) {
        mainContent.firstChild.remove();
    }
}

menuBtn.addEventListener("click", function() {
    removeMainContent();

    mainContent.appendChild(Menu());
    mainContent.style.height = "120em";
})

homeBtn.addEventListener("click", function() {
    removeMainContent();

    mainContent.appendChild(HomeContent());
    mainContent.style.height = "75em";
})