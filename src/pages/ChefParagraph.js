import '../style.css';

export const ChefParagraph = (place, title, year, description) => {

    const paragraphContainer = document.createElement("div");
    paragraphContainer.classList.add("paragraph__container");

    const chefPlace = document.createElement("h5");
    chefPlace.classList.add("chef__place"); 
    chefPlace.innerHTML = place;

    const chefTitle = document.createElement("h2");
    chefTitle.classList.add("chef__title"); 
    chefTitle.innerHTML = title;

    const chefYear = document.createElement("h5");
    chefYear.classList.add("chef__year"); 
    chefYear.innerHTML = year;

    const chefHeading = document.createElement("div");
    chefHeading.classList.add("chef__heading");

    chefHeading.append(chefPlace, chefTitle, chefYear);

    const chefDescription = document.createElement("p");
    chefDescription.classList.add("chef__description"); 
    chefDescription.innerHTML = description;

    paragraphContainer.append(chefHeading, chefDescription);

    return paragraphContainer;
}