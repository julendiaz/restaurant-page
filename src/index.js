import { home } from "./pages/home";
import { Menu } from './pages/menu';
import { chef } from "./pages/chef";
import { HomeContent } from "./pages/HomeContent";
import './style.css';

const content = document.querySelector("#content");

content.appendChild(home());

const mainContent = document.querySelector("#main-content");
const homeBtn = document.querySelector("#homeBtn");
const menuBtn = document.querySelector("#menuBtn");
const chefBtn = document.querySelector("#chefBtn");

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

chefBtn.addEventListener("click", function() {
    removeMainContent();

    mainContent.style.height = "280em";
    mainContent.appendChild(chef());
})


