import '../style.css';

export const MenuItem = (title, description) => {

    const itemContainer = document.createElement("div");

    const itemTitle = document.createElement("h3");

    itemTitle.classList.add("item__title");

    itemTitle.innerHTML = title; 
    
    const itemDescription = document.createElement("h3");

    itemDescription.classList.add("item__description");

    itemDescription.innerHTML = description; 

    itemContainer.append(itemTitle, itemDescription);

    return itemContainer;
}