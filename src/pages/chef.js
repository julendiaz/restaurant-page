import '../style.css'; 
import { ChefParagraph } from './ChefParagraph';

export const chef = () => {

    const chefContainer = document.createElement("div");

    chefContainer.classList.add("chef-container");

    const firstParagraph = ChefParagraph("SAPPORO, JP", "The Beginning", "1972", "Daichi Sakamoto started cooking at age five, helping his mother prepare bentos for his father, younger sister, and himself. Chashu was never a missing component. Mother Sakamoto had learned how to make it when she studied abroad in Hong Kong. It was young Chef Sakamoto who mixed the marinade, a formula he perfected as he grew into his teens. <br /> <br /> Many years later, he apprenticed under famed Chef Kazue Inoue at a luxury ryokan in the Nagano prefecture. There, he studied the art of kaiseki for seven years, and took a particular shine to the futamono and tome-wan soup-based dishes. His calling was starting to simmer." )

    chefContainer.append(firstParagraph);

    return chefContainer;
}