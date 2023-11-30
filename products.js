const products = [
  {
    name: "Airpods Wireless Bluetooth Headphones",
    image: "images/airpods.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    category: "Electronics",
    price: 89.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: "iPhone 11 Pro 256GB Memory",
    image: "images/phone.jpg",
    description:
      "Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life",
    brand: "Apple",
    category: "Electronics",
    price: 599.99,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  {
    name: "Cannon EOS 80D DSLR Camera",
    image: "images/camera.jpg",
    description:
      "Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design",
    brand: "Cannon",
    category: "Electronics",
    price: 929.99,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  {
    name: "Sony Playstation 4 Pro White Version",
    image: "images/playstation.jpg",
    description:
      "The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music",
    brand: "Sony",
    category: "Electronics",
    price: 399.99,
    countInStock: 11,
    rating: 5,
    numReviews: 12,
  },
  {
    name: "Logitech G-Series Gaming Mouse",
    image: "images/mouse.jpg",
    description:
      "Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience",
    brand: "Logitech",
    category: "Electronics",
    price: 49.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
  },
  {
    name: "Amazon Echo Dot 3rd Generation",
    image: "images/alexa.jpg",
    description:
      "Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space",
    brand: "Amazon",
    category: "Electronics",
    price: 29.99,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
  {
    name: "Wilson Football",
    image: "images/wilson.jpg",
    description:
      "The Wilson NFL MVP ball features exclusive Wilson tackified PVC material with deeper pebble and firmer texture and a multi-layered lining for better shape and durability. The 3-ply bladder also provides better air retention and moisture control.",
    brand: "Wilson",
    category: "Sports Equipment",
    price: 120.99,
    countInStock: 15,
    rating: 4.5,
    numReviews: 7,
  },
  {
    name: "Under Armour Football Cleats",
    image: "images/cleats.jpeg",
    description:
      "Upgrade your game and look good doing it in the latest cutting edge under armour football cleats.",
    brand: "Under Armour",
    category: "Sports Equipment",
    price: 109.99,
    countInStock: 10,
    rating: 4,
    numReviews: 5,
  },
  {
    name: "Under Armour Football Gloves",
    image: "images/gloves.jpg",
    description:
      "Secure every catch this season with these Under Armour football gloves. These gloves are built to last and will help you make the big play.",
    brand: "Under Armour",
    category: "Sports Equipment",
    price: 49.99,
    countInStock: 20,
    rating: 4.5,
    numReviews: 10,
  },
  {
    name: "Oakley Football Visor",
    image: "images/visor.jpg",
    description:
      "Protect your eyes from the sun and your face from the defense with this Oakley football visor. This visor will help you make the big play and look good doing it.",
    brand: "Oakley",
    category: "Sports Equipment",
    price: 49.99,
    countInStock: 20,
    rating: 4.5,
    numReviews: 4,
  },
  {
    name: "Riddell Football Helmet",
    image: "images/helmet.png",
    description:
      "Protect your head from the defense with this Riddell helmet. This award winning helmet will keep you in the game and protect your biggest asset.",
    brand: "Riddell",
    category: "Sports Equipment",
    price: 249.99,
    countInStock: 20,
    rating: 5,
    numReviews: 8,
  },
  {
    name: "Under Armour Football Shoulder Pads",
    image: "images/shoulderpads.jpg",
    description:
      "Protect your shoulders from the defense with these Under Armour football shoulder pads.",
    brand: "Under Armour",
    category: "Sports Equipment",
    price: 249.99,
    countInStock: 5,
    rating: 4.5,
    numReviews: 6,
  }, // make a books category? furniture? cooking? haven't updated
  {
    name: "Couch",
    image: "images/couch.jpeg",
    description:
      "An ultra comfy couch. Perfect for watching TV, reading a book, or taking a nap.",
    brand: "Weekends Only",
    category: "Furniture",
    price: 789.99,
    countInStock: 5,
    rating: 4.5,
    numReviews: 4,
  },
  {
    name: "Dining Room Table",
    image: "images/diningroomtable.avif",
    description:
      "A high qaultiy dining room table, perfect for eating dinner with the whole family.",
    brand: "Weekends Only",
    category: "Furniture",
    price: 559.99,
    countInStock: 5,
    rating: 3,
    numReviews: 6,
  },
  {
    name: "Desk",
    image: "images/desk.webp",
    description:
      "A great desk for working from home. with plenty of space and storage.",
    brand: "Weekends Only",
    category: "Furniture",
    price: 199.99,
    countInStock: 2,
    rating: 5,
    numReviews: 10,
  },
  {
    name: "Bed Frame",
    image: "images/bed.webp",
    description:
      "Awesome bedframe with lots of storage and great style. Perfect for any bedroom.",
    brand: "iKea",
    category: "Furniture",
    price: 449.99,
    countInStock: 8,
    rating: 5,
    numReviews: 17,
  },
  {
    name: "Chair",
    image: "images/chair.webp",
    description:
      "Where quality meets comfort. not to mention style.",
    brand: "iKea",
    category: "Furniture",
    price: 30.95,
    countInStock: 5,
    rating: 3.5,
    numReviews: 3,
  },
  {
    name: "Rich Dad Poor Dad",
    image: "images/richdad.jpeg",
    description:
      "A classic business book with lots of great information about personal finances.",
    brand: "Plata Publishing",
    category: "Books",
    price: 19.99,
    countInStock: 5,
    rating: 5,
    numReviews: 7,
  },
  {
    name: "The Pyschology of Money",
    image: "images/psychologyofmoney.jpeg",
    description:
      "A great book to reshape how you think about money.",
    brand: "Harriman House",
    category: "Books",
    price: 19.99,
    countInStock: 5,
    rating: 4.5,
    numReviews: 8,
  },
  {
    name: "Harry Potter and the Sorcerer's Stone",
    image: "images/harrypotter.jpeg",
    description:
      "The first book in the Harry Potter series. A great book for kids and adults alike.",
    brand: "Scholastic",
    category: "Books",
    price: 9.99,
    countInStock: 5,
    rating: 5,
    numReviews: 30,
  },
  {
    name: "1984",
    image: "images/1984.webp",
    description:
      "A classic book about a dystopian future.",
    brand: "Penguin",
    category: "Books",
    price: 14.99,
    countInStock: 10,
    rating: 4,
    numReviews: 5,
  },
  {
    name: "The Great Gatsby",
    image: "images/gatsby.jpeg",
    description:
      "A classic book about the roaring 20's.",
    brand: "Scribner",
    category: "Books",
    price: 14.99,
    countInStock: 8,
    rating: 4.5,
    numReviews: 3,
  },
  {
    name: "Blackstone Grill",
    image: "images/blackstone.jpeg",
    description:
      "A great grill for cooking outdoors. Perfect for burgers, steaks, and more. The perfect gift for dad.",
    brand: "Blackstone",
    category: "Cooking",
    price: 999.99,
    countInStock: 2,
    rating: 5,
    numReviews: 7,
  },
  {
    name: "Air Fryer",
    image: "images/airfryer.webp",
    description:
      "A great way to cook your favorite foods with less oil.",
    brand: "Ninja",
    category: "Cooking",
    price: 99.99,
    countInStock: 5,
    rating: 4,
    numReviews: 10,
  },
  {
    name: "Wood Pellet Smoker",
    image: "images/smoker.webp",
    description:
      "A great smoker that gives your food a great smokey flavor. Pellets sold seperately.",
    brand: "Pit Boss",
    category: "Cooking",
    price: 599.99,
    countInStock: 4,
    rating: 5,
    numReviews: 12,
  },
  {
    name: "Apple Wood Pellets",
    image: "images/pellets.jpg",
    description:
      "Apple wood pellets for your smoker. Perfect for chicken, pork, and more.",
    brand: "Pit Boss",
    category: "Cooking",
    price: 29.99,
    countInStock: 10,
    rating: 5,
    numReviews: 5,
  },
  {
    name: "Bucket of Baseballs",
    image: "images/bucket-of-balls.webp",
    description:
      "A bucket of baseballs. Perfect for practice or a game.",
    brand: "Wilson",
    category: "Sports Equipment",
    price: 124.99,
    countInStock: 17,
    rating: 5,
    numReviews: 8,
  },
];

export default products;
