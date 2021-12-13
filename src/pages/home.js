import _ from "lodash";

const content = document.querySelector("#content");

function home() {

    //----------------NAVBAR-------------------//
    const navbar = document.createElement("div");

    navbar.classList.add("Navbar"); 

    // Navbar Left elements
    const navLeft = document.createElement("nav");
    const navLeft__links = document.createElement("ul");
    const linkHome_Container = document.createElement("li");
    const linkHome = document.createElement("a");
    const linkMenu_Container = document.createElement("li");
    const linkMenu = document.createElement("a");
    const linkChef_Container = document.createElement("li");
    const linkChef= document.createElement("a");
    // add Classes
    navLeft.classList.add("nav__links"); 
    navLeft.id = "nav__left"; 
    linkHome.innerHTML = "Home";
    linkMenu.innerHTML = "Menu";
    linkChef.innerHTML = "Chef";
    // append elements
    navLeft.appendChild(navLeft__links);
    navLeft__links.appendChild(linkHome_Container, linkMenu_Container, linkChef_Container);
    linkHome_Container.appendChild(linkHome);
    linkMenu_Container.appendChild(linkMenu);
    linkChef_Container.appendChild(linkChef);

    // Logo
    const logo = document.createElement("img");
    logo.src = "/src/assets/logo.svg";
    logo.alt = "Kaido Ramen Logo";

    // Navbar Right Elements
    const navRight = document.createElement("nav");
    const navRight__links = document.createElement("ul");
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
    navRight.appendChild(navRight__links);
    navRight__links.appendChild(linkReservations_Container, linkLocation_Container);
    linkReservations_Container.appendChild(linkReservations);
    linkLocation_Container.appendChild(linkLocation);

    // Append the big elements to the Navbar
    navbar.appendChild(navLeft, logo, navRight);

    //-----------MAIN CONTENT-------------------// 
    const mainContent = document.createElement("div");
    const locationTitle = document.createElement("h1");
    const ramenImg = document.createElement("img");
    const scheduleTitle = document.createElement("h1");

    mainContent.id = "main-content";
    locationTitle.innerHTML = "Eberhardstrasse 47<br> Stuttgart";
    ramenImg.src = "/src/assets/kaido-ramen.jpeg";
    ramenImg.alt = "Ramen Image";
    scheduleTitle.innerHTML = "12:00 to 0:00<br /> Every day";

    mainContent.appendChild(locationTitle, ramenImg, scheduleTitle);



}