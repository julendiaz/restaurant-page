import '../style.css';

export const HomeContent = () => {

    const mainContent = document.createElement("div");
    const locationTitle = document.createElement("h1");
    const ramenImg = document.createElement("img");
    const scheduleTitle = document.createElement("h1");

    mainContent.id = "main-content";
    locationTitle.innerHTML = "Eberhardstrasse 47<br> Stuttgart";
    ramenImg.src = "/src/assets/kaido-ramen.jpeg";
    ramenImg.alt = "Ramen Image";
    scheduleTitle.innerHTML = "12:00 to 0:00<br /> Every day";

    mainContent.append(locationTitle, ramenImg, scheduleTitle);

    return mainContent;
}