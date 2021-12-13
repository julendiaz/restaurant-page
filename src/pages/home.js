import _ from "lodash";

const content = document.querySelector("#content");

function home() {
    const navbar = document.createElement("div");

    navbar.classList.add("Navbar"); 

    // Navbar Left elements
    const navLinks = document.createElement("nav");
    const navContainer = document.createElement("ul");
    const linkHome_Container = document.createElement("li");
    const linkHome = document.createElement("a");
    const linkMenu_Container = document.createElement("li");
    const linkMenu = document.createElement("a");
    const linkChef_Container = document.createElement("li");
    const linkChef= document.createElement("a");
    // add Classes
    navLinks.classList.add("nav__links"); 
    navLinks.id = "nav__left"; 
    linkHome.innerHTML = "Home";
    linkMenu.innerHTML = "Menu";
    linkChef.innerHTML = "Chef";
    // append elements
    navLinks.appendChild(navContainer);
    navContainer.appendChild(linkHome_Container, linkMenu_Container, linkChef_Container);
    linkHome_Container.appendChild(linkHome);
    linkMenu_Container.appendChild(linkMenu);
    linkChef_Container.appendChild(linkChef);

    // Logo
    const logo = document.createElement("img");
    logo.src = "/src/assets/logo.svg";
    logo.alt = "Kaido Ramen Logo";

    // Navbar Right Elements
    const navRight = document.createElement("nav");
    const navRight__Container = document.createElement("ul");
    const linkReservations_Container = document.createElement("li");
    const linkReservations = document.createElement("a");
    const linkLocation_Container = document.createElement("li");
    const linkLocation = document.createElement("a");
    
    // add Classes
    navRight.classList.add("nav__links"); 
    navRight.id = "nav__right"; 
    linkReservations.innerHTML = "Reservations";
    linkLocation.innerHTML = "Location";

    // append elements
    navRight.appendChild(navRight__Container);
    navRight__Container.appendChild(linkReservations_Container, linkLocation_Container);
    linkReservations_Container.appendChild(linkReservations);
    linkLocation_Container.appendChild(linkLocation);

    // Append the big elements to the Navbar
    navbar.appendChild(navLinks, logo, navRight)
}