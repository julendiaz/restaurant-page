import '../style.css';
import { MenuItem } from './MenuItem';

export const Menu = () => {

    const menuContainer = document.createElement("div");
    
    const smallPlates = document.createElement("h1");
    smallPlates.classList.add("menu__title");
    smallPlates.innerHTML = "SMALL PLATES";

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
    
    // const smallPlates = document.createElement("h1");
    // smallPlates.classList.add("menu__title");
    // smallPlates.innerHTML = "SMALL PLATES";

    // const gyoza = MenuItem("GYOZA", "2 eur", "Pan-fried pork and cabbage dumplings"); 
    // const bao = MenuItem("BAO", "3 eur", "Braised pork belly, cucumber, hoisin");
    // const shishito = MenuItem("SHISHITO", "2 eur", "Seared shishito peppers with salt");
    // const takoyaki = MenuItem("TAKOYAKI", "2 eur", "Seared shishito peppers with salt");
    // const smallPlates = document.createElement("h1");
    // smallPlates.classList.add("menu__title");
    // smallPlates.innerHTML = "SMALL PLATES";

    // const gyoza = MenuItem("GYOZA", "2 eur", "Pan-fried pork and cabbage dumplings"); 
    // const bao = MenuItem("BAO", "3 eur", "Braised pork belly, cucumber, hoisin");
    // const shishito = MenuItem("SHISHITO", "2 eur", "Seared shishito peppers with salt");
    // const takoyaki = MenuItem("TAKOYAKI", "2 eur", "Seared shishito peppers with salt");
    
    menuContainer.append(smallPlates, gyoza, bao, shishito, takoyaki);
    menuContainer.append(ramen, shio, miso, shoyu, tonkotsu);

    return menuContainer;
}