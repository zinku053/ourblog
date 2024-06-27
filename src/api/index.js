const Blog = [
  {
    "id": 1,
    "name": "Exploring Thai Cuisine",
    "type": "food",
    "body": "Thai cuisine offers a delightful blend of flavors and spices. From Pad Thai to Tom Yum soup, each dish tells a unique story of Thailand's culinary heritage.",
    "author": "Christabella"
  },
  {
    "id": 2,
    "name": "Italian Pasta Passion",
    "type": "food",
    "body": "Pasta, the heart of Italian cuisine! Whether it's a comforting bowl of spaghetti or a rich lasagna, Italian pasta dishes never fail to satisfy my cravings.",
    "author": "Malia"
  },
  {
    "id": 3,
    "name": "Sushi Adventures",
    "type": "food",
    "body": "Sushi, a perfect harmony of taste and aesthetics. From classic nigiri to creative rolls, each bite is a journey through Japan's culinary artistry.",
    "author": "Tricia"
  },
  {
    "id": 4,
    "name": "The Art of Baking",
    "type": "food",
    "body": "Baking is my passion! From fluffy cakes to crusty bread, I find joy in creating delicious treats that bring warmth and happiness to those around me.",
    "author": "Sherry"
  },
  {
    "id": 5,
    "name": "Spice Odyssey",
    "type": "food",
    "body": "Exploring the world of spices! Each spice tells a story of culture and history, adding depth and flavor to dishes that awaken the senses.",
    "author": "Parker"
  }
];
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
