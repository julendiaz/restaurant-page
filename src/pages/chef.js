import '../style.css'; 
import { ChefParagraph } from './ChefParagraph';

export const chef = () => {

    const chefContainer = document.createElement("div");
    chefContainer.classList.add("chef-container");

    const bigTitle = document.createElement("h2");
    bigTitle.innerHTML = "Classically trained in the art of kaiseki, Chef Sakamoto decided to leap into the world of ramen with his latest venture, Kaido Ramen.";

    const firstImage = document.createElement("img");
    firstImage.src = "../src/assets/chef01.jpeg";
    firstImage.classList.add("chef__image"); 
    
    const secondImage = document.createElement("img"); 
    secondImage.src = "../src/assets/chef02.jpeg"; 
    secondImage.classList.add("chef__image");  
    
    const thirdImage = document.createElement("img"); 
    thirdImage.src = "../src/assets/chef03.jpg"; 
    thirdImage.classList.add("chef__image");
    
    const fourthImage = document.createElement("img");
    fourthImage.src = "../src/assets/chef04.jpeg";
    fourthImage.id = "chef__ramen";

    const firstParagraph = ChefParagraph("SAPPORO, JP", "The Beginning", "1972", "Daichi Sakamoto started cooking at age five, helping his mother prepare bentos for his father, younger sister, and himself. Chashu was never a missing component. Mother Sakamoto had learned how to make it when she studied abroad in Hong Kong. It was young Chef Sakamoto who mixed the marinade, a formula he perfected as he grew into his teens. <br /> <br /> Many years later, he apprenticed under famed Chef Kazue Inoue at a luxury ryokan in the Nagano prefecture. There, he studied the art of kaiseki for seven years, and took a particular shine to the futamono and tome-wan soup-based dishes. His calling was starting to simmer." )
    const secondParagraph = ChefParagraph("TOKYO, JP", "The First Venture", "1998", "After saving his wages from the Nagano apprenticeship, Chef Sakamoto took out a loan and opened Chotto Kai, his first restaurant in Tokyo. Using simple, seasonal ingredients, he was able to bring the luxury of kaiseki to all. Because he incorporated some of the Hong Kong flavors his mother had inspired in him, Chotto Kai was both a huge success and a unique contribution to Tokyos culinary landscape. <br /> <br /> During his eighth year at Chotto Kai, he befriended ramen shop owner Rei Fukui. Chef Sakamoto had stopped by her front stall for a quick dinner and fell instantly in love with her take on the springy yet soft noodle. Every ingredient was meticulously prepared, just like each kaiseki course." )
    const thirdParagraph = ChefParagraph("HONG KONG", "A New Challenge", "2016", "Chef Sakamoto implored chef Fukui to share her methods. She said that she would only teach him the basics if he promised to bring the art of ramen abroad. He brought the proposition to his family, and his mother immediately urged him to go to Hong Kong. <br /> <br /> The next week, Chef Sakamoto flew to the “Pearl City” and discovered that he felt more at home than ever. He knew that he could meld the umami flavors and smoky scents of Cantonese cuisine with the richness and nuances of ramen. He went back to Tokyo to learn from Chef Fukui, and with her blessing, returned to Hong Kong seven years later." )

    chefContainer.append(bigTitle, firstImage, firstParagraph, secondImage, secondParagraph, thirdImage, thirdParagraph, fourthImage);

    return chefContainer;
}