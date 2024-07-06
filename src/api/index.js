const Blog = [
  {
    "id": 1,
    "name": "A Culinary Journey in Vietnam",
    "type": "food",
    "body": "Vietnamese cuisine, a delightful fusion of flavors and textures! From savory pho to fresh spring rolls, each dish reflects Vietnam's rich culinary heritage. The balance of sweet, sour, salty, and spicy flavors creates a harmonious dining experience that captivates food enthusiasts worldwide. Explore bustling markets, savor street food delights, and learn the art of Vietnamese cooking from local chefs. Join me on a culinary journey through Vietnam and discover the magic of its gastronomic treasures.",
    "author": "Linh"
  },
  {
    "id": 2,
    "name": "In Search of Northern Lights",
    "type": "travel",
    "body": "The Northern Lights, nature's mesmerizing light show! Travel to the Arctic Circle and witness the ethereal dance of colors across the night sky. From Norway's fjords to Finland's snow-covered landscapes, embark on an adventure chasing the Aurora Borealis. Experience the thrill of Arctic expeditions, cozy nights in glass igloos, and encounters with indigenous cultures. Join me on a journey in search of the Northern Lights and marvel at one of the world's most breathtaking natural phenomena.",
    "author": "Erik"
  },
  {
    "id": 3,
    "name": "Reflections on a Himalayan Trek",
    "type": "experience",
    "body": "Trekking in the Himalayas, a soul-stirring adventure amidst majestic peaks and pristine landscapes. Follow ancient trails through remote villages, breathe in the crisp mountain air, and witness sunrise over snow-capped summits. The Himalayas offer a profound connection with nature, inspiring moments of introspection and awe. Join me as I reflect on the challenges and rewards of trekking in this Himalayan paradise, where every step is a testament to the human spirit and the wonders of the natural world.",
    "author": "Kiran"
  },
  {
    "id": 4,
    "name": "The Art of Storytelling",
    "type": "article",
    "body": "Storytelling, a timeless craft that weaves narratives and sparks imagination. From ancient myths to modern novels, stories have shaped cultures and shaped perspectives throughout history. Explore the elements of compelling storytelling, from character development to plot twists, and discover how stories resonate with universal truths. Join me on a journey through the art of storytelling and uncover the power of narrative in shaping our understanding of the world.",
    "author": "Maya"
  },
  {
    "id": 5,
    "name": "Discovering the Wonders of Machu Picchu",
    "type": "history",
    "body": "Machu Picchu, the lost city of the Incas! Nestled high in the Peruvian Andes, this ancient citadel is a testament to the ingenuity and architectural prowess of the Inca civilization. Wander through terraced ruins, marvel at precision-cut stone walls, and soak in panoramic views of mist-shrouded mountains. Machu Picchu offers a glimpse into Peru's rich history and cultural legacy, inviting travelers to explore its mysteries and significance. Join me on a journey to discover the wonders of Machu Picchu and experience the allure of this UNESCO World Heritage site.",
    "author": "Diego"
  },
  {
    "id": 6,
    "name": "Parisian Pastry Delights",
    "type": "food",
    "body": "Paris, the city of culinary indulgence! Dive into the world of Parisian pastries and discover the artistry behind decadent delights like croissants, eclairs, and macarons. From charming patisseries to Michelin-starred bakeries, each bite is a celebration of French craftsmanship and tradition. Join me on a journey through Parisian pastry culture and savor the flavors that have made Paris a mecca for pastry lovers worldwide.",
    "author": "Juliette"
  },
  {
    "id": 7,
    "name": "A Safari Adventure in Africa",
    "type": "travel",
    "body": "Embark on a safari adventure across the wild landscapes of Africa! From the Serengeti plains to the Okavango Delta, witness the beauty of Africa's diverse wildlife in their natural habitats. Track majestic lions, graceful giraffes, and elusive leopards on game drives led by experienced guides. Immerse yourself in local cultures, camp under starlit skies, and awaken your senses to the rhythms of the African bush. Join me on a safari expedition and experience the thrill of encountering Africa's iconic wildlife up close.",
    "author": "Nala"
  },
  {
    "id": 8,
    "name": "Solo Backpacking Across Southeast Asia",
    "type": "experience",
    "body": "Embarking on a solo backpacking journey through Southeast Asia is an exhilarating experience ",
    "author": "Aiden"
  },
  {
    "id": 9,
    "name": "The Influence of Art Movements on Modern Design",
    "type": "article",
    "body": "Art movements have played a pivotal role in shaping modern design aesthetics across architecture, fashion, and visual arts. From the minimalist simplicity of Bauhaus to the expressive forms of Art Deco, explore how artistic philosophies have influenced design principles and innovation. Discover the evolution of design trends through the lens of prominent art movements and their lasting impact on contemporary creativity. Join me on a journey through the intersection of art and design and uncover the profound connections between visual expression and functional aesthetics.",
    "author": "Olivia"
  },
  {
    "id": 10,
    "name": "Exploring Ancient Greek Mythology",
    "type": "history",
    "body": "Delve into the captivating world of ancient Greek mythology, where gods, heroes, and mythical creatures come to life in epic tales of love, betrayal, and adventure. From Zeus, the king of gods, to Athena, the goddess of wisdom, Greek mythology offers insights into ancient beliefs and cultural values. Journey through mythical landscapes like Mount Olympus and the underworld, and unravel the stories of heroes like Hercules and Perseus. Join me on an exploration of ancient Greek mythology and discover the enduring legacy of these timeless myths.",
    "author": "Nikos"
  }
];
export default Blog;
export const getPersons = (filters) => {
  const result = Blog.filter((x) => {
    if (!!filters && Object.keys(filters).length > 0) {
      if (x.name.includes(filters.name)) return true;
      else if (x.type.includes(filters.type)) return true;
      else if (x.body.includes(filters.body)) return true;
      else if (x.author.includes(filters.author)) return true;
      return false;
    }
    return true;
  });

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(result);
    }, 3 * 1000);
  });
};
