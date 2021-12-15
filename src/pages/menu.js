import '../style.css';
import { MenuItem } from './MenuItem';

export const Menu = () => {

    const menuContainer = document.createElement("div"); 

    const gyoza = MenuItem("Gyoza", "Pan-fried pork and cabbage dumplings"); 
    const bao = MenuItem("BAO", "Braised pork belly, cucumber, hoisin");
    menuContainer.append(gyoza, bao);

    return menuContainer;
}