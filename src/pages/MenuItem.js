import '../style.css';

export const MenuItem = (title, price, description) => {

    const itemContainer = document.createElement("div");

    itemContainer.classList.add("item__container");

    const itemTitle = document.createElement("h3");

    itemTitle.classList.add("item__title");

    itemTitle.innerHTML = title; 
    
    const itemDescription = document.createElement("h3");

    itemDescription.classList.add("item__description");

    itemDescription.innerHTML = description; 

    const itemPrice = document.createElement("h4");

    itemPrice.classList.add("item__price");

    itemPrice.innerHTML = price;

    itemContainer.append(itemTitle, itemPrice, itemDescription);

    return itemContainer;
}