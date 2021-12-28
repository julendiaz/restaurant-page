import '../style.css';
import { MenuItem } from './MenuItem';

export const Menu = () => {

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu__container");
    
    const smallPlates = document.createElement("h1");
    smallPlates.classList.add("menu__title");
    smallPlates.innerHTML = "SMALL PLATES";
    smallPlates.id = "small-plates";

    const gyoza = MenuItem("GYOZA", "2 eur", "Pan-fried pork and cabbage dumplings"); 
    const bao = MenuItem("BAO", "3 eur", "Braised pork belly, cucumber, hoisin");
    const shishito = MenuItem("SHISHITO", "2 eur", "Seared shishito peppers with salt");
    const takoyaki = MenuItem("TAKOYAKI", "2 eur", "Seared shishito peppers with salt");
    
    const ramen = document.createElement("h1");
    ramen.classList.add("menu__title");
    ramen.innerHTML = "RAMEN";

    const shio = MenuItem("SHIO", "5 eur", "Salt broth, chasu, scaillion, egg, nori, straight noodles"); 
    const miso = MenuItem("MISO", "7 eur", "Miso broth, chashu, corn, bamboo, egg, scallion, nori, curly noodles");
    const shoyu = MenuItem("SHOYU", "6 eur", "Soy broth, chashu, scallion, egg, nori, curly noodles");
    const tonkotsu = MenuItem("TONKOTSU", "8 eur", "Pork broth, chashu, bamboo, scallion, egg, nori, sesame oil, straight noodles");
    
    const addOns = document.createElement("h1");
    addOns.classList.add("menu__title");
    addOns.innerHTML = "+ ADD-ONS"
    const toppings = MenuItem("TOPPINGS", "0.3 eur", "Scallion, sesame seeds, chili oil, nori, beni shoga, garlic paste"); 
    const vegetables = MenuItem("VEGETABLES", "0.5 eur", "Bean sprouts, bok choy, spinach, enoki, bamboo, cabbage, corn");
    const protein = MenuItem("PROTEIN", "0.7 eur", "Poached egg, soft-boiled egg, chashu, chicken, tofu, naruto");
    const starch = MenuItem("STARCH", "1 eur", "Extra noodles");

    const drinks = document.createElement("h1");
    drinks.classList.add("menu__title");
    drinks.innerHTML = "DRINKS"
    const sake = MenuItem("SAKE", "8 eur", "Junmai daiginjo-shu"); 
    const beer = MenuItem("BEER", "4 eur", "Komugi");
    const umeshu = MenuItem("UMESHU", "8 eur", "Plum wine");
    const aperol = MenuItem("APEROL SPRITZ", "3 eur", "Prosecco, aperol, tonic, yuzu");

    aperol.style.marginBottom = "2em";
    
    menuContainer.append(smallPlates, gyoza, bao, shishito, takoyaki);
    menuContainer.append(ramen, shio, miso, shoyu, tonkotsu);
    menuContainer.append(addOns, toppings, vegetables, protein, starch);
    menuContainer.append(drinks, sake, beer, umeshu, aperol);

    return menuContainer;
}