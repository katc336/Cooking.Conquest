const prisma = require("./client");
const bcrypt = require("bcrypt");
const SALT_COUNT = 10;

async function hashedAdmin() {
    adminPass = bcrypt.hashSync("De$ignCentra1", SALT_COUNT);
    return (adminPass);
}
hashedAdmin();

const seed = async () => {
    console.log("Seeding the database.");
    await prisma.recipeBookItem.deleteMany();
    await prisma.instruction.deleteMany();
    await prisma.ingredient.deleteMany();
    await prisma.rating.deleteMany();
    await prisma.userIngredients.deleteMany()
    await prisma.userInstructions.deleteMany();
    await prisma.user.deleteMany();
    await prisma.recipe.deleteMany();
    await prisma.guild.deleteMany();
    await prisma.level.deleteMany();

    try {
        //<-------------------LEVELS------------------->
        const level1 = await prisma.level.create({
            data: {
                level: "one"
            }
        })
        const level2 = await prisma.level.create({
            data: {
                level: "two"
            }
        })
        const level3 = await prisma.level.create({
            data: {
                level: "three"
            }
        })
        const maxLevel = await prisma.level.create({
            data: {
                level: "four"
            }
        })
        //<-------------------GUILDS------------------->
        const gastrognomes = await prisma.guild.create({
            data: {
                name: "Order of the Gastrognomes",
                description: "The Gastrognomes are renowned alchemists who are famous for culinary experimentation and innovation. They are known for their use of exotic spices and unusual vegetables and grains.  Chefs in this guild are adventurous and creative, constantly pushing the boundaries of vegetarian cuisine.",
                score: 0,
            }
        })
        const leafsong = await prisma.guild.create({
            data: {
                name: "Leafsong Epicurean Fellowship",
                description: "The Leafsong Epicurean Fellowship is known for its mastery of warm and comforting dishes. They specialize in vegetarian takes of classic comfort food, using time-honored techniques and rich, satisfying flavors. Chefs in this guild take great care in preparing dishes, paying close attention to detail and precision in their cooking to make vegetables shine in a new light.",
                score: 0,
            }
        })
        const greensage = await prisma.guild.create({
            data: {
                name: "The Green Sage Culinary Circle",
                description: "The Green Sage Culinary Circle embraces holistic and healing cooking practices. They are known for dishes that nourish and restore, and their medicinal knowledge. Chefs in this guild emphasize dishes that promote health and vitality through vegetarian and vegan cooking.",
                score: 0,
            }
        })
        //TO DO: UPDATE RECIPES (Placeholder recipes)
        //<-------------------RECIPES------------------->
        //LEVEL 1
        const asianChoppedSalad = await prisma.recipe.create({
            data: {
                name: "Asian Chopped Salad",
                image: "",
                description: "This refreshing salad is a mix of crisp, colorful vegetables like carrots, cabbage, and bell peppers, topped with a zesty Asian-inspired dressing; bringing a burst of flavor and textures for a light and healthy meal.",
                level: { connect: { id: level1.id } },
            }
        })
        const 三杯Tofu = await prisma.recipe.create({
            data: {
                name: "Three Cup (三杯) Tofu Stir-Fry",
                image: "",
                description: "A flavorful stir fry featuring a colorful array of vegetables and crispy tofu, all tossed in a delicious three cup sauce.",
                level: { connect: { id: level1.id } },
            }
        })
        const lentilSoup = await prisma.recipe.create({
            data: {
                name: "Lentil Soup",
                image: "",
                description: "A hearty, comforting soup that's packed with protein-rich lentils, aromatic herbs, and flavorful vegetables.",
                level: { connect: { id: level1.id } },
            }
        })
        const bananaSmoothie = await prisma.recipe.create({
            data: {
                name: "Chocolate Peanut Butter Banana Smoothie",
                image: "",
                description: "This healthy yet comforting smoothie is perfect for breakfast and filled with protein and nutrients and to keep you going throughout the day",
                level: { connect: { id: level1.id } },
            }
        })
        const veggieTaco = await prisma.recipe.create({
            data: {
                name: "Veggie Black Bean Tacos",
                image: "",
                description: "These veggie tacos are filled with an aromatic vegetable medley, hearty black beans, and a medley of vibrant spices.",
                level: { connect: { id: level1.id } },
            }
        })
        const paneerTikkaMasala = await prisma.recipe.create({
            data: {
                name: "Paneer Tikka Masala",
                image: "",
                description: "A rich, creamy, and aromatic Indian dish featuring tender cubes of paneer cheese in a spiced tomato-based sauce. It's a decadent and dish.",
                level: { connect: { id: level1.id } },
            }
        })
        const stuffedPeppers = await prisma.recipe.create({
            data: {
                name: "Italian Quinoa Stuffed Bell Peppers",
                image: "",
                description: "These vibrant bell peppers are filled with a colorful and nutritious mixture of quinoa, vegetables, and aromatic herbs.",
                level: { connect: { id: level1.id } },
            }
        })
        const ratatouille = await prisma.recipe.create({
            data: {
                name: "Ratatouille",
                image: "",
                description: "A rustic French dish featuring a colorful medley of vegetables like eggplant, zucchini, and bell peppers, all simmered in a flavorful tomato-based sauce. It's a classic and comforting dish.",
                level: { connect: { id: level1.id } },
            }
        })
        const blackBeanChili = await prisma.recipe.create({
            data: {
                name: "Black Bean Chili",
                image: "",
                description: "This hearty and spicy chili is filled with tender black beans, aromatic spices, and a rich and flavorful tomato base. It's a satisfying and warming bowl of goodness.",
                level: { connect: { id: level1.id } },
            }
        })
        const gardenPasta = await prisma.recipe.create({
            data: {
                name: "Garden Pasta",
                image: "",
                description: "A delicious and nutritious pasta dish featuring an assortment of fresh, colorful vegetables and fragrant herbs, all tossed in a savory and aromatic sauce.",
                level: { connect: { id: level1.id } },
            }
        })
        //Level Two Recipes
        const tagine = await prisma.recipe.create({
            data: {
                name: "Moroccan Vegetable Tagine",
                image: "",
                description: "A flavorful and aromatic stew filled with a variety of vegetables, cooked in Moroccan spices and served with couscous or crusty bread.",
                level: { connect: { id: level2.id } },
            }
        })
        const thaiCurry = await prisma.recipe.create({
            data: {
                name: "Thai Green Curry",
                image: "",
                description: "A creamy and spicy curry made with a blend of Thai herbs and spices, and filled with a mix of mushrooms, bell peppers, and eggplant.",
                level: { connect: { id: level2.id } },
            }
        })
        const misirWot = await prisma.recipe.create({
            data: {
                name: "Misir Wot (Ethiopian Spicy Lentil Stew)",
                image: "",
                description: "A rich and spicy Ethiopian lentil stew made with red lentils, onions, and garlic, seasoned with berbere spice blend and served with injera bread.",
                level: { connect: { id: level2.id } },
            }
        })
        const stuffedShells = await prisma.recipe.create({
            data: {
                name: "Spinach and Ricotta Stuffed Pasta Shells",
                image: "",
                description: "Jumbo pasta shells stuffed with a creamy mixture of spinach and ricotta cheese, baked in marinara sauce and topped with melted mozzarella.",
                level: { connect: { id: level2.id } },
            }
        })
        const padThai = await prisma.recipe.create({
            data: {
                name: "Vegetable Pad Thai",
                image: "",
                description: "Thai noodle dish made with stir-fried rice noodles, tofu, and an assortment of vegetables, tossed in a tangy and sweet sauce.",
                level: { connect: { id: level2.id } },
            }
        })
        const frittata = await prisma.recipe.create({
            data: {
                name: "Asparagus and Swiss Frittata",
                image: "",
                description: "A light and fluffy egg dish filled with tender asparagus, nutty Swiss cheese, and fresh herbs, perfect for brunch or a light dinner.",
                level: { connect: { id: level2.id } },
            }
        })
        const pizza = await prisma.recipe.create({
            data: {
                name: "Margherita Pizza",
                image: "",
                description: "A homemade pizza crust topped with fresh mozzarella cheese and fresh basil.",
                level: { connect: { id: level2.id } },
            }
        })
        const spanakopita = await prisma.recipe.create({
            data: {
                name: "Spinach and Feta Spanakopita",
                image: "",
                description: "A Greek savory pastry filled with a mixture of spinach, feta cheese, and herbs, wrapped in crispy, flaky phyllo dough.",
                level: { connect: { id: level2.id } },
            }
        })
        const 割包 = await prisma.recipe.create({
            data: {
                name: "Taiwanese Veggie Burger (割包)",
                image: "",
                description: "A vegetarian spin on a traditional Taiwanese street food delight, featuring a colorful blend of pickled vegetables with marinated tofu; all wrapped in a fluffy bun.",
                level: { connect: { id: level2.id } },
            }
        })
        const africanPeanutStew = await prisma.recipe.create({
            data: {
                name: "African Peanut Stew",
                image: "",
                description: "A hearty and comforting stew made with sweet potatoes, chickpeas, and leafy greens, simmered in a rich and creamy peanut sauce, and seasoned with African spices.",
                level: { connect: { id: level2.id } },
            }
        })
        //Level 3 Recipes
        const eggplantParm = await prisma.recipe.create({
            data: {
                name: "Eggplant Parmesan",
                image: "",
                description: "A classic Italian dish with layers of crispy eggplant, baked in a cheesy marinara sauce, and topped with parmesan cheese.",
                level: { connect: { id: level3.id } },
            }
        })
        const tofuKatsu = await prisma.recipe.create({
            data: {
                name: "Tofu Katsu with Ginger Miso Glaze",
                image: "",
                description: "A Japanese-inspired dish featuring crispy breaded tofu served with a zesty ginger miso glaze. This recipe offers a meat-free twist on a beloved comfort food that's packed with flavor and textural contrasts.",
                level: { connect: { id: level3.id } },
            }
        })
        const falafel = await prisma.recipe.create({
            data: {
                name: "Baked Falafel with Tzatziki Sauce",
                image: "",
                description: "These deliciously spiced chickpea patties are baked to perfection and served with a refreshing tzatziki sauce.",
                level: { connect: { id: level3.id } },
            }
        })
        const veggiePie = await prisma.recipe.create({
            data: {
                name: "Australian “Veggie” Pie ",
                image: "",
                description: "This is a vegetarian spin on the Australian classic meat pie. This comforting and hearty veggie pie is filled with a medley of colorful veggies and a savory gravy; all wrapped in a flaky golden pastry.",
                level: { connect: { id: level3.id } },
            }
        })
        const moussaka = await prisma.recipe.create({
            data: {
                name: "Vegetarian Moussaka",
                image: "",
                description: " A Mediterranean-inspired dish with layers of roasted eggplant, zucchini, and a rich tomato and lentil sauce, topped with creamy béchamel. ",
                level: { connect: { id: level3.id } },
            }
        })
        const dumplings = await prisma.recipe.create({
            data: {
                name: "Vegetarian Dumplings",
                image: "",
                description: "Delicious, savory dumplings filled with a flavorful assortment of vegetables. These little pockets of joy are versatile enough for a quick snack, appetizer, or a main course.",
                level: { connect: { id: level3.id } },
            }
        })
        const rainbowRoll = await prisma.recipe.create({
            data: {
                name: "Veggie Rainbow Avocado Roll",
                image: "",
                description: "A creative and healthy sushi roll featuring creamy avocado and vegetables, wrapped in nori and sushi rice, and topped in a spicy mayo sauce. ",
                level: { connect: { id: level3.id } },
            }
        })
        const risotto = await prisma.recipe.create({
            data: {
                name: "Mushroom Risotto",
                image: "",
                description: "A creamy and comforting Italian dish made with creamy Arborio rice and a flavorful mix of sautéed mushrooms, garlic, and aromatic herbs. This dish is a must-try for all mushroom and risotto aficionados.",
                level: { connect: { id: level3.id } },
            }
        })
        const biryani = await prisma.recipe.create({
            data: {
                name: "Vegetarian Biryani",
                image: "",
                description: "A fragrant and aromatic rice dish packed with vegetables and a delicious blend of spices, this Indian classic is a feast for the senses that's both hearty and flavorful.",
                level: { connect: { id: level3.id } },
            }
        })
        const macAndCheese = await prisma.recipe.create({
            data: {
                name: "Butternut Squash Mac and Cheese",
                image: "",
                description: "A decadent and creamy macaroni and cheese recipe featuring rich roasted butternut squash, topped with a crispy breadcrumb crust. ",
                level: { connect: { id: level3.id } },
            }
        })
        //<-------------------INGREDIENTS------------------->
        //ASIAN CHOPPED SALAD
        const asianChoppedSaladIngredient1 = await prisma.ingredient.create({
            data: {
                name: "1 cup of shredded red cabbage",
                recipe: { connect: { id: asianChoppedSalad.id } }
            }
        })
        const asianChoppedSaladIngredient2 = await prisma.ingredient.create({
            data: {
                name: "1 large carrot, julienned",
                recipe: { connect: { id: asianChoppedSalad.id } }
            }
        })
        const asianChoppedSaladIngredient3 = await prisma.ingredient.create({
            data: {
                name: "1 red bell pepper, thinly sliced",
                recipe: { connect: { id: asianChoppedSalad.id } }
            }
        })
        const asianChoppedSaladIngredient4 = await prisma.ingredient.create({
            data: {
                name: "1/2 cup of shelled edamame",
                recipe: { connect: { id: asianChoppedSalad.id } }
            }
        })
        const asianChoppedSaladIngredient5 = await prisma.ingredient.create({
            data: {
                name: "1/4 cup of chopped peanuts",
                recipe: { connect: { id: asianChoppedSalad.id } }
            }
        })
        const asianChoppedSaladIngredient6 = await prisma.ingredient.create({
            data: {
                name: "1/4 cup of chopped cilantro",
                recipe: { connect: { id: asianChoppedSalad.id } }
            }
        })
        const asianChoppedSaladIngredient7 = await prisma.ingredient.create({
            data: {
                name: "1/4 cup of crispy chow mein noodles",
                recipe: { connect: { id: asianChoppedSalad.id } }
            }
        })
        const asianChoppedSaladIngredient8 = await prisma.ingredient.create({
            data: {
                name: "1/4 cup of rice vinegar",
                recipe: { connect: { id: asianChoppedSalad.id } }
            }
        })
        const asianChoppedSaladIngredient9 = await prisma.ingredient.create({
            data: {
                name: "2 tablespoons of soy sauce",
                recipe: { connect: { id: asianChoppedSalad.id } }
            }
        })
        const asianChoppedSaladIngredient10 = await prisma.ingredient.create({
            data: {
                name: "1 tablespoon of sesame oil",
                recipe: { connect: { id: asianChoppedSalad.id } }
            }
        })
        const asianChoppedSaladIngredient11 = await prisma.ingredient.create({
            data: {
                name: "1 tablespoon of honey",
                recipe: { connect: { id: asianChoppedSalad.id } }
            }
        })
        const asianChoppedSaladIngredient12 = await prisma.ingredient.create({
            data: {
                name: "1 teaspoon of grated ginger",
                recipe: { connect: { id: asianChoppedSalad.id } }
            }
        })
        //Three Cup (三杯) Tofu Stir-Fry
        const 三杯TofuIngredient1 = await prisma.ingredient.create({
            data: {
                name: "14 oz block of firm tofu, drained and cubed",
                recipe: { connect: { id: 三杯Tofu.id } }
            }
        })
        const 三杯TofuIngredient2 = await prisma.ingredient.create({
            data: {
                name: "1 bell pepper, sliced",
                recipe: { connect: { id: 三杯Tofu.id } }
            }
        })
        const 三杯TofuIngredient3 = await prisma.ingredient.create({
            data: {
                name: "1 cup of sliced mushrooms",
                recipe: { connect: { id: 三杯Tofu.id } }
            }
        })
        const 三杯TofuIngredient4 = await prisma.ingredient.create({
            data: {
                name: "3 tablespoons of sesame oil",
                recipe: { connect: { id: 三杯Tofu.id } }
            }
        })
        const 三杯TofuIngredient5 = await prisma.ingredient.create({
            data: {
                name: "6 thinly sliced pieces of ginger (with skin left on)",
                recipe: { connect: { id: 三杯Tofu.id } }
            }
        })
        const 三杯TofuIngredient6 = await prisma.ingredient.create({
            data: {
                name: "8 cloves garlic peeled",
                recipe: { connect: { id: 三杯Tofu.id } }
            }
        })
        const 三杯TofuIngredient7 = await prisma.ingredient.create({
            data: {
                name: "3 tablespoons of soy sauce",
                recipe: { connect: { id: 三杯Tofu.id } }
            }
        })
        const 三杯TofuIngredient8 = await prisma.ingredient.create({
            data: {
                name: "3 tablespoons of Shaoxing wine (Chinese cooking wine)",
                recipe: { connect: { id: 三杯Tofu.id } }
            }
        })
        const 三杯TofuIngredient9 = await prisma.ingredient.create({
            data: {
                name: "1 tablespoons of mirin (sweet japanese rice wine)",
                recipe: { connect: { id: 三杯Tofu.id } }
            }
        })
        const 三杯TofuIngredient10 = await prisma.ingredient.create({
            data: {
                name: "1/4 cup water",
                recipe: { connect: { id: 三杯Tofu.id } }
            }
        })
        const 三杯TofuIngredient11 = await prisma.ingredient.create({
            data: {
                name: "2 dried chiles or red chiles (optional for heat)",
                recipe: { connect: { id: 三杯Tofu.id } }
            }
        })
        const 三杯TofuIngredient12 = await prisma.ingredient.create({
            data: {
                name: "Fresh thai basil leaves (you can use basil leaves if you cannot find thai basil), leaves removed from the stems",
                recipe: { connect: { id: 三杯Tofu.id } }
            }
        })
        //Lentil Soup
        const lentilSoupIngredient1 = await prisma.ingredient.create({
            data: {
                name: "1 cup of green or brown lentils",
                recipe: { connect: { id: lentilSoup.id } }
            }
        })
        const lentilSoupIngredient2 = await prisma.ingredient.create({
            data: {
                name: "1 onion, chopped",
                recipe: { connect: { id: lentilSoup.id } }
            }
        })
        const lentilSoupIngredient3 = await prisma.ingredient.create({
            data: {
                name: "2 carrots, chopped",
                recipe: { connect: { id: lentilSoup.id } }
            }
        })
        const lentilSoupIngredient4 = await prisma.ingredient.create({
            data: {
                name: "2 celery stalks, chopped",
                recipe: { connect: { id: lentilSoup.id } }
            }
        })
        const lentilSoupIngredient5 = await prisma.ingredient.create({
            data: {
                name: "3 garlic cloves, minced",
                recipe: { connect: { id: lentilSoup.id } }
            }
        })
        const lentilSoupIngredient6 = await prisma.ingredient.create({
            data: {
                name: "6 cups of vegetable broth",
                recipe: { connect: { id: lentilSoup.id } }
            }
        })
        const lentilSoupIngredient7 = await prisma.ingredient.create({
            data: {
                name: "1 can of diced tomatoes",
                recipe: { connect: { id: lentilSoup.id } }
            }
        })
        const lentilSoupIngredient8 = await prisma.ingredient.create({
            data: {
                name: "1 cup of frozen spinach, defrosted and drained",
                recipe: { connect: { id: lentilSoup.id } }
            }
        })
        const lentilSoupIngredient9 = await prisma.ingredient.create({
            data: {
                name: "1 teaspoon of dried thyme",
                recipe: { connect: { id: lentilSoup.id } }
            }
        })
        const lentilSoupIngredient10 = await prisma.ingredient.create({
            data: {
                name: "1 teaspoon of ground cumin",
                recipe: { connect: { id: lentilSoup.id } }
            }
        })
        //Chocolate Peanut Butter Banana Smoothie
        const bananaSmoothieIngredient1 = await prisma.ingredient.create({
            data: {
                name: "2 bananas (frozen)",
                recipe: { connect: { id: bananaSmoothie.id } }
            }
        })
        const bananaSmoothieIngredient2 = await prisma.ingredient.create({
            data: {
                name: "¼ cup of peanut butter",
                recipe: { connect: { id: bananaSmoothie.id } }
            }
        })
        const bananaSmoothieIngredient3 = await prisma.ingredient.create({
            data: {
                name: "1 cup of soymilk (or milk of choice)",
                recipe: { connect: { id: bananaSmoothie.id } }
            }
        })
        const bananaSmoothieIngredient4 = await prisma.ingredient.create({
            data: {
                name: "1 teaspoon of cinnamon",
                recipe: { connect: { id: bananaSmoothie.id } }
            }
        })
        const bananaSmoothieIngredient5 = await prisma.ingredient.create({
            data: {
                name: "2 tablespoon of raw cacao powder",
                recipe: { connect: { id: bananaSmoothie.id } }
            }
        })
        const bananaSmoothieIngredient6 = await prisma.ingredient.create({
            data: {
                name: "1 pinch of hot chili powder (optional)",
                recipe: { connect: { id: bananaSmoothie.id } }
            }
        })
        const bananaSmoothieIngredient7 = await prisma.ingredient.create({
            data: {
                name: "Tip: If you want some extra energy to keep you going, add in a peeled roasted sweet potato!",
                recipe: { connect: { id: bananaSmoothie.id } }
            }
        })
        //Veggie Black Bean Tacos
        const veggieTacoIngredient1 = await prisma.ingredient.create({
            data: {
                name: "2 bell peppers (colors of choice), thinly sliced",
                recipe: { connect: { id: veggieTaco.id } }
            }
        })
        const veggieTacoIngredient2 = await prisma.ingredient.create({
            data: {
                name: "1  onion, thinly sliced",
                recipe: { connect: { id: veggieTaco.id } }
            }
        })
        const veggieTacoIngredient3 = await prisma.ingredient.create({
            data: {
                name: "2 cloves of garlic, minced",
                recipe: { connect: { id: veggieTaco.id } }
            }
        })
        const veggieTacoIngredient4 = await prisma.ingredient.create({
            data: {
                name: "1 teaspoon of chili powder",
                recipe: { connect: { id: veggieTaco.id } }
            }
        })
        const veggieTacoIngredient5 = await prisma.ingredient.create({
            data: {
                name: "1/2 teaspoon of cumin",
                recipe: { connect: { id: veggieTaco.id } }
            }
        })
        const veggieTacoIngredient6 = await prisma.ingredient.create({
            data: {
                name: "1/2 teaspoon of smoked paprika",
                recipe: { connect: { id: veggieTaco.id } }
            }
        })
        const veggieTacoIngredient7 = await prisma.ingredient.create({
            data: {
                name: "2 tsp. adobo sauce (from a can of chipotle peppers)",
                recipe: { connect: { id: veggieTaco.id } }
            }
        })
        const veggieTacoIngredient8 = await prisma.ingredient.create({
            data: {
                name: "1 can of black beans, drained and rinsed",
                recipe: { connect: { id: veggieTaco.id } }
            }
        })
        const veggieTacoIngredient9 = await prisma.ingredient.create({
            data: {
                name: "1 package of soft taco tortillas",
                recipe: { connect: { id: veggieTaco.id } }
            }
        })
        const veggieTacoIngredient10 = await prisma.ingredient.create({
            data: {
                name: "Queso fresco cheese (crumbled)",
                recipe: { connect: { id: veggieTaco.id } }
            }
        })
        const veggieTacoIngredient11 = await prisma.ingredient.create({
            data: {
                name: "3 tablespoons of finely chopped fresh cilantro",
                recipe: { connect: { id: veggieTaco.id } }
            }
        })
        const veggieTacoIngredient12 = await prisma.ingredient.create({
            data: {
                name: "1 avocado, thinly sliced",
                recipe: { connect: { id: veggieTaco.id } }
            }
        })
        //Paneer Tikka Masala
        const paneerTikkaMasalaIngredient1 = await prisma.ingredient.create({
            data: {
                name: "14 oz block of paneer, cubed",
                recipe: { connect: { id: paneerTikkaMasala.id } }
            }
        })
        const paneerTikkaMasalaIngredient2 = await prisma.ingredient.create({
            data: {
                name: "2 tablespoons of butter",
                recipe: { connect: { id: paneerTikkaMasala.id } }
            }
        })
        const paneerTikkaMasalaIngredient3 = await prisma.ingredient.create({
            data: {
                name: "1 onion, diced",
                recipe: { connect: { id: paneerTikkaMasala.id } }
            }
        })
        const paneerTikkaMasalaIngredient4 = await prisma.ingredient.create({
            data: {
                name: "3 garlic cloves, minced",
                recipe: { connect: { id: paneerTikkaMasala.id } }
            }
        })
        const paneerTikkaMasalaIngredient5 = await prisma.ingredient.create({
            data: {
                name: "1-inch piece of ginger, grated",
                recipe: { connect: { id: paneerTikkaMasala.id } }
            }
        })
        const paneerTikkaMasalaIngredient6 = await prisma.ingredient.create({
            data: {
                name: "1 can of diced tomatoes",
                recipe: { connect: { id: paneerTikkaMasala.id } }
            }
        })
        const paneerTikkaMasalaIngredient7 = await prisma.ingredient.create({
            data: {
                name: "1/4 cup of heavy cream",
                recipe: { connect: { id: paneerTikkaMasala.id } }
            }
        })
        const paneerTikkaMasalaIngredient8 = await prisma.ingredient.create({
            data: {
                name: "2 teaspoons of garam masala",
                recipe: { connect: { id: paneerTikkaMasala.id } }
            }
        })
        const paneerTikkaMasalaIngredient9 = await prisma.ingredient.create({
            data: {
                name: "1 teaspoon of ground turmeric",
                recipe: { connect: { id: paneerTikkaMasala.id } }
            }
        })
        const paneerTikkaMasalaIngredient10 = await prisma.ingredient.create({
            data: {
                name: "1 teaspoon of ground cumin",
                recipe: { connect: { id: paneerTikkaMasala.id } }
            }
        })
        const paneerTikkaMasalaIngredient11 = await prisma.ingredient.create({
            data: {
                name: "1 teaspoon of ground coriander",
                recipe: { connect: { id: paneerTikkaMasala.id } }
            }
        })
        const paneerTikkaMasalaIngredient12 = await prisma.ingredient.create({
            data: {
                name: "Fresh cilantro for garnish",
                recipe: { connect: { id: paneerTikkaMasala.id } }
            }
        })
        //Italian Quinoa Stuffed Bell Peppers
        const stuffedPeppersIngredient1 = await prisma.ingredient.create({
            data: {
                name: "1 cup of cooked quinoa (following package instructions)",
                recipe: { connect: { id: stuffedPeppers.id } }
            }
        })
        const stuffedPeppersIngredient2 = await prisma.ingredient.create({
            data: {
                name: "4 bell peppers",
                recipe: { connect: { id: stuffedPeppers.id } }
            }
        })
        const stuffedPeppersIngredient3 = await prisma.ingredient.create({
            data: {
                name: "1 tablespoon of olive oil",
                recipe: { connect: { id: stuffedPeppers.id } }
            }
        })
        const stuffedPeppersIngredient4 = await prisma.ingredient.create({
            data: {
                name: "2 garlic cloves, minced",
                recipe: { connect: { id: stuffedPeppers.id } }
            }
        })
        const stuffedPeppersIngredient5 = await prisma.ingredient.create({
            data: {
                name: "1 onion, chopped",
                recipe: { connect: { id: stuffedPeppers.id } }
            }
        })
        const stuffedPeppersIngredient6 = await prisma.ingredient.create({
            data: {
                name: "1 zucchini, chopped",
                recipe: { connect: { id: stuffedPeppers.id } }
            }
        })
        const stuffedPeppersIngredient7 = await prisma.ingredient.create({
            data: {
                name: "2 teaspoon of herbs de provence ",
                recipe: { connect: { id: stuffedPeppers.id } }
            }
        })
        const stuffedPeppersIngredient8 = await prisma.ingredient.create({
            data: {
                name: "1 cup of marinara sauce",
                recipe: { connect: { id: stuffedPeppers.id } }
            }
        })
        const stuffedPeppersIngredient9 = await prisma.ingredient.create({
            data: {
                name: "½ cup of shredded mozzarella",
                recipe: { connect: { id: stuffedPeppers.id } }
            }
        })
        const stuffedPeppersIngredient10 = await prisma.ingredient.create({
            data: {
                name: "¼ cup of parmesan cheese",
                recipe: { connect: { id: stuffedPeppers.id } }
            }
        })
        //Ratatouille
        const ratatouilleIngredient1 = await prisma.ingredient.create({
            data: {
                name: "1 eggplant, diced",
                recipe: { connect: { id: ratatouille.id } }
            }
        })
        const ratatouilleIngredient2 = await prisma.ingredient.create({
            data: {
                name: "2 zucchinis, diced",
                recipe: { connect: { id: ratatouille.id } }
            }
        })
        const ratatouilleIngredient3 = await prisma.ingredient.create({
            data: {
                name: "1 red bell pepper, diced",
                recipe: { connect: { id: ratatouille.id } }
            }
        })
        const ratatouilleIngredient4 = await prisma.ingredient.create({
            data: {
                name: "1 onion, diced",
                recipe: { connect: { id: ratatouille.id } }
            }
        })
        const ratatouilleIngredient5 = await prisma.ingredient.create({
            data: {
                name: "3 garlic cloves, minced",
                recipe: { connect: { id: ratatouille.id } }
            }
        })
        const ratatouilleIngredient6 = await prisma.ingredient.create({
            data: {
                name: "1 can of diced tomatoes",
                recipe: { connect: { id: ratatouille.id } }
            }
        })
        const ratatouilleIngredient7 = await prisma.ingredient.create({
            data: {
                name: "2 tablespoons of tomato paste",
                recipe: { connect: { id: ratatouille.id } }
            }
        })
        const ratatouilleIngredient8 = await prisma.ingredient.create({
            data: {
                name: "1 cup of vegetable broth",
                recipe: { connect: { id: ratatouille.id } }
            }
        })
        const ratatouilleIngredient9 = await prisma.ingredient.create({
            data: {
                name: "1 teaspoon of dried thyme",
                recipe: { connect: { id: ratatouille.id } }
            }
        })
        const ratatouilleIngredient10 = await prisma.ingredient.create({
            data: {
                name: "1 teaspoon of dried oregano",
                recipe: { connect: { id: ratatouille.id } }
            }
        })
        const ratatouilleIngredient11 = await prisma.ingredient.create({
            data: {
                name: "Fresh basil for garnish",
                recipe: { connect: { id: ratatouille.id } }
            }
        })
        //Black Bean Chili
        const blackBeanChiliIngredient1 = await prisma.ingredient.create({
            data: {
                name: "2 cans of black beans, drained and rinsed",
                recipe: { connect: { id: blackBeanChili.id } }
            }
        })
        const blackBeanChiliIngredient2 = await prisma.ingredient.create({
            data: {
                name: "1 onion, diced",
                recipe: { connect: { id: blackBeanChili.id } }
            }
        })
        const blackBeanChiliIngredient3 = await prisma.ingredient.create({
            data: {
                name: "1 bell pepper, diced",
                recipe: { connect: { id: blackBeanChili.id } }
            }
        })
        const blackBeanChiliIngredient4 = await prisma.ingredient.create({
            data: {
                name: "2 garlic cloves, minced",
                recipe: { connect: { id: blackBeanChili.id } }
            }
        })
        const blackBeanChiliIngredient5 = await prisma.ingredient.create({
            data: {
                name: "1 can of diced tomatoes",
                recipe: { connect: { id: blackBeanChili.id } }
            }
        })
        const blackBeanChiliIngredient6 = await prisma.ingredient.create({
            data: {
                name: "2 cups of vegetable broth",
                recipe: { connect: { id: blackBeanChili.id } }
            }
        })
        const blackBeanChiliIngredient7 = await prisma.ingredient.create({
            data: {
                name: "2 tablespoons of chili powder",
                recipe: { connect: { id: blackBeanChili.id } }
            }
        })
        const blackBeanChiliIngredient8 = await prisma.ingredient.create({
            data: {
                name: "1 teaspoon of cumin",
                recipe: { connect: { id: blackBeanChili.id } }
            }
        })
        const blackBeanChiliIngredient9 = await prisma.ingredient.create({
            data: {
                name: "1 teaspoon of smoked paprika",
                recipe: { connect: { id: blackBeanChili.id } }
            }
        })
        const blackBeanChiliIngredient10 = await prisma.ingredient.create({
            data: {
                name: "1 tablespoon of adobo sauce (from a can of chipotle peppers)",
                recipe: { connect: { id: blackBeanChili.id } }
            }
        })
        const blackBeanChiliIngredient11 = await prisma.ingredient.create({
            data: {
                name: "Optional toppings : sour cream, shredded cheese, sliced avocado and chopped cilantro.",
                recipe: { connect: { id: blackBeanChili.id } }
            }
        })
        //Garden Pasta
        const gardenPastaIngredient1 = await prisma.ingredient.create({
            data: {
                name: "8 oz of your favorite pasta",
                recipe: { connect: { id: gardenPasta.id } }
            }
        })
        const gardenPastaIngredient2 = await prisma.ingredient.create({
            data: {
                name: "1 zucchini, diced",
                recipe: { connect: { id: gardenPasta.id } }
            }
        })
        const gardenPastaIngredient3 = await prisma.ingredient.create({
            data: {
                name: "1 yellow squash, diced",
                recipe: { connect: { id: gardenPasta.id } }
            }
        })
        const gardenPastaIngredient4 = await prisma.ingredient.create({
            data: {
                name: "1 bell pepper, diced",
                recipe: { connect: { id: gardenPasta.id } }
            }
        })
        const gardenPastaIngredient5 = await prisma.ingredient.create({
            data: {
                name: "1 cup of cherry tomatoes, halved",
                recipe: { connect: { id: gardenPasta.id } }
            }
        })
        const gardenPastaIngredient6 = await prisma.ingredient.create({
            data: {
                name: "3 garlic cloves, minced",
                recipe: { connect: { id: gardenPasta.id } }
            }
        })
        const gardenPastaIngredient7 = await prisma.ingredient.create({
            data: {
                name: "1/4 cup of chopped fresh basil",
                recipe: { connect: { id: gardenPasta.id } }
            }
        })
        const gardenPastaIngredient8 = await prisma.ingredient.create({
            data: {
                name: "/4 cup of grated parmesan cheese",
                recipe: { connect: { id: gardenPasta.id } }
            }
        })
        const gardenPastaIngredient9 = await prisma.ingredient.create({
            data: {
                name: "2 tablespoons of olive oil",
                recipe: { connect: { id: gardenPasta.id } }
            }
        })
        //Moroccan Vegetable Tagine
        const tagineIngredient1 = await prisma.ingredient.create({
            data: {
                name: "2 tablespoons olive oil",
                recipe: { connect: { id: tagine.id } }
            }
        })
        const tagineIngredient2 = await prisma.ingredient.create({
            data: {
                name: "1 onion, chopped",
                recipe: { connect: { id: tagine.id } }
            }
        })
        const tagineIngredient3 = await prisma.ingredient.create({
            data: {
                name: "2 garlic cloves, minced",
                recipe: { connect: { id: tagine.id } }
            }
        })
        const tagineIngredient4 = await prisma.ingredient.create({
            data: {
                name: "1 teaspoon ground cumin",
                recipe: { connect: { id: tagine.id } }
            }
        })
        const tagineIngredient5 = await prisma.ingredient.create({
            data: {
                name: "1 teaspoon ground coriander",
                recipe: { connect: { id: tagine.id } }
            }
        })
        const tagineIngredient6 = await prisma.ingredient.create({
            data: {
                name: "1 teaspoon ground turmeric",
                recipe: { connect: { id: tagine.id } }
            }
        })
        const tagineIngredient7 = await prisma.ingredient.create({
            data: {
                name: "1 teaspoon ground cinnamon",
                recipe: { connect: { id: tagine.id } }
            }
        })
        const tagineIngredient8 = await prisma.ingredient.create({
            data: {
                name: "1 sweet potato, peeled and cubed",
                recipe: { connect: { id: tagine.id } }
            }
        })
        const tagineIngredient9 = await prisma.ingredient.create({
            data: {
                name: "2 carrots, sliced",
                recipe: { connect: { id: tagine.id } }
            }
        })
        const tagineIngredient10 = await prisma.ingredient.create({
            data: {
                name: "1 red bell pepper, chopped",
                recipe: { connect: { id: tagine.id } }
            }
        })
        const tagineIngredient11 = await prisma.ingredient.create({
            data: {
                name: "1 zucchini, sliced",
                recipe: { connect: { id: tagine.id } }
            }
        })
        const tagineIngredient12 = await prisma.ingredient.create({
            data: {
                name: "1 cup of vegetable broth",
                recipe: { connect: { id: tagine.id } }
            }
        })
        const tagineIngredient13 = await prisma.ingredient.create({
            data: {
                name: "1 can of chickpeas, drained and rinsed",
                recipe: { connect: { id: tagine.id } }
            }
        })
        const tagineIngredient14 = await prisma.ingredient.create({
            data: {
                name: "1 can of diced tomatoes",
                recipe: { connect: { id: tagine.id } }
            }
        })
        const tagineIngredient15 = await prisma.ingredient.create({
            data: {
                name: "Fresh cilantro for garnish",
                recipe: { connect: { id: tagine.id } }
            }
        })
        //Thai Green Curry
        const thaiCurryIngredient1 = await prisma.ingredient.create({
            data: {
                name: "1 tablespoon green curry paste",
                recipe: { connect: { id: thaiCurry.id } }
            }
        })
        const thaiCurryIngredient2 = await prisma.ingredient.create({
            data: {
                name: "1/2 tablespoon of coconut oil",
                recipe: { connect: { id: thaiCurry.id } }
            }
        })
        const thaiCurryIngredient3 = await prisma.ingredient.create({
            data: {
                name: "1 can coconut milk",
                recipe: { connect: { id: thaiCurry.id } }
            }
        })
        const thaiCurryIngredient4 = await prisma.ingredient.create({
            data: {
                name: "1 cup vegetable broth",
                recipe: { connect: { id: thaiCurry.id } }
            }
        })
        const thaiCurryIngredient5 = await prisma.ingredient.create({
            data: {
                name: "1 block firm tofu, cubed",
                recipe: { connect: { id: thaiCurry.id } }
            }
        })
        const thaiCurryIngredient6 = await prisma.ingredient.create({
            data: {
                name: "1 cup green beans, trimmed",
                recipe: { connect: { id: thaiCurry.id } }
            }
        })
        const thaiCurryIngredient7 = await prisma.ingredient.create({
            data: {
                name: "1 red bell pepper, sliced",
                recipe: { connect: { id: thaiCurry.id } }
            }
        })
        const thaiCurryIngredient8 = await prisma.ingredient.create({
            data: {
                name: "1 zucchini, sliced",
                recipe: { connect: { id: thaiCurry.id } }
            }
        })
        const thaiCurryIngredient9 = await prisma.ingredient.create({
            data: {
                name: "1 tablespoon soy sauce",
                recipe: { connect: { id: thaiCurry.id } }
            }
        })
        const thaiCurryIngredient10 = await prisma.ingredient.create({
            data: {
                name: "1 tablespoon brown sugar",
                recipe: { connect: { id: thaiCurry.id } }
            }
        })
        const thaiCurryIngredient11 = await prisma.ingredient.create({
            data: {
                name: "Fresh basil leaves for garnish",
                recipe: { connect: { id: thaiCurry.id } }
            }
        })
        //Misir Wot (Ethiopian Spicy Lentil Stew)
        const misirWotIngredient1 = await prisma.ingredient.create({
            data: {
                name: "1 cup red lentils, rinsed and drained",
                recipe: { connect: { id: misirWot.id } }
            }
        })
        const misirWotIngredient2 = await prisma.ingredient.create({
            data: {
                name: "2 tablespoons olive oil",
                recipe: { connect: { id: misirWot.id } }
            }
        })
        const misirWotIngredient3 = await prisma.ingredient.create({
            data: {
                name: "1 onion, finely chopped",
                recipe: { connect: { id: misirWot.id } }
            }
        })
        const misirWotIngredient4 = await prisma.ingredient.create({
            data: {
                name: "3 garlic cloves, minced",
                recipe: { connect: { id: misirWot.id } }
            }
        })
        const misirWotIngredient5 = await prisma.ingredient.create({
            data: {
                name: "1 tablespoon grated ginger",
                recipe: { connect: { id: misirWot.id } }
            }
        })
        const misirWotIngredient6 = await prisma.ingredient.create({
            data: {
                name: "2 tablespoons berbere spice (Ethiopian spice blend)",
                recipe: { connect: { id: misirWot.id } }
            }
        })
        const misirWotIngredient7 = await prisma.ingredient.create({
            data: {
                name: "3 cups vegetable broth",
                recipe: { connect: { id: misirWot.id } }
            }
        })
        const misirWotIngredient8 = await prisma.ingredient.create({
            data: {
                name: "Injera bread for serving",
                recipe: { connect: { id: misirWot.id } }
            }
        })
        //Spinach and Ricotta Stuffed Pasta Shells
        const stuffedShellsIngredient1 = await prisma.ingredient.create({
            data: {
                name: "1 box jumbo pasta shells",
                recipe: { connect: { id: stuffedShells.id } }
            }
        })
        const stuffedShellsIngredient2 = await prisma.ingredient.create({
            data: {
                name: "10 oz frozen chopped spinach, thawed and drained",
                recipe: { connect: { id: stuffedShells.id } }
            }
        })
        const stuffedShellsIngredient3 = await prisma.ingredient.create({
            data: {
                name: "16 oz of ricotta cheese",
                recipe: { connect: { id: stuffedShells.id } }
            }
        })
        const stuffedShellsIngredient4 = await prisma.ingredient.create({
            data: {
                name: "1 cup of shredded mozzarella cheese",
                recipe: { connect: { id: stuffedShells.id } }
            }
        })
        const stuffedShellsIngredient5 = await prisma.ingredient.create({
            data: {
                name: "1/2 cup of grated Parmesan cheese",
                recipe: { connect: { id: stuffedShells.id } }
            }
        })
        const stuffedShellsIngredient6 = await prisma.ingredient.create({
            data: {
                name: "1 egg",
                recipe: { connect: { id: stuffedShells.id } }
            }
        })
        const stuffedShellsIngredient7 = await prisma.ingredient.create({
            data: {
                name: "1 teaspoon of garlic powder",
                recipe: { connect: { id: stuffedShells.id } }
            }
        })
        const stuffedShellsIngredient8 = await prisma.ingredient.create({
            data: {
                name: "2 cups of marinara sauce",
                recipe: { connect: { id: stuffedShells.id } }
            }
        })
        //Vegetable Pad Thai
        const padThaiIngredient1 = await prisma.ingredient.create({
            data: {
                name: "8 oz rice noodles",
                recipe: { connect: { id: padThai.id } }
            }
        })
        const padThaiIngredient2 = await prisma.ingredient.create({
            data: {
                name: "2 tablespoons of sesame oil",
                recipe: { connect: { id: padThai.id } }
            }
        })
        const padThaiIngredient3 = await prisma.ingredient.create({
            data: {
                name: "1 bell pepper, thinly sliced",
                recipe: { connect: { id: padThai.id } }
            }
        })
        const padThaiIngredient4 = await prisma.ingredient.create({
            data: {
                name: "1 carrot, julienned",
                recipe: { connect: { id: padThai.id } }
            }
        })
        const padThaiIngredient5 = await prisma.ingredient.create({
            data: {
                name: "1 cup of bean sprouts",
                recipe: { connect: { id: padThai.id } }
            }
        })
        const padThaiIngredient6 = await prisma.ingredient.create({
            data: {
                name: "1/2 cup of chopped scallions",
                recipe: { connect: { id: padThai.id } }
            }
        })
        const padThaiIngredient7 = await prisma.ingredient.create({
            data: {
                name: "1/2 cup of chopped peanuts",
                recipe: { connect: { id: padThai.id } }
            }
        })
        const padThaiIngredient8 = await prisma.ingredient.create({
            data: {
                name: "1/4 cup of tamarind paste",
                recipe: { connect: { id: padThai.id } }
            }
        })
        const padThaiIngredient9 = await prisma.ingredient.create({
            data: {
                name: "3 tablespoons of soy sauce",
                recipe: { connect: { id: padThai.id } }
            }
        })
        const padThaiIngredient10 = await prisma.ingredient.create({
            data: {
                name: "2 tablespoons of brown sugar",
                recipe: { connect: { id: padThai.id } }
            }
        })
        const padThaiIngredient11 = await prisma.ingredient.create({
            data: {
                name: "1 tablespoon of rice vinega",
                recipe: { connect: { id: padThai.id } }
            }
        })
        const padThaiIngredient12 = await prisma.ingredient.create({
            data: {
                name: " 1 teaspoon of red pepper flakes (optional)",
                recipe: { connect: { id: padThai.id } }
            }
        })
        const padThaiIngredient13 = await prisma.ingredient.create({
            data: {
                name: "Lime wedges for serving",
                recipe: { connect: { id: padThai.id } }
            }
        })
        //Asparagus and Swiss Frittata
        const frittataIngredient1 = await prisma.ingredient.create({
            data: {
                name: "8 eggs",
                recipe: { connect: { id: frittata.id } }
            }
        })
        const frittataIngredient2 = await prisma.ingredient.create({
            data: {
                name: "1/2 whole cup milk",
                recipe: { connect: { id: frittata.id } }
            }
        })
        const frittataIngredient3 = await prisma.ingredient.create({
            data: {
                name: "1 tablespoon of olive oil",
                recipe: { connect: { id: frittata.id } }
            }
        })
        const frittataIngredient4 = await prisma.ingredient.create({
            data: {
                name: "1 small onion, diced",
                recipe: { connect: { id: frittata.id } }
            }
        })
        const frittataIngredient5 = await prisma.ingredient.create({
            data: {
                name: "1 bunch of asparagus, trimmed and cut into 1-inch pieces",
                recipe: { connect: { id: frittata.id } }
            }
        })
        const frittataIngredient6 = await prisma.ingredient.create({
            data: {
                name: "1 cup of shredded Swiss cheese",
                recipe: { connect: { id: frittata.id } }
            }
        })
        const frittataIngredient7 = await prisma.ingredient.create({
            data: {
                name: "1/4 cup of pecorino romano",
                recipe: { connect: { id: frittata.id } }
            }
        })
        //Homemade Veggie Pizza
        const pizzaIngredient1 = await prisma.ingredient.create({
            data: {
                name: "1 pound of pizza dough",
                recipe: { connect: { id: pizza.id } }
            }
        })
        const pizzaIngredient2 = await prisma.ingredient.create({
            data: {
                name: "1 tablespoon of olive oil",
                recipe: { connect: { id: pizza.id } }
            }
        })
        const pizzaIngredient3 = await prisma.ingredient.create({
            data: {
                name: "1/2 tablespoon of italian seasoning ",
                recipe: { connect: { id: pizza.id } }
            }
        })
        const pizzaIngredient4 = await prisma.ingredient.create({
            data: {
                name: "1/2 cup of marinara sauce",
                recipe: { connect: { id: pizza.id } }
            }
        })
        const pizzaIngredient5 = await prisma.ingredient.create({
            data: {
                name: "12 oz of fresh mozzarella cheese",
                recipe: { connect: { id: pizza.id } }
            }
        })
        const pizzaIngredient6 = await prisma.ingredient.create({
            data: {
                name: "A handful of fresh basil leaves",
                recipe: { connect: { id: pizza.id } }
            }
        })
        //Spinach and Feta Spanakopita
        const spanakopitaIngredient1 = await prisma.ingredient.create({
            data: {
                name: " pound of phyllo pastry",
                recipe: { connect: { id: spanakopita.id } }
            }
        })
        const spanakopitaIngredient2 = await prisma.ingredient.create({
            data: {
                name: "1 pound of  frozen chopped spinach, thawed and drained",
                recipe: { connect: { id: spanakopita.id } }
            }
        })
        const spanakopitaIngredient3 = await prisma.ingredient.create({
            data: {
                name: "1 cup of crumbled feta cheese",
                recipe: { connect: { id: spanakopita.id } }
            }
        })
        const spanakopitaIngredient4 = await prisma.ingredient.create({
            data: {
                name: "1/2 cup of chopped onions",
                recipe: { connect: { id: spanakopita.id } }
            }
        })
        const spanakopitaIngredient5 = await prisma.ingredient.create({
            data: {
                name: "1/4 cup of chopped fresh dill",
                recipe: { connect: { id: spanakopita.id } }
            }
        })
        const spanakopitaIngredient6 = await prisma.ingredient.create({
            data: {
                name: "1/4 cup of chopped fresh parsley",
                recipe: { connect: { id: spanakopita.id } }
            }
        })
        const spanakopitaIngredient7 = await prisma.ingredient.create({
            data: {
                name: "1/4 cup of olive oil",
                recipe: { connect: { id: spanakopita.id } }
            }
        })
        //Taiwanese Veggie Burger (割包)
        const 割包Ingredient1 = await prisma.ingredient.create({
            data: {
                name: "Lotus leaf buns",
                recipe: { connect: { id: 割包.id } }
            }
        })
        const 割包Ingredient2 = await prisma.ingredient.create({
            data: {
                name: "1/2 cup of rice vinegar",
                recipe: { connect: { id: 割包.id } }
            }
        })
        const 割包Ingredient3 = await prisma.ingredient.create({
            data: {
                name: "1/4 cup of sugar",
                recipe: { connect: { id: 割包.id } }
            }
        })
        const 割包Ingredient4 = await prisma.ingredient.create({
            data: {
                name: "1 teaspoon of salt",
                recipe: { connect: { id: 割包.id } }
            }
        })
        const 割包Ingredient5 = await prisma.ingredient.create({
            data: {
                name: "1/2 teaspoon of sesame oil",
                recipe: { connect: { id: 割包.id } }
            }
        })
        const 割包Ingredient6 = await prisma.ingredient.create({
            data: {
                name: "1 cucumber, julienned",
                recipe: { connect: { id: 割包.id } }
            }
        })
        const 割包Ingredient7 = await prisma.ingredient.create({
            data: {
                name: "1 medium carrot, julienned",
                recipe: { connect: { id: 割包.id } }
            }
        })
        const 割包Ingredient8 = await prisma.ingredient.create({
            data: {
                name: "16 oz block of firm tofu",
                recipe: { connect: { id: 割包.id } }
            }
        })
        const 割包Ingredient9 = await prisma.ingredient.create({
            data: {
                name: "1/2 cup of soy sauce",
                recipe: { connect: { id: 割包.id } }
            }
        })
        const 割包Ingredient10 = await prisma.ingredient.create({
            data: {
                name: "1/4 cup of hoisin sauce",
                recipe: { connect: { id: 割包.id } }
            }
        })
        const 割包Ingredient11 = await prisma.ingredient.create({
            data: {
                name: "3 tablespoons of mirin",
                recipe: { connect: { id: 割包.id } }
            }
        })
        const 割包Ingredient12 = await prisma.ingredient.create({
            data: {
                name: "2 cloves garlic, minced",
                recipe: { connect: { id: 割包.id } }
            }
        })
        const 割包Ingredient13 = await prisma.ingredient.create({
            data: {
                name: "2 teaspoons of minced ginger",
                recipe: { connect: { id: 割包.id } }
            }
        })
        const 割包Ingredient14 = await prisma.ingredient.create({
            data: {
                name: "1/4 cup of chopped scallions",
                recipe: { connect: { id: 割包.id } }
            }
        })
        const 割包Ingredient15 = await prisma.ingredient.create({
            data: {
                name: "1/4 cup of chopped cilantro",
                recipe: { connect: { id: 割包.id } }
            }
        })
        const 割包Ingredient16 = await prisma.ingredient.create({
            data: {
                name: "1/4 cup of crushed peanuts",
                recipe: { connect: { id: 割包.id } }
            }
        })
        //African Peanut Stew
        const africanPeanutStewIngredient1 = await prisma.ingredient.create({
            data: {
                name: "1 tablespoon of olive oil",
                recipe: { connect: { id: africanPeanutStew.id } }
            }
        })
        const africanPeanutStewIngredient2 = await prisma.ingredient.create({
            data: {
                name: "1 onion, diced",
                recipe: { connect: { id: africanPeanutStew.id } }
            }
        })
        const africanPeanutStewIngredient3 = await prisma.ingredient.create({
            data: {
                name: "3 cloves garlic, minced",
                recipe: { connect: { id: africanPeanutStew.id } }
            }
        })
        const africanPeanutStewIngredient4 = await prisma.ingredient.create({
            data: {
                name: "1 tablespoon of grated ginger",
                recipe: { connect: { id: africanPeanutStew.id } }
            }
        })
        const africanPeanutStewIngredient5 = await prisma.ingredient.create({
            data: {
                name: "2 teaspoons of cumin",
                recipe: { connect: { id: africanPeanutStew.id } }
            }
        })
        const africanPeanutStewIngredient6 = await prisma.ingredient.create({
            data: {
                name: "2 sweet potatoes, peeled and diced",
                recipe: { connect: { id: africanPeanutStew.id } }
            }
        })
        const africanPeanutStewIngredient7 = await prisma.ingredient.create({
            data: {
                name: "1 red bell pepper, diced",
                recipe: { connect: { id: africanPeanutStew.id } }
            }
        })
        const africanPeanutStewIngredient8 = await prisma.ingredient.create({
            data: {
                name: "1 cup of chopped tomatoes",
                recipe: { connect: { id: africanPeanutStew.id } }
            }
        })
        const africanPeanutStewIngredient9 = await prisma.ingredient.create({
            data: {
                name: "4 cups of vegetable broth",
                recipe: { connect: { id: africanPeanutStew.id } }
            }
        })
        const africanPeanutStewIngredient10 = await prisma.ingredient.create({
            data: {
                name: "1/2 cup of smooth peanut butter",
                recipe: { connect: { id: africanPeanutStew.id } }
            }
        })
        const africanPeanutStewIngredient11 = await prisma.ingredient.create({
            data: {
                name: "1 cup of chopped collard greens",
                recipe: { connect: { id: africanPeanutStew.id } }
            }
        })
        const africanPeanutStewIngredient12 = await prisma.ingredient.create({
            data: {
                name: "Cooked rice for serving",
                recipe: { connect: { id: africanPeanutStew.id } }
            }
        })
        //Eggplant Parmesan
        const eggplantParmIngredient1 = await prisma.ingredient.create({
            data: {
                name: "2 medium eggplants, sliced",
                recipe: { connect: { id: eggplantParm.id } }
            }
        })
        const eggplantParmIngredient2 = await prisma.ingredient.create({
            data: {
                name: "2 cups of marinara sauce",
                recipe: { connect: { id: eggplantParm.id } }
            }
        })
        const eggplantParmIngredient3 = await prisma.ingredient.create({
            data: {
                name: "2 cups of mozzarella cheese, shredded",
                recipe: { connect: { id: eggplantParm.id } }
            }
        })
        const eggplantParmIngredient4 = await prisma.ingredient.create({
            data: {
                name: "1/2 cup of parmesan cheese, grated",
                recipe: { connect: { id: eggplantParm.id } }
            }
        })
        const eggplantParmIngredient5 = await prisma.ingredient.create({
            data: {
                name: "1 cup of all-purpose flour",
                recipe: { connect: { id: eggplantParm.id } }
            }
        })
        const eggplantParmIngredient6 = await prisma.ingredient.create({
            data: {
                name: "2 eggs, beaten",
                recipe: { connect: { id: eggplantParm.id } }
            }
        })
        const eggplantParmIngredient7 = await prisma.ingredient.create({
            data: {
                name: "2 cups of breadcrumbs",
                recipe: { connect: { id: eggplantParm.id } }
            }
        })
        const eggplantParmIngredient8 = await prisma.ingredient.create({
            data: {
                name: "2 tablespoons of olive oil",
                recipe: { connect: { id: eggplantParm.id } }
            }
        })
        const eggplantParmIngredient9 = await prisma.ingredient.create({
            data: {
                name: "Fresh basil for garnish",
                recipe: { connect: { id: eggplantParm.id } }
            }
        })
        //Tofu Katsu
        const tofuKatsuIngredient1 = await prisma.ingredient.create({
            data: {
                name: "1 block of extra firm tofu, sliced into 1 inch slices",
                recipe: { connect: { id: tofuKatsu.id } }
            }
        })
        const tofuKatsuIngredient2 = await prisma.ingredient.create({
            data: {
                name: "1/2 cup of all-purpose flour",
                recipe: { connect: { id: tofuKatsu.id } }
            }
        })
        const tofuKatsuIngredient3 = await prisma.ingredient.create({
            data: {
                name: "2 eggs, beaten",
                recipe: { connect: { id: tofuKatsu.id } }
            }
        })
        const tofuKatsuIngredient4 = await prisma.ingredient.create({
            data: {
                name: "1 cup of panko breadcrumbs",
                recipe: { connect: { id: tofuKatsu.id } }
            }
        })
        const tofuKatsuIngredient5 = await prisma.ingredient.create({
            data: {
                name: "1/4 cup of vegetable oil for frying",
                recipe: { connect: { id: tofuKatsu.id } }
            }
        })
        const tofuKatsuIngredient6 = await prisma.ingredient.create({
            data: {
                name: "For the glaze:",
                recipe: { connect: { id: tofuKatsu.id } }
            }
        })
        const tofuKatsuIngredient7 = await prisma.ingredient.create({
            data: {
                name: "2 tablespoons of white miso paste",
                recipe: { connect: { id: tofuKatsu.id } }
            }
        })
        const tofuKatsuIngredient8 = await prisma.ingredient.create({
            data: {
                name: "2 tablespoons of soy sauce",
                recipe: { connect: { id: tofuKatsu.id } }
            }
        })
        const tofuKatsuIngredient9 = await prisma.ingredient.create({
            data: {
                name: "2 tablespoons of rice vinegar",
                recipe: { connect: { id: tofuKatsu.id } }
            }
        })
        const tofuKatsuIngredient10 = await prisma.ingredient.create({
            data: {
                name: "1 tablespoon of grated ginger",
                recipe: { connect: { id: tofuKatsu.id } }
            }
        })
        const tofuKatsuIngredient11 = await prisma.ingredient.create({
            data: {
                name: "2 tablespoons of mirin",
                recipe: { connect: { id: tofuKatsu.id } }
            }
        })
        //Baked Falafel with Tzatziki Sauce
        const falafelIngredient1 = await prisma.ingredient.create({
            data: {
                name: "2 cans of chickpeas, drained and rinsed",
                recipe: { connect: { id: falafel.id } }
            }
        })
        const falafelIngredient2 = await prisma.ingredient.create({
            data: {
                name: "1 small onion, chopped",
                recipe: { connect: { id: falafel.id } }
            }
        })
        const falafelIngredient3 = await prisma.ingredient.create({
            data: {
                name: "3 garlic cloves, minced",
                recipe: { connect: { id: falafel.id } }
            }
        })
        const falafelIngredient4 = await prisma.ingredient.create({
            data: {
                name: "1/4 cup of chopped parsley",
                recipe: { connect: { id: falafel.id } }
            }
        })
        const falafelIngredient5 = await prisma.ingredient.create({
            data: {
                name: "1 teaspoon of ground cumin",
                recipe: { connect: { id: falafel.id } }
            }
        })
        const falafelIngredient6 = await prisma.ingredient.create({
            data: {
                name: "1 teaspoon of ground coriander",
                recipe: { connect: { id: falafel.id } }
            }
        })
        const falafelIngredient7 = await prisma.ingredient.create({
            data: {
                name: "1/2 teaspoon of cayenne pepper",
                recipe: { connect: { id: falafel.id } }
            }
        })
        const falafelIngredient8 = await prisma.ingredient.create({
            data: {
                name: "2 tablespoons of all-purpose flour",
                recipe: { connect: { id: falafel.id } }
            }
        })
        const falafelIngredient9 = await prisma.ingredient.create({
            data: {
                name: "1 teaspoon of baking powder",
                recipe: { connect: { id: falafel.id } }
            }
        })
        const falafelIngredient10 = await prisma.ingredient.create({
            data: {
                name: "Olive oil for greasing",
                recipe: { connect: { id: falafel.id } }
            }
        })
        const falafelIngredient11 = await prisma.ingredient.create({
            data: {
                name: "For the tzatziki sauce:",
                recipe: { connect: { id: falafel.id } }
            }
        })
        const falafelIngredient12 = await prisma.ingredient.create({
            data: {
                name: "1 English cucumber, seeded and grated",
                recipe: { connect: { id: falafel.id } }
            }
        })
        const falafelIngredient13 = await prisma.ingredient.create({
            data: {
                name: "1 cup of greek yogurt",
                recipe: { connect: { id: falafel.id } }
            }
        })
        const falafelIngredient14 = await prisma.ingredient.create({
            data: {
                name: "2 tablespoons of fresh dill, chopped",
                recipe: { connect: { id: falafel.id } }
            }
        })
        const falafelIngredient15 = await prisma.ingredient.create({
            data: {
                name: "1 tablespoon of lemon juice",
                recipe: { connect: { id: falafel.id } }
            }
        })
        //Aussie “Veggie” Pie
        const veggiePieIngredient1 = await prisma.ingredient.create({
            data: {
                name: "1 sheet of store-bought puff pastry",
                recipe: { connect: { id: veggiePie.id } }
            }
        })
        const veggiePieIngredient2 = await prisma.ingredient.create({
            data: {
                name: "1 teaspoon of olive oil",
                recipe: { connect: { id: veggiePie.id } }
            }
        })
        const veggiePieIngredient3 = await prisma.ingredient.create({
            data: {
                name: "2 cups of mixed vegetables (such as carrots, peas, corn, and green beans)",
                recipe: { connect: { id: veggiePie.id } }
            }
        })
        const veggiePieIngredient4 = await prisma.ingredient.create({
            data: {
                name: "1 onion, chopped",
                recipe: { connect: { id: veggiePie.id } }
            }
        })
        const veggiePieIngredient5 = await prisma.ingredient.create({
            data: {
                name: "2 cloves garlic, minced",
                recipe: { connect: { id: veggiePie.id } }
            }
        })
        const veggiePieIngredient6 = await prisma.ingredient.create({
            data: {
                name: "1 cup of vegetable broth",
                recipe: { connect: { id: veggiePie.id } }
            }
        })
        const veggiePieIngredient7 = await prisma.ingredient.create({
            data: {
                name: "2 of tablespoons all-purpose flour",
                recipe: { connect: { id: veggiePie.id } }
            }
        })
        const veggiePieIngredient8 = await prisma.ingredient.create({
            data: {
                name: "1/2 cup of heavy cream",
                recipe: { connect: { id: veggiePie.id } }
            }
        })
        const veggiePieIngredient9 = await prisma.ingredient.create({
            data: {
                name: "Fresh parsley for garnish",
                recipe: { connect: { id: veggiePie.id } }
            }
        })
        //Vegetarian Moussaka
        const moussakaIngredient1 = await prisma.ingredient.create({
            data: {
                name: "2 eggplants, sliced",
                recipe: { connect: { id: moussaka.id } }
            }
        })
        const moussakaIngredient2 = await prisma.ingredient.create({
            data: {
                name: "2 zucchinis, sliced",
                recipe: { connect: { id: moussaka.id } }
            }
        })
        const moussakaIngredient3 = await prisma.ingredient.create({
            data: {
                name: "1 onion, chopped",
                recipe: { connect: { id: moussaka.id } }
            }
        })
        const moussakaIngredient4 = await prisma.ingredient.create({
            data: {
                name: "3 garlic cloves, minced",
                recipe: { connect: { id: moussaka.id } }
            }
        })
        const moussakaIngredient5 = await prisma.ingredient.create({
            data: {
                name: "1 can of lentils, drained and rinsed",
                recipe: { connect: { id: moussaka.id } }
            }
        })
        const moussakaIngredient6 = await prisma.ingredient.create({
            data: {
                name: "1/4 cups of tomato paste",
                recipe: { connect: { id: moussaka.id } }
            }
        })
        const moussakaIngredient7 = await prisma.ingredient.create({
            data: {
                name: "1 teaspoon of ground cinnamon",
                recipe: { connect: { id: moussaka.id } }
            }
        })
        const moussakaIngredient8 = await prisma.ingredient.create({
            data: {
                name: "1 teaspoon of dried oregano",
                recipe: { connect: { id: moussaka.id } }
            }
        })
        const moussakaIngredient9 = await prisma.ingredient.create({
            data: {
                name: "1/2 cup of grated Parmesan cheese",
                recipe: { connect: { id: moussaka.id } }
            }
        })
        const moussakaIngredient10 = await prisma.ingredient.create({
            data: {
                name: "2 tablespoons of olive oil",
                recipe: { connect: { id: moussaka.id } }
            }
        })
        const moussakaIngredient11 = await prisma.ingredient.create({
            data: {
                name: "For the Bechamel Sauce:",
                recipe: { connect: { id: moussaka.id } }
            }
        })
        const moussakaIngredient12 = await prisma.ingredient.create({
            data: {
                name: "3 tablespoons of butter",
                recipe: { connect: { id: moussaka.id } }
            }
        })
        const moussakaIngredient13 = await prisma.ingredient.create({
            data: {
                name: "1/4 cup of all-purpose flour",
                recipe: { connect: { id: moussaka.id } }
            }
        })
        const moussakaIngredient14 = await prisma.ingredient.create({
            data: {
                name: "2 cups of milk",
                recipe: { connect: { id: moussaka.id } }
            }
        })
        const moussakaIngredient15 = await prisma.ingredient.create({
            data: {
                name: "1/2 teaspoon of ground nutmeg",
                recipe: { connect: { id: moussaka.id } }
            }
        })
        //Vegetarian Dumplings
        const dumplingsIngredient1 = await prisma.ingredient.create({
            data: {
                name: "1 package of dumpling wrappers",
                recipe: { connect: { id: dumplings.id } }
            }
        })
        const dumplingsIngredient2 = await prisma.ingredient.create({
            data: {
                name: "2 cups of finely chopped napa cabbage",
                recipe: { connect: { id: dumplings.id } }
            }
        })
        const dumplingsIngredient3 = await prisma.ingredient.create({
            data: {
                name: "1 cup of shredded carrot",
                recipe: { connect: { id: dumplings.id } }
            }
        })
        const dumplingsIngredient4 = await prisma.ingredient.create({
            data: {
                name: "1/2 cup of chopped mushrooms",
                recipe: { connect: { id: dumplings.id } }
            }
        })
        const dumplingsIngredient5 = await prisma.ingredient.create({
            data: {
                name: "2 cloves of garlic, minced",
                recipe: { connect: { id: dumplings.id } }
            }
        })
        const dumplingsIngredient6 = await prisma.ingredient.create({
            data: {
                name: "2 teaspoons of grated ginger",
                recipe: { connect: { id: dumplings.id } }
            }
        })
        const dumplingsIngredient7 = await prisma.ingredient.create({
            data: {
                name: "2 tablespoons of soy sauce",
                recipe: { connect: { id: dumplings.id } }
            }
        })
        const dumplingsIngredient8 = await prisma.ingredient.create({
            data: {
                name: "1 tablespoon of sesame oil",
                recipe: { connect: { id: dumplings.id } }
            }
        })
        const dumplingsIngredient9 = await prisma.ingredient.create({
            data: {
                name: "2 green onions, thinly sliced",
                recipe: { connect: { id: dumplings.id } }
            }
        })
        const dumplingsIngredient10 = await prisma.ingredient.create({
            data: {
                name: "2 tablespoons of olive oil for pan frying",
                recipe: { connect: { id: dumplings.id } }
            }
        })
        const dumplingsIngredient11 = await prisma.ingredient.create({
            data: {
                name: "For the Dipping Sauce:",
                recipe: { connect: { id: dumplings.id } }
            }
        })
        const dumplingsIngredient12 = await prisma.ingredient.create({
            data: {
                name: "1/4 cup of soy sauce",
                recipe: { connect: { id: dumplings.id } }
            }
        })
        const dumplingsIngredient13 = await prisma.ingredient.create({
            data: {
                name: "2 tablespoons of rice vinegar",
                recipe: { connect: { id: dumplings.id } }
            }
        })
        const dumplingsIngredient14 = await prisma.ingredient.create({
            data: {
                name: "1 teaspoon of sesame oil",
                recipe: { connect: { id: dumplings.id } }
            }
        })
        const dumplingsIngredient15 = await prisma.ingredient.create({
            data: {
                name: "1 teaspoon of honey",
                recipe: { connect: { id: dumplings.id } }
            }
        })
        //Veggie Rainbow Avocado Roll
        const rainbowRollIngredient1 = await prisma.ingredient.create({
            data: {
                name: "2 cups of sushi rice",
                recipe: { connect: { id: rainbowRoll.id } }
            }
        })
        const rainbowRollIngredient2 = await prisma.ingredient.create({
            data: {
                name: "1/4 cup of rice vinegar",
                recipe: { connect: { id: rainbowRoll.id } }
            }
        })
        const rainbowRollIngredient3 = await prisma.ingredient.create({
            data: {
                name: "2 tablespoons of sugar",
                recipe: { connect: { id: rainbowRoll.id } }
            }
        })
        const rainbowRollIngredient4 = await prisma.ingredient.create({
            data: {
                name: "1 teaspoon of salt",
                recipe: { connect: { id: rainbowRoll.id } }
            }
        })
        const rainbowRollIngredient5 = await prisma.ingredient.create({
            data: {
                name: "1 cup of shredded purple cabbage",
                recipe: { connect: { id: rainbowRoll.id } }
            }
        })
        const rainbowRollIngredient6 = await prisma.ingredient.create({
            data: {
                name: "2 carrots, julienned",
                recipe: { connect: { id: rainbowRoll.id } }
            }
        })
        const rainbowRollIngredient7 = await prisma.ingredient.create({
            data: {
                name: "2 small cucumbers, julienned",
                recipe: { connect: { id: rainbowRoll.id } }
            }
        })
        const rainbowRollIngredient8 = await prisma.ingredient.create({
            data: {
                name: "1 ripe avocado, pitted and sliced",
                recipe: { connect: { id: rainbowRoll.id } }
            }
        })
        const rainbowRollIngredient9 = await prisma.ingredient.create({
            data: {
                name: "4 nori sheets",
                recipe: { connect: { id: rainbowRoll.id } }
            }
        })
        const rainbowRollIngredient10 = await prisma.ingredient.create({
            data: {
                name: "Pickled ginger and wasabi, for serving",
                recipe: { connect: { id: rainbowRoll.id } }
            }
        })
        const rainbowRollIngredient11 = await prisma.ingredient.create({
            data: {
                name: "For the sauce:",
                recipe: { connect: { id: rainbowRoll.id } }
            }
        })
        const rainbowRollIngredient12 = await prisma.ingredient.create({
            data: {
                name: "2 tablespoons of mayo",
                recipe: { connect: { id: rainbowRoll.id } }
            }
        })
        const rainbowRollIngredient13 = await prisma.ingredient.create({
            data: {
                name: "1 tablespoon of sriracha",
                recipe: { connect: { id: rainbowRoll.id } }
            }
        })
        const rainbowRollIngredient14 = await prisma.ingredient.create({
            data: {
                name: "1/2 lime, juice of splash of soy sauce",
                recipe: { connect: { id: rainbowRoll.id } }
            }
        })
        //Mushroom Risotto
        const risottoIngredient1 = await prisma.ingredient.create({
            data: {
                name: "2 cups of arborio rice",
                recipe: { connect: { id: risotto.id } }
            }
        })
        const risottoIngredient2 = await prisma.ingredient.create({
            data: {
                name: "6 cups of vegetable broth",
                recipe: { connect: { id: risotto.id } }
            }
        })
        const risottoIngredient3 = await prisma.ingredient.create({
            data: {
                name: "1 onion, finely chopped",
                recipe: { connect: { id: risotto.id } }
            }
        })
        const risottoIngredient4 = await prisma.ingredient.create({
            data: {
                name: "3 cloves of garlic, minced",
                recipe: { connect: { id: risotto.id } }
            }
        })
        const risottoIngredient5 = await prisma.ingredient.create({
            data: {
                name: "1 pound of mixed mushrooms (such as cremini, shiitake, and oyster), sliced",
                recipe: { connect: { id: risotto.id } }
            }
        })
        const risottoIngredient6 = await prisma.ingredient.create({
            data: {
                name: "1/2 cup of dry white wine",
                recipe: { connect: { id: risotto.id } }
            }
        })
        const risottoIngredient7 = await prisma.ingredient.create({
            data: {
                name: "1/2 cup of grated parmesan cheese",
                recipe: { connect: { id: risotto.id } }
            }
        })
        const risottoIngredient8 = await prisma.ingredient.create({
            data: {
                name: " 2 tablespoons of butter",
                recipe: { connect: { id: risotto.id } }
            }
        })
        const risottoIngredient9 = await prisma.ingredient.create({
            data: {
                name: "2 tablespoons of olive oil",
                recipe: { connect: { id: risotto.id } }
            }
        })
        const risottoIngredient10 = await prisma.ingredient.create({
            data: {
                name: "1/4 cup of chopped fresh parsley",
                recipe: { connect: { id: risotto.id } }
            }
        })
        //Vegetarian Biryani
        const biryaniIngredient1 = await prisma.ingredient.create({
            data: {
                name: "2 cups of basmati rice, rinsed and soaked for 30 minutes",
                recipe: { connect: { id: biryani.id } }
            }
        })
        const biryaniIngredient2 = await prisma.ingredient.create({
            data: {
                name: " onion, thinly sliced",
                recipe: { connect: { id: biryani.id } }
            }
        })
        const biryaniIngredient3 = await prisma.ingredient.create({
            data: {
                name: "1 cup of mixed vegetables (such as carrots, peas, and bell peppers)",
                recipe: { connect: { id: biryani.id } }
            }
        })
        const biryaniIngredient4 = await prisma.ingredient.create({
            data: {
                name: "1/2 cup of plain yogurt",
                recipe: { connect: { id: biryani.id } }
            }
        })
        const biryaniIngredient5 = await prisma.ingredient.create({
            data: {
                name: "1/4 cup of chopped fresh cilantro",
                recipe: { connect: { id: biryani.id } }
            }
        })
        const biryaniIngredient6 = await prisma.ingredient.create({
            data: {
                name: "1/4 cup of chopped fresh mint",
                recipe: { connect: { id: biryani.id } }
            }
        })
        const biryaniIngredient7 = await prisma.ingredient.create({
            data: {
                name: "2 cloves of garlic, minced",
                recipe: { connect: { id: biryani.id } }
            }
        })
        const biryaniIngredient8 = await prisma.ingredient.create({
            data: {
                name: "1 teaspoon of grated ginger",
                recipe: { connect: { id: biryani.id } }
            }
        })
        const biryaniIngredient9 = await prisma.ingredient.create({
            data: {
                name: "1 teaspoon of ground cumin",
                recipe: { connect: { id: biryani.id } }
            }
        })
        const biryaniIngredient10 = await prisma.ingredient.create({
            data: {
                name: "1 teaspoon of ground coriander",
                recipe: { connect: { id: biryani.id } }
            }
        })
        const biryaniIngredient11 = await prisma.ingredient.create({
            data: {
                name: "1 teaspoon of turmeric",
                recipe: { connect: { id: biryani.id } }
            }
        })
        const biryaniIngredient12 = await prisma.ingredient.create({
            data: {
                name: "1 teaspoon of garam masala",
                recipe: { connect: { id: biryani.id } }
            }
        })
        const biryaniIngredient13 = await prisma.ingredient.create({
            data: {
                name: "1 cinnamon stick",
                recipe: { connect: { id: biryani.id } }
            }
        })
        const biryaniIngredient14 = await prisma.ingredient.create({
            data: {
                name: "4 whole cloves",
                recipe: { connect: { id: biryani.id } }
            }
        })
        const biryaniIngredient15 = await prisma.ingredient.create({
            data: {
                name: "4 cardamom pods",
                recipe: { connect: { id: biryani.id } }
            }
        })
        const biryaniIngredient16 = await prisma.ingredient.create({
            data: {
                name: "2 bay leaves",
                recipe: { connect: { id: biryani.id } }
            }
        })
        const biryaniIngredient17 = await prisma.ingredient.create({
            data: {
                name: "1 tablespoon of vegetable oil",
                recipe: { connect: { id: biryani.id } }
            }
        })
        // Butternut Squash Mac and Cheese
        const macAndCheeseIngredient1 = await prisma.ingredient.create({
            data: {
                name: "1 pound of cavatappi pasta",
                recipe: { connect: { id: macAndCheese.id } }
            }
        })
        const macAndCheeseIngredient2 = await prisma.ingredient.create({
            data: {
                name: "1 butternut squash, peeled and diced",
                recipe: { connect: { id: macAndCheese.id } }
            }
        })
        const macAndCheeseIngredient3 = await prisma.ingredient.create({
            data: {
                name: "1 tablespoon of chopped fresh rosemary",
                recipe: { connect: { id: macAndCheese.id } }
            }
        })
        const macAndCheeseIngredient4 = await prisma.ingredient.create({
            data: {
                name: "2 teaspoons of olive oil",
                recipe: { connect: { id: macAndCheese.id } }
            }
        })
        const macAndCheeseIngredient5 = await prisma.ingredient.create({
            data: {
                name: "2 cups of milk",
                recipe: { connect: { id: macAndCheese.id } }
            }
        })
        const macAndCheeseIngredient6 = await prisma.ingredient.create({
            data: {
                name: "2 tablespoons of butter",
                recipe: { connect: { id: macAndCheese.id } }
            }
        })
        const macAndCheeseIngredient7 = await prisma.ingredient.create({
            data: {
                name: "3 tablespoons of all-purpose flour",
                recipe: { connect: { id: macAndCheese.id } }
            }
        })
        const macAndCheeseIngredient8 = await prisma.ingredient.create({
            data: {
                name: "1 1/2 cups of shredded cheddar cheese",
                recipe: { connect: { id: macAndCheese.id } }
            }
        })
        const macAndCheeseIngredient9 = await prisma.ingredient.create({
            data: {
                name: "1/2 cup of smoked gouda cheese",
                recipe: { connect: { id: macAndCheese.id } }
            }
        })
        const macAndCheeseIngredient10 = await prisma.ingredient.create({
            data: {
                name: "1/2 cup of grated parmesan cheese",
                recipe: { connect: { id: macAndCheese.id } }
            }
        })
        //<-------------------INSTRUCTIONS------------------->
        // Asian Chopped Salad
        const asianChoppedSaladInstruction1 = await prisma.instruction.create({
            data: {
                stepNumber: 1,
                description: "In a large bowl, combine the shredded red cabbage, julienned carrot, sliced red bell pepper, shelled edamame, chopped peanuts, and chopped cilantro.",
                recipe: { connect: { id: asianChoppedSalad.id } }
            }
        })
        const asianChoppedSaladInstruction2 = await prisma.instruction.create({
            data: {
                stepNumber: 2,
                description: "In a small bowl, whisk together rice vinegar, soy sauce, sesame oil, honey, and grated ginger to make the dressing.",
                recipe: { connect: { id: asianChoppedSalad.id } }
            }
        })
        const asianChoppedSaladInstruction3 = await prisma.instruction.create({
            data: {
                stepNumber: 3,
                description: "Drizzle the dressing over the salad and toss to coat.",
                recipe: { connect: { id: asianChoppedSalad.id } }
            }
        })
        const asianChoppedSaladInstruction4 = await prisma.instruction.create({
            data: {
                stepNumber: 4,
                description: "Top with crispy chow mein noodles before serving.",
                recipe: { connect: { id: asianChoppedSalad.id } }
            }
        })
        //三杯T ofu
        const 三杯TofuInstruction1 = await prisma.instruction.create({
            data: {
                stepNumber: 1,
                description: "In a large skillet or wok, heat sesame oil over medium-high heat.",
                recipe: { connect: { id: 三杯Tofu.id } }
            }
        })
        //
        const 三杯TofuInstruction2 = await prisma.instruction.create({
            data: {
                stepNumber: 2,
                description: "Add the cubed tofu and cook until golden brown on all sides.  Remove from the skillet and set aside.",
                recipe: { connect: { id: 三杯Tofu.id } }
            }
        })
        const 三杯TofuInstruction3 = await prisma.instruction.create({
            data: {
                stepNumber: 3,
                description: "In the same skillet, stir-fry the stir-fry the ginger, bell pepper, mushrooms, broccoli, and snow peas until tender-crisp.",
                recipe: { connect: { id: 三杯Tofu.id } }
            }
        })
        const 三杯TofuInstruction4 = await prisma.instruction.create({
            data: {
                stepNumber: 4,
                description: "Next, add the garlic, soy sauce, shaoxing wine, sugar, and water. Leave to come to a boil, around 2-3 minutes or until the sauce thickens.",
                recipe: { connect: { id: 三杯Tofu.id } }
            }
        })
        const 三杯TofuInstruction5 = await prisma.instruction.create({
            data: {
                stepNumber: 5,
                description: "Add the tofu back in the pan  along with the basil and coat it in the sauce. Cook for another minute or until the basil wilts.",
                recipe: { connect: { id: 三杯Tofu.id } }
            }
        })
        const 三杯TofuInstruction6 = await prisma.instruction.create({
            data: {
                stepNumber: 6,
                description: "Remove from heat and serve with rice.",
                recipe: { connect: { id: 三杯Tofu.id } }
            }
        })
        //Lentil Soup
        const lentilSoupInstruction1 = await prisma.instruction.create({
            data: {
                stepNumber: 1,
                description: "In a large pot, sauté the chopped onions, carrots, and celery until softened.",
                recipe: { connect: { id: lentilSoup.id } }
            }
        })
        const lentilSoupInstruction2 = await prisma.instruction.create({
            data: {
                stepNumber: 2,
                description: "Add the minced garlic, dried thyme, and ground cumin, and cook for another minute.",
                recipe: { connect: { id: lentilSoup.id } }
            }
        })
        const lentilSoupInstruction3 = await prisma.instruction.create({
            data: {
                stepNumber: 3,
                description: "Pour in the vegetable broth, diced tomatoes,spinach, and lentils. Bring to a boil, then reduce heat and simmer for about 30 minutes, or until lentils are tender.",
                recipe: { connect: { id: lentilSoup.id } }
            }
        })
        const lentilSoupInstruction4 = await prisma.instruction.create({
            data: {
                stepNumber: 4,
                description: "Season with salt and pepper to taste before serving.",
                recipe: { connect: { id: lentilSoup.id } }
            }
        })
        //Chocolate Peanut Butter Banana Smoothie
        const bananaSmoothieInstruction1 = await prisma.instruction.create({
            data: {
                stepNumber: 1,
                description: "Peel and freeze bananas (overnight)",
                recipe: { connect: { id: bananaSmoothie.id } }
            }
        })
        const bananaSmoothieInstruction2 = await prisma.instruction.create({
            data: {
                stepNumber: 2,
                description: "Measure out all the ingredients and add them to a blender.",
                recipe: { connect: { id: bananaSmoothie.id } }
            }
        })
        const bananaSmoothieInstruction3 = await prisma.instruction.create({
            data: {
                stepNumber: 3,
                description: "Blend together, and enjoy!",
                recipe: { connect: { id: bananaSmoothie.id } }
            }
        })
        //Veggie Black Bean Tacos
        const veggieTacoInstruction1 = await prisma.instruction.create({
            data: {
                stepNumber: 1,
                description: "In a skillet, sauté the diced bell peppers and onion until tender.",
                recipe: { connect: { id: veggieTaco.id } }
            }
        })
        const veggieTacoInstruction2 = await prisma.instruction.create({
            data: {
                stepNumber: 2,
                description: "Add in the minced garlic, chili powder, cumin, and smoked paprika.  Sauté for another minute",
                recipe: { connect: { id: veggieTaco.id } }
            }
        })
        const veggieTacoInstruction3 = await prisma.instruction.create({
            data: {
                stepNumber: 3,
                description: "Add the black beans and adobo sauce, cooking until heated through.",
                recipe: { connect: { id: veggieTaco.id } }
            }
        })
        const veggieTacoInstruction4 = await prisma.instruction.create({
            data: {
                stepNumber: 4,
                description: "Warm the tortillas and fill them with the vegetable and black bean mixture.",
                recipe: { connect: { id: veggieTaco.id } }
            }
        })
        const veggieTacoInstruction5 = await prisma.instruction.create({
            data: {
                stepNumber: 5,
                description: "Top with cilantro, avocado, and queso fresco",
                recipe: { connect: { id: veggieTaco.id } }
            }
        })
        //Paneer Tikka Masala
        const paneerTikkaMasalaInstruction1 = await prisma.instruction.create({
            data: {
                stepNumber: 1,
                description: "In a saucepan, sauté diced onion, minced garlic, and grated ginger until softened in a tablespoon of butter.",
                recipe: { connect: { id: paneerTikkaMasala.id } }
            }
        })
        const paneerTikkaMasalaInstruction2 = await prisma.instruction.create({
            data: {
                stepNumber: 2,
                description: "Add diced tomatoes, garam masala, ground turmeric, ground cumin, and ground coriander. Cook until the tomatoes break down (about 30 minutes). Make sure to check liquid levels and add water when needed.",
                recipe: { connect: { id: paneerTikkaMasala.id } }
            }
        })
        const paneerTikkaMasalaInstruction3 = await prisma.instruction.create({
            data: {
                stepNumber: 3,
                description: "Using an immersion blender (or remove the mixture and add to a normal blender), blend the mixture together.",
                recipe: { connect: { id: paneerTikkaMasala.id } }
            }
        })
        const paneerTikkaMasalaInstruction4 = await prisma.instruction.create({
            data: {
                stepNumber: 4,
                description: " Set the sauce to the side. In the same saucepan add a tablespoon of butter. Add the cubed paneer and brown all the sides (cooking for 1 minute on each side). ",
                recipe: { connect: { id: paneerTikkaMasala.id } }
            }
        })
        const paneerTikkaMasalaInstruction5 = await prisma.instruction.create({
            data: {
                stepNumber: 5,
                description: "Add the sauce and heavy cream back in the saucepan, and simmer for a few minutes until heated through.",
                recipe: { connect: { id: paneerTikkaMasala.id } }
            }
        })
        const paneerTikkaMasalaInstruction6 = await prisma.instruction.create({
            data: {
                stepNumber: 6,
                description: "Garnish with fresh cilantro before serving.",
                recipe: { connect: { id: paneerTikkaMasala.id } }
            }
        })
        //Italian Quinoa Stuffed Bell Peppers
        const stuffedPeppersInstruction1 = await prisma.instruction.create({
            data: {
                stepNumber: 1,
                description: "Preheat the oven to 375°F",
                recipe: { connect: { id: stuffedPeppers.id } }
            }
        })
        const stuffedPeppersInstruction2 = await prisma.instruction.create({
            data: {
                stepNumber: 2,
                description: "Cook the quinoa according to package instructions.",
                recipe: { connect: { id: stuffedPeppers.id } }
            }
        })
        const stuffedPeppersInstruction3 = await prisma.instruction.create({
            data: {
                stepNumber: 3,
                description: "In a skillet, sauté onions, herbs de provence, garlic, and zucchini until soft.",
                recipe: { connect: { id: stuffedPeppers.id } }
            }
        })
        const stuffedPeppersInstruction4 = await prisma.instruction.create({
            data: {
                stepNumber: 4,
                description: "Add in the marinara sauce and heat through.",
                recipe: { connect: { id: stuffedPeppers.id } }
            }
        })
        const stuffedPeppersInstruction5 = await prisma.instruction.create({
            data: {
                stepNumber: 5,
                description: "Add in the quinoa and mix together and set to the side",
                recipe: { connect: { id: stuffedPeppers.id } }
            }
        })
        const stuffedPeppersInstruction6 = await prisma.instruction.create({
            data: {
                stepNumber: 6,
                description: "Take the bell peppers and cut them in half; removing the stems and seeds",
                recipe: { connect: { id: stuffedPeppers.id } }
            }
        })
        const stuffedPeppersInstruction7 = await prisma.instruction.create({
            data: {
                stepNumber: 7,
                description: "Spoon the quinoa and vegetable mixture into halved and seeded bell peppers",
                recipe: { connect: { id: stuffedPeppers.id } }
            }
        })
        const stuffedPeppersInstruction8 = await prisma.instruction.create({
            data: {
                stepNumber: 8,
                description: "Sprinkle with the cheeses and bake in the preheated for 25-30 minutes, or until the peppers are tender.",
                recipe: { connect: { id: stuffedPeppers.id } }
            }
        })
        //Ratatouille
        const ratatouilleIstruction1 = await prisma.instruction.create({
            data: {
                stepNumber: 1,
                description: "In a large skillet, sauté diced eggplant, zucchini, red bell pepper, and onion until softened.",
                recipe: { connect: { id: ratatouille.id } }
            }
        })
        const ratatouilleIstruction2 = await prisma.instruction.create({
            data: {
                stepNumber: 2,
                description: "Add minced garlic, diced tomatoes, tomato paste, dried thyme, and dried oregano. ",
                recipe: { connect: { id: ratatouille.id } }
            }
        })
        const ratatouilleIstruction3 = await prisma.instruction.create({
            data: {
                stepNumber: 3,
                description: "Add in the vegetable broth and cook until the vegetables are tender.",
                recipe: { connect: { id: ratatouille.id } }
            }
        })
        const ratatouilleIstruction4 = await prisma.instruction.create({
            data: {
                stepNumber: 4,
                description: "Garnish with fresh basil before serving.",
                recipe: { connect: { id: ratatouille.id } }
            }
        })
        //Black Bean Chili
        const blackBeanChiliIstruction1 = await prisma.instruction.create({
            data: {
                stepNumber: 1,
                description: "In a large pot, sauté the diced onions, bell pepper, and minced garlic until softened.",
                recipe: { connect: { id: blackBeanChili.id } }
            }
        })
        const blackBeanChiliIstruction2 = await prisma.instruction.create({
            data: {
                stepNumber: 2,
                description: "Add the chili powder, cumin, and smoked paprika. Cook for another 2 minutes.",
                recipe: { connect: { id: blackBeanChili.id } }
            }
        })
        const blackBeanChiliIstruction3 = await prisma.instruction.create({
            data: {
                stepNumber: 3,
                description: "Add the black beans, diced tomatoes, vegetable broth, and adobo sauce.",
                recipe: { connect: { id: blackBeanChili.id } }
            }
        })
        const blackBeanChiliIstruction4 = await prisma.instruction.create({
            data: {
                stepNumber: 4,
                description: "Simmer for 20-30 minutes to allow the flavors to meld.",
                recipe: { connect: { id: blackBeanChili.id } }
            }
        })
        const blackBeanChiliIstruction5 = await prisma.instruction.create({
            data: {
                stepNumber: 5,
                description: "Ladle into bowls and serve with toppings.",
                recipe: { connect: { id: blackBeanChili.id } }
            }
        })
        //Garden Pasta
        const gardenPastaIstruction1 = await prisma.instruction.create({
            data: {
                stepNumber: 1,
                description: "Cook the pasta according to package instructions.",
                recipe: { connect: { id: gardenPasta.id } }
            }
        })
        const gardenPastaIstruction2 = await prisma.instruction.create({
            data: {
                stepNumber: 2,
                description: " As the pasta cooks, In a large skillet, heat the olive oil and sauté the diced zucchini, yellow squash, bell pepper, cherry tomatoes, and minced garlic until tender. (about 10 minutes).",
                recipe: { connect: { id: gardenPasta.id } }
            }
        })
        const gardenPastaIstruction3 = await prisma.instruction.create({
            data: {
                stepNumber: 3,
                description: "Drain the pasta (do not rinse it!) and toss the cooked pasta with the sautéed vegetables, grated parmesan cheese, and salt and pepper to taste.",
                recipe: { connect: { id: gardenPasta.id } }
            }
        })
        const gardenPastaIstruction4 = await prisma.instruction.create({
            data: {
                stepNumber: 4,
                description: "Top with the fresh basil and extra cheese on top.",
                recipe: { connect: { id: gardenPasta.id } }
            }
        })
        //Moroccan Vegetable Tagine
        const tagineInstruction1 = await prisma.instruction.create({
            data: {
                stepNumber: 1,
                description: "In a large pot or tagine, heat the olive oil over medium heat. Add the onion and garlic, and cook until softened.",
                recipe: { connect: { id: tagine.id } }
            }
        })
        const tagineInstruction2 = await prisma.instruction.create({
            data: {
                stepNumber: 2,
                description: "Stir in the cumin, coriander, turmeric, and cinnamon, and cook for another minute.",
                recipe: { connect: { id: tagine.id } }
            }
        })
        const tagineInstruction3 = await prisma.instruction.create({
            data: {
                stepNumber: 3,
                description: "Add the sweet potato, carrots, bell pepper, and zucchini to the pot, and cook for a few minutes.",
                recipe: { connect: { id: tagine.id } }
            }
        })
        const tagineInstruction4 = await prisma.instruction.create({
            data: {
                stepNumber: 4,
                description: "Pour in the vegetable broth and diced tomatoes. Bring to a simmer and cook for 20-25 minutes, until the vegetables are tender.",
                recipe: { connect: { id: tagine.id } }
            }
        })
        const tagineInstruction5 = await prisma.instruction.create({
            data: {
                stepNumber: 5,
                description: "Add the chickpeas and season with salt and pepper. Cook for an additional 5 minutes.",
                recipe: { connect: { id: tagine.id } }
            }
        })
        //Thai Green Curry
        const thaiCurryInstruction1 = await prisma.instruction.create({
            data: {
                stepNumber: 1,
                description: "In a large skillet or pot, heat the coconut oil and seer the tofu on browning both sides.",
                recipe: { connect: { id: thaiCurry.id } }
            }
        })
        const thaiCurryInstruction2 = await prisma.instruction.create({
            data: {
                stepNumber: 2,
                description: "Remove the tofu, and add the green curry paste over medium heat for a minute.",
                recipe: { connect: { id: thaiCurry.id } }
            }
        })
        const thaiCurryInstruction3 = await prisma.instruction.create({
            data: {
                stepNumber: 3,
                description: "Pour in the coconut milk and vegetable broth, and bring to a gentle simmer.",
                recipe: { connect: { id: thaiCurry.id } }
            }
        })
        const thaiCurryInstruction4 = await prisma.instruction.create({
            data: {
                stepNumber: 4,
                description: "Add the green beans, bell pepper, and zucchini to the pot. Cook for 10-15 minutes, until the vegetables are tender.",
                recipe: { connect: { id: thaiCurry.id } }
            }
        })
        const thaiCurryInstruction5 = await prisma.instruction.create({
            data: {
                stepNumber: 5,
                description: "Stir in the soy sauce and brown sugar, and cook for an additional 5 minutes.",
                recipe: { connect: { id: thaiCurry.id } }
            }
        })
        const thaiCurryInstruction6 = await prisma.instruction.create({
            data: {
                stepNumber: 6,
                description: "Add the tofu back in to heat through.",
                recipe: { connect: { id: thaiCurry.id } }
            }
        })
        const thaiCurryInstruction7 = await prisma.instruction.create({
            data: {
                stepNumber: 7,
                description: "Garnish with fresh basil leaves and serve with cooked rice.",
                recipe: { connect: { id: thaiCurry.id } }
            }
        })
        //Misir Wot (Ethiopian Spicy Lentil Stew)
        const misirWotInstruction1 = await prisma.instruction.create({
            data: {
                stepNumber: 1,
                description: "In a pot, heat the olive oil over medium heat. Add the onion, garlic, and ginger, and cook until softened.",
                recipe: { connect: { id: misirWot.id } }
            }
        })
        const misirWotInstruction2 = await prisma.instruction.create({
            data: {
                stepNumber: 2,
                description: "Stir in the berbere spice and cook for a minute.",
                recipe: { connect: { id: misirWot.id } }
            }
        })
        const misirWotInstruction3 = await prisma.instruction.create({
            data: {
                stepNumber: 3,
                description: "Add the red lentils and vegetable broth to the pot, and bring to a boil.",
                recipe: { connect: { id: misirWot.id } }
            }
        })
        const misirWotInstruction4 = await prisma.instruction.create({
            data: {
                stepNumber: 4,
                description: "Reduce the heat and simmer for 20-25 minutes, until the lentils are soft and the sauce has thickened.",
                recipe: { connect: { id: misirWot.id } }
            }
        })
        const misirWotInstruction5 = await prisma.instruction.create({
            data: {
                stepNumber: 5,
                description: "Season with salt to taste. Serve with injera bread.",
                recipe: { connect: { id: misirWot.id } }
            }
        })
        //Spinach and Ricotta Stuffed Pasta Shells
        const stuffedShellsInstruction1 = await prisma.instruction.create({
            data: {
                stepNumber: 1,
                description: "Cook the pasta shells according to package instructions, then drain and set aside to cool.",
                recipe: { connect: { id: stuffedShells.id } }
            }
        })
        const stuffedShellsInstruction2 = await prisma.instruction.create({
            data: {
                stepNumber: 2,
                description: "In a mixing bowl, combine the spinach, ricotta cheese, mozzarella cheese, Parmesan cheese, egg, garlic powder, salt, and pepper.",
                recipe: { connect: { id: stuffedShells.id } }
            }
        })
        const stuffedShellsInstruction3 = await prisma.instruction.create({
            data: {
                stepNumber: 3,
                description: "Fill each pasta shell with the spinach and ricotta mixture and place them in a baking dish.",
                recipe: { connect: { id: stuffedShells.id } }
            }
        })
        const stuffedShellsInstruction4 = await prisma.instruction.create({
            data: {
                stepNumber: 4,
                description: "Pour the marinara sauce over the stuffed shells and sprinkle with additional mozzarella cheese.",
                recipe: { connect: { id: stuffedShells.id } }
            }
        })
        const stuffedShellsInstruction5 = await prisma.instruction.create({
            data: {
                stepNumber: 5,
                description: "Bake in a preheated oven at 375°F for 25-30 minutes or until the cheese is melted and bubbly.",
                recipe: { connect: { id: stuffedShells.id } }
            }
        })
        //Vegetable Pad Thai
        const padThaiInstruction1 = await prisma.instruction.create({
            data: {
                stepNumber: 1,
                description: "In a large skillet, heat the sesame oil over medium-high heat.",
                recipe: { connect: { id: padThai.id } }
            }
        })
        const padThaiInstruction2 = await prisma.instruction.create({
            data: {
                stepNumber: 2,
                description: "Add the bell pepper, carrot, and bean sprouts to the skillet and stir-fry for 3-4 minutes.",
                recipe: { connect: { id: padThai.id } }
            }
        })
        const padThaiInstruction3 = await prisma.instruction.create({
            data: {
                stepNumber: 3,
                description: "Cook the rice noodles according to package instructions, then drain and set aside.",
                recipe: { connect: { id: padThai.id } }
            }
        })
        const padThaiInstruction4 = await prisma.instruction.create({
            data: {
                stepNumber: 4,
                description: "As the noodles are cooking, In a small bowl, whisk together the tamarind paste, soy sauce, brown sugar, rice vinegar, and red pepper flakes.",
                recipe: { connect: { id: padThai.id } }
            }
        })
        const padThaiInstruction5 = await prisma.instruction.create({
            data: {
                stepNumber: 5,
                description: "Add the cooked noodles and tamarind sauce to the skillet and toss to combine.",
                recipe: { connect: { id: padThai.id } }
            }
        })
        const padThaiInstruction6 = await prisma.instruction.create({
            data: {
                stepNumber: 6,
                description: "Serve the Pad Thai garnished with chopped scallions, chopped peanuts, and lime wedges.",
                recipe: { connect: { id: padThai.id } }
            }
        })
        //Asparagus and Swiss Frittata
        const frittataInstruction1 = await prisma.instruction.create({
            data: {
                stepNumber: 1,
                description: "In a bowl, whisk together the eggs, swiss cheese, milk, and salt and pepper to taste.",
                recipe: { connect: { id: frittata.id } }
            }
        })
        const frittataInstruction2 = await prisma.instruction.create({
            data: {
                stepNumber: 2,
                description: "In a 10-inch oven-safe skillet, heat the olive oil over medium heat.",
                recipe: { connect: { id: frittata.id } }
            }
        })
        const frittataInstruction3 = await prisma.instruction.create({
            data: {
                stepNumber: 3,
                description: "Add the diced onion and asparagus to the skillet and sauté for 5-7 minutes.",
                recipe: { connect: { id: frittata.id } }
            }
        })
        const frittataInstruction4 = await prisma.instruction.create({
            data: {
                stepNumber: 4,
                description: "Preheat the broiler in the oven.",
                recipe: { connect: { id: frittata.id } }
            }
        })
        const frittataInstruction5 = await prisma.instruction.create({
            data: {
                stepNumber: 5,
                description: "Pour the egg and cheese mixture over the asparagus and onions in the skillet and cook for 3-4 minutes, lifting the edges of the frittata with a rubber spatula to let the uncooked egg flow underneath, but do not scramble or touch the middle.",
                recipe: { connect: { id: frittata.id } }
            }
        })
        const frittataInstruction6 = await prisma.instruction.create({
            data: {
                stepNumber: 6,
                description: "Sprinkle the shredded  Pecorino Romano over the frittata and transfer the skillet to the preheated broiler.",
                recipe: { connect: { id: frittata.id } }
            }
        })
        const frittataInstruction7 = await prisma.instruction.create({
            data: {
                stepNumber: 7,
                description: "Broil for 2-3 minutes or until the frittata is set and golden brown on top.",
                recipe: { connect: { id: frittata.id } }
            }
        })
        //Homemade Veggie Pizza
        const pizzaInstruction1 = await prisma.instruction.create({
            data: {
                stepNumber: 1,
                description: "Preheat the oven to 450°F.",
                recipe: { connect: { id: pizza.id } }
            }
        })
        const pizzaInstruction2 = await prisma.instruction.create({
            data: {
                stepNumber: 2,
                description: "Roll out the pizza dough into a 12-inch circle and transfer it to a lightly greased pizza pan or baking sheet.",
                recipe: { connect: { id: pizza.id } }
            }
        })
        const pizzaInstruction3 = await prisma.instruction.create({
            data: {
                stepNumber: 3,
                description: "Take the olive oil, italian seasoning, and salt and pepper to taste, and mix them together, and then spread it all over the pizza dough.",
                recipe: { connect: { id: pizza.id } }
            }
        })
        const pizzaInstruction4 = await prisma.instruction.create({
            data: {
                stepNumber: 4,
                description: "Spread the marinara sauce evenly over the pizza dough, leaving a small border around the edges.",
                recipe: { connect: { id: pizza.id } }
            }
        })
        const pizzaInstruction5 = await prisma.instruction.create({
            data: {
                stepNumber: 5,
                description: "Layer the mozzarella cheese over the sauce, then arrange the fresh basil on top.",
                recipe: { connect: { id: pizza.id } }
            }
        })
        const pizzaInstruction6 = await prisma.instruction.create({
            data: {
                stepNumber: 6,
                description: "Bake the pizza in the preheated oven for 15-25 minutes or until the crust is golden brown and the cheese is bubbly.",
                recipe: { connect: { id: pizza.id } }
            }
        })
        const pizzaInstruction7 = await prisma.instruction.create({
            data: {
                stepNumber: 7,
                description: "Remove the pizza from the oven and enjoy!",
                recipe: { connect: { id: pizza.id } }
            }
        })
        //Spinach and Feta Spanakopita
        const spanakopitaInstruction1 = await prisma.instruction.create({
            data: {
                stepNumber: 1,
                description: "Preheat the oven to 375°F.",
                recipe: { connect: { id: spanakopita.id } }
            }
        })
        const spanakopitaInstruction2 = await prisma.instruction.create({
            data: {
                stepNumber: 2,
                description: "In a bowl, combine the spinach, feta cheese, chopped onions, dill, parsley, olive oil, and salt and pepper to taste.",
                recipe: { connect: { id: spanakopita.id } }
            }
        })
        const spanakopitaInstruction3 = await prisma.instruction.create({
            data: {
                stepNumber: 3,
                description: "Lay a sheet of phyllo pastry on a clean work surface and brush it lightly with olive oil.",
                recipe: { connect: { id: spanakopita.id } }
            }
        })
        const spanakopitaInstruction4 = await prisma.instruction.create({
            data: {
                stepNumber: 4,
                description: "Place another sheet of phyllo on top and brush it with oil as well.",
                recipe: { connect: { id: spanakopita.id } }
            }
        })
        const spanakopitaInstruction5 = await prisma.instruction.create({
            data: {
                stepNumber: 5,
                description: "Spoon some of the spinach and feta mixture along one edge of the phyllo sheets, then fold the edge over the filling to form a triangle.",
                recipe: { connect: { id: spanakopita.id } }
            }
        })
        const spanakopitaInstruction6 = await prisma.instruction.create({
            data: {
                stepNumber: 6,
                description: "Continue folding the phyllo and the filling into a triangle shape, brushing each layer with olive oil as you go.",
                recipe: { connect: { id: spanakopita.id } }
            }
        })
        const spanakopitaInstruction7 = await prisma.instruction.create({
            data: {
                stepNumber: 7,
                description: "Place the assembled spanakopita on a baking sheet, brush the top with oil, and bake in the preheated oven for 25-30 minutes or until golden brown and crisp.",
                recipe: { connect: { id: spanakopita.id } }
            }
        })
        //Taiwanese Veggie Burger (割包)
        const 割包Instruction1 = await prisma.instruction.create({
            data: {
                stepNumber: 1,
                description: "The night before, take the soy sauce, 1 tablespoon of hoisin sauce, the mirin, garlic, and minced ginger and mix them together.",
                recipe: { connect: { id: 割包.id } }
            }
        })
        const 割包Instruction2 = await prisma.instruction.create({
            data: {
                stepNumber: 2,
                description: "Take the tofu, and cut them into large 1 inch slices. Add the tofu to the mixture and marinate it overnight or for 6 hours.",
                recipe: { connect: { id: 割包.id } }
            }
        })
        const 割包Instruction3 = await prisma.instruction.create({
            data: {
                stepNumber: 3,
                description: "Take the rice vinegar, sugar, salt, and sesame oil and mix them together in a separate bowl.",
                recipe: { connect: { id: 割包.id } }
            }
        })
        const 割包Instruction4 = await prisma.instruction.create({
            data: {
                stepNumber: 4,
                description: "Thinly slice the carrot and cucumber. Add them to the rice vinegar and sugar mixture, making sure they are fully submerged. Also let sit overnight or for 6 hours.",
                recipe: { connect: { id: 割包.id } }
            }
        })
        const 割包Instruction5 = await prisma.instruction.create({
            data: {
                stepNumber: 5,
                description: "Preheat the oven to 400°F.",
                recipe: { connect: { id: 割包.id } }
            }
        })
        const 割包Instruction6 = await prisma.instruction.create({
            data: {
                stepNumber: 6,
                description: "Place the sliced tofu on a baking sheet lined with parchment paper and bake for 20-25 minutes or until golden and crispy on the outside.",
                recipe: { connect: { id: 割包.id } }
            }
        })
        const 割包Instruction7 = await prisma.instruction.create({
            data: {
                stepNumber: 7,
                description: "Steam the frozen bao buns according to package instructions.",
                recipe: { connect: { id: 割包.id } }
            }
        })
        const 割包Instruction8 = await prisma.instruction.create({
            data: {
                stepNumber: 8,
                description: "Spread a spoonful of the leftover hoisin sauce inside each bao bun, then fill it with a piece of crispy tofu, chopped scallions, cilantro, crushed peanuts, and the shredded pickled vegetables.",
                recipe: { connect: { id: 割包.id } }
            }
        })
        const 割包Instruction9 = await prisma.instruction.create({
            data: {
                stepNumber: 9,
                description: "Serve the gua bao immediately while still warm.",
                recipe: { connect: { id: 割包.id } }
            }
        })
        //African Peanut Stew
        const africanPeanutStewInstruction1 = await prisma.instruction.create({
            data: {
                stepNumber: 1,
                description: "In a large pot, heat the vegetable oil over medium heat.",
                recipe: { connect: { id: africanPeanutStew.id } }
            }
        })
        const africanPeanutStewInstruction2 = await prisma.instruction.create({
            data: {
                stepNumber: 2,
                description: "Add the diced onion, minced garlic, and grated ginger to the pot and sauté for 3-4 minutes.",
                recipe: { connect: { id: africanPeanutStew.id } }
            }
        })
        const africanPeanutStewInstruction3 = await prisma.instruction.create({
            data: {
                stepNumber: 3,
                description: "Stir in the diced sweet potatoes and red bell pepper, then cook for an additional 5 minutes to brown them.",
                recipe: { connect: { id: africanPeanutStew.id } }
            }
        })
        const africanPeanutStewInstruction4 = await prisma.instruction.create({
            data: {
                stepNumber: 4,
                description: "Add the chopped tomatoes and vegetable broth to the pot and bring the stew to a simmer.",
                recipe: { connect: { id: africanPeanutStew.id } }
            }
        })
        const africanPeanutStewInstruction5 = await prisma.instruction.create({
            data: {
                stepNumber: 5,
                description: "In a small bowl, whisk the peanut butter with a ladleful of the hot broth until smooth, then stir the mixture back into the pot.",
                recipe: { connect: { id: africanPeanutStew.id } }
            }
        })
        const africanPeanutStewInstruction6 = await prisma.instruction.create({
            data: {
                stepNumber: 6,
                description: "Simmer the stew for 15-20 minutes or until the sweet potatoes are tender.",
                recipe: { connect: { id: africanPeanutStew.id } }
            }
        })
        const africanPeanutStewInstruction7 = await prisma.instruction.create({
            data: {
                stepNumber: 7,
                description: "Stir in the chopped collard greens and cook for an additional 5 minutes.",
                recipe: { connect: { id: africanPeanutStew.id } }
            }
        })
        const africanPeanutStewInstruction8 = await prisma.instruction.create({
            data: {
                stepNumber: 8,
                description: "Season the stew with salt and pepper to taste and serve over cooked rice.",
                recipe: { connect: { id: africanPeanutStew.id } }
            }
        })
        //Eggplant Parmesan
        const eggplantParmInstruction1 = await prisma.instruction.create({
            data: {
                stepNumber: 1,
                description: "Preheat the oven to 375°F and grease a baking dish.",
                recipe: { connect: { id: eggplantParm.id } }
            }
        })
        const eggplantParmInstruction2 = await prisma.instruction.create({
            data: {
                stepNumber: 2,
                description: "Season the eggplant slices with salt and let them sit for 15 minutes to draw out excess moisture. Pat them dry with a paper towel.",
                recipe: { connect: { id: eggplantParm.id } }
            }
        })
        const eggplantParmInstruction3 = await prisma.instruction.create({
            data: {
                stepNumber: 3,
                description: "Set up three shallow dishes: one with flour, one with beaten eggs, and one with breadcrumbs.",
                recipe: { connect: { id: eggplantParm.id } }
            }
        })
        const eggplantParmInstruction4 = await prisma.instruction.create({
            data: {
                stepNumber: 4,
                description: "Dredge each eggplant slice in the flour, then dip it in the eggs, and coat it with breadcrumbs.",
                recipe: { connect: { id: eggplantParm.id } }
            }
        })
        const eggplantParmInstruction5 = await prisma.instruction.create({
            data: {
                stepNumber: 5,
                description: "Heat some olive oil in a large skillet over medium-high heat. Fry the breaded eggplant slices until golden brown, then drain on a paper towel.",
                recipe: { connect: { id: eggplantParm.id } }
            }
        })
        const eggplantParmInstruction6 = await prisma.instruction.create({
            data: {
                stepNumber: 6,
                description: "Place a layer of marinara sauce in the bottom of the prepared baking dish, then layer with fried eggplant slices, topping each layer with mozzarella cheese and Parmesan cheese. Repeat the layers, finishing with more cheese on top.",
                recipe: { connect: { id: eggplantParm.id } }
            }
        })
        const eggplantParmInstruction7 = await prisma.instruction.create({
            data: {
                stepNumber: 7,
                description: "Bake for 30-35 minutes, or until the eggplant is cooked through and the cheese is melted and bubbly.",
                recipe: { connect: { id: eggplantParm.id } }
            }
        })
        const eggplantParmInstruction8 = await prisma.instruction.create({
            data: {
                stepNumber: 8,
                description: "Let it cool for a few minutes, then sprinkle with fresh basil before serving.",
                recipe: { connect: { id: eggplantParm.id } }
            }
        })
        //Tofu Katsu
        const tofuKatsuInstruction1 = await prisma.instruction.create({
            data: {
                stepNumber: 1,
                description: "Press the sliced tofu between paper towels to remove excess moisture.",
                recipe: { connect: { id: tofuKatsu.id } }
            }
        })
        const tofuKatsuInstruction2 = await prisma.instruction.create({
            data: {
                stepNumber: 2,
                description: "Set up three shallow dishes: one with flour, one with beaten eggs, and one with panko breadcrumbs.",
                recipe: { connect: { id: tofuKatsu.id } }
            }
        })
        const tofuKatsuInstruction3 = await prisma.instruction.create({
            data: {
                stepNumber: 3,
                description: "Dredge each tofu slice in the flour, then dip it in the eggs, and coat it with panko breadcrumbs, pressing gently to adhere.",
                recipe: { connect: { id: tofuKatsu.id } }
            }
        })
        const tofuKatsuInstruction4 = await prisma.instruction.create({
            data: {
                stepNumber: 4,
                description: "Heat vegetable oil in a large skillet over medium-high heat, and fry the breaded tofu slices until golden brown and crispy. Place on a paper towel afterwards to drain excess oil.",
                recipe: { connect: { id: tofuKatsu.id } }
            }
        })
        const tofuKatsuInstruction5 = await prisma.instruction.create({
            data: {
                stepNumber: 5,
                description: "In a small saucepan, combine the miso paste, soy sauce, rice vinegar, grated ginger, and mirin. Heat over medium heat until the sugar dissolves and the glaze is smooth.",
                recipe: { connect: { id: tofuKatsu.id } }
            }
        })
        const tofuKatsuInstruction6 = await prisma.instruction.create({
            data: {
                stepNumber: 6,
                description: "Serve the tofu katsu drizzled with the ginger miso glaze.",
                recipe: { connect: { id: tofuKatsu.id } }
            }
        })
        //Baked Falafel with Tzatziki Sauce
        const falafelInstruction1 = await prisma.instruction.create({
            data: {
                stepNumber: 1,
                description: "In a food processor, combine the chickpeas, onion, garlic, parsley, cumin, coriander, cayenne, salt, and black pepper. Pulse until the mixture is coarsely ground but not pureed.",
                recipe: { connect: { id: falafel.id } }
            }
        })
        const falafelInstruction2 = await prisma.instruction.create({
            data: {
                stepNumber: 2,
                description: "Transfer the mixture to a bowl and stir in the flour and baking powder until everything is well combined. If the mixture seems too wet, add a little more flour.",
                recipe: { connect: { id: falafel.id } }
            }
        })
        const falafelInstruction3 = await prisma.instruction.create({
            data: {
                stepNumber: 3,
                description: "Preheat the oven to 375°F  and lightly grease a baking sheet with olive oil.",
                recipe: { connect: { id: falafel.id } }
            }
        })
        const falafelInstruction4 = await prisma.instruction.create({
            data: {
                stepNumber: 4,
                description: "Form the chickpea mixture into golf ball-sized balls and place them on the prepared baking sheet. Drizzle with olive oil",
                recipe: { connect: { id: falafel.id } }
            }
        })
        const falafelInstruction5 = await prisma.instruction.create({
            data: {
                stepNumber: 5,
                description: "Bake for 25-30 minutes, or until the falafel is golden and crisp",
                recipe: { connect: { id: falafel.id } }
            }
        })
        const falafelInstruction6 = await prisma.instruction.create({
            data: {
                stepNumber: 6,
                description: "Meanwhile, prepare the tzatziki sauce by combining the grated cucumber, Greek yogurt, dill, lemon juice, salt, and pepper. Mix until well combined.",
                recipe: { connect: { id: falafel.id } }
            }
        })
        const falafelInstruction7 = await prisma.instruction.create({
            data: {
                stepNumber: 7,
                description: "Serve the baked falafel with the tzatziki sauce for dipping or inside pita bread.",
                recipe: { connect: { id: falafel.id } }
            }
        })
        //Aussie “Veggie” Pie
        const veggiePieInstruction1 = await prisma.instruction.create({
            data: {
                stepNumber: 1,
                description: " Preheat the oven to 375°F",
                recipe: { connect: { id: veggiePie.id } }
            }
        })
        const veggiePieInstruction2 = await prisma.instruction.create({
            data: {
                stepNumber: 2,
                description: "Heat olive oil in a large skillet over medium heat. Add the chopped onion and garlic and cook until softened",
                recipe: { connect: { id: veggiePie.id } }
            }
        })
        const veggiePieInstruction3 = await prisma.instruction.create({
            data: {
                stepNumber: 3,
                description: "Add the mixed vegetables to the skillet and cook until they start to soften.",
                recipe: { connect: { id: veggiePie.id } }
            }
        })
        const veggiePieInstruction4 = await prisma.instruction.create({
            data: {
                stepNumber: 4,
                description: "Sprinkle the flour over the vegetables and stir to combine. Cook for a minute to cook out the raw flour taste.",
                recipe: { connect: { id: veggiePie.id } }
            }
        })
        const veggiePieInstruction5 = await prisma.instruction.create({
            data: {
                stepNumber: 5,
                description: "Gradually add the vegetable broth (a few tablespoons at a time) while stirring to create a thick, creamy sauce. Add the heavy cream and simmer until the sauce thickens.",
                recipe: { connect: { id: veggiePie.id } }
            }
        })
        const veggiePieInstruction6 = await prisma.instruction.create({
            data: {
                stepNumber: 6,
                description: "Season the vegetable mixture with salt and pepper to taste.",
                recipe: { connect: { id: veggiePie.id } }
            }
        })
        const veggiePieInstruction7 = await prisma.instruction.create({
            data: {
                stepNumber: 7,
                description: "Transfer the veggie mixture to a pie dish and cover it with the puff pastry.",
                recipe: { connect: { id: veggiePie.id } }
            }
        })
        const veggiePieInstruction8 = await prisma.instruction.create({
            data: {
                stepNumber: 8,
                description: "Bake in the preheated oven for 20-25 minutes, or until the pastry is golden and puffed.",
                recipe: { connect: { id: veggiePie.id } }
            }
        })
        const veggiePieInstruction9 = await prisma.instruction.create({
            data: {
                stepNumber: 9,
                description: "Garnish with fresh parsley before serving.",
                recipe: { connect: { id: veggiePie.id } }
            }
        })
        //Vegetarian Moussaka
        const moussakaInstruction1 = await prisma.instruction.create({
            data: {
                stepNumber: 1,
                description: "Preheat the oven to 375°F",
                recipe: { connect: { id: moussaka.id } }
            }
        })
        const moussakaInstruction2 = await prisma.instruction.create({
            data: {
                stepNumber: 2,
                description: "Lay the sliced eggplant and zucchini on a baking sheet, drizzle with olive oil, and season with salt and pepper. Roast in the preheated oven for 20 minutes, or until they are tender and golden.",
                recipe: { connect: { id: moussaka.id } }
            }
        })
        const moussakaInstruction3 = await prisma.instruction.create({
            data: {
                stepNumber: 3,
                description: "In a saucepan, heat 2 tablespoons of olive oil over medium heat. Add the chopped onion and minced garlic and cook until softened.",
                recipe: { connect: { id: moussaka.id } }
            }
        })
        const moussakaInstruction4 = await prisma.instruction.create({
            data: {
                stepNumber: 4,
                description: "Stir in the lentils, tomato paste, cinnamon, and oregano. Simmer for 10 minutes, then season with salt and pepper to taste.",
                recipe: { connect: { id: moussaka.id } }
            }
        })
        const moussakaInstruction5 = await prisma.instruction.create({
            data: {
                stepNumber: 5,
                description: "In a separate saucepan, melt the butter over medium heat. Stir in the flour and cook for 2 minutes to make a roux.",
                recipe: { connect: { id: moussaka.id } }
            }
        })
        const moussakaInstruction6 = await prisma.instruction.create({
            data: {
                stepNumber: 6,
                description: "Gradually whisk in the milk (adding a few tablespoons at a time), stirring constantly until the sauce thickens. Stir in the nutmeg and season with salt and pepper.",
                recipe: { connect: { id: moussaka.id } }
            }
        })
        const moussakaInstruction7 = await prisma.instruction.create({
            data: {
                stepNumber: 7,
                description: "To assemble the moussaka, layer the roasted eggplant and zucchini in a baking dish, then top with the lentil mixture, repeating. Pour the bechamel sauce over the very top and sprinkle with grated Parmesan cheese.",
                recipe: { connect: { id: moussaka.id } }
            }
        })
        const moussakaInstruction8 = await prisma.instruction.create({
            data: {
                stepNumber: 8,
                description: "Bake for 30-35 minutes, or until the top is golden and bubbly.",
                recipe: { connect: { id: moussaka.id } }
            }
        })
        //Vegetarian Dumplings
        const dumplingsInstruction1 = await prisma.instruction.create({
            data: {
                stepNumber: 1,
                description: "Heat 1/2  a tablespoon of sesame oil to a skillet. ",
                recipe: { connect: { id: dumplings.id } }
            }
        })
        const dumplingsInstruction2 = await prisma.instruction.create({
            data: {
                stepNumber: 2,
                description: "Add the chopped cabbage, carrots, mushrooms, garlic, and ginger. Cook for 5-10 minutes, or until softened and slightly browned.",
                recipe: { connect: { id: dumplings.id } }
            }
        })
        const dumplingsInstruction3 = await prisma.instruction.create({
            data: {
                stepNumber: 3,
                description: "Remove the vegetables from the heat. In a large bowl, add the vegetables and combine them with the soy sauce, remaining sesame oil, green onions, salt, and pepper. Mix together thoroughly.",
                recipe: { connect: { id: dumplings.id } }
            }
        })
        const dumplingsInstruction4 = await prisma.instruction.create({
            data: {
                stepNumber: 4,
                description: "Place a spoonful of the vegetable mixture in the center of a dumpling wrapper. Moisten the edges of the wrapper with water and fold it in half, pressing firmly to seal.",
                recipe: { connect: { id: dumplings.id } }
            }
        })
        const dumplingsInstruction5 = await prisma.instruction.create({
            data: {
                stepNumber: 5,
                description: "Heat olive oil in a large skillet over medium heat. Add the dumplings in a single layer and cook until the bottoms are golden brown.",
                recipe: { connect: { id: dumplings.id } }
            }
        })
        const dumplingsInstruction6 = await prisma.instruction.create({
            data: {
                stepNumber: 6,
                description: "Pour 1/4 cup of water into the skillet, cover with a lid, and steam the dumplings for 5-7 minutes, or until the wrappers are translucent and the filling is cooked through.",
                recipe: { connect: { id: dumplings.id } }
            }
        })
        const dumplingsInstruction7 = await prisma.instruction.create({
            data: {
                stepNumber: 7,
                description: "In a small bowl, mix the soy sauce, rice vinegar, sesame oil, and honey to make the dipping sauce.",
                recipe: { connect: { id: dumplings.id } }
            }
        })
        const dumplingsInstruction8 = await prisma.instruction.create({
            data: {
                stepNumber: 8,
                description: "Serve the dumplings with the dipping sauce.",
                recipe: { connect: { id: dumplings.id } }
            }
        })
        //Veggie Rainbow Avocado Roll
        const rainbowRollInstruction1 = await prisma.instruction.create({
            data: {
                stepNumber: 1,
                description: "Rinse the sushi rice in a colander under cold water until the water runs clear. Cook the rice according to package instructions.",
                recipe: { connect: { id: rainbowRoll.id } }
            }
        })
        const rainbowRollInstruction2 = await prisma.instruction.create({
            data: {
                stepNumber: 2,
                description: "In a small saucepan, combine the rice vinegar, sugar, and salt. Heat over low heat, stirring until the sugar has dissolved.",
                recipe: { connect: { id: rainbowRoll.id } }
            }
        })
        const rainbowRollInstruction3 = await prisma.instruction.create({
            data: {
                stepNumber: 3,
                description: "When the sushi rice is cooked, transfer it to a large bowl and gently fold in the rice vinegar mixture. Let the rice cool to room temperature.",
                recipe: { connect: { id: rainbowRoll.id } }
            }
        })
        const rainbowRollInstruction4 = await prisma.instruction.create({
            data: {
                stepNumber: 4,
                description: "Lay a bamboo sushi mat on a clean work surface and place a nori sheet, shiny side down, on the mat.",
                recipe: { connect: { id: rainbowRoll.id } }
            }
        })
        const rainbowRollInstruction5 = await prisma.instruction.create({
            data: {
                stepNumber: 5,
                description: "Wet your hands and spread a thin layer of sushi rice evenly over the nori sheet, leaving a 1-inch border at the top.",
                recipe: { connect: { id: rainbowRoll.id } }
            }
        })
        const rainbowRollInstruction6 = await prisma.instruction.create({
            data: {
                stepNumber: 6,
                description: "Arrange the vegetables and avocado slices in a line across the center of the rice.",
                recipe: { connect: { id: rainbowRoll.id } }
            }
        })
        const rainbowRollInstruction7 = await prisma.instruction.create({
            data: {
                stepNumber: 7,
                description: "Using the bamboo mat, roll the nori sheet and rice over the filling, using gentle pressure to shape the roll.",
                recipe: { connect: { id: rainbowRoll.id } }
            }
        })
        const rainbowRollInstruction8 = await prisma.instruction.create({
            data: {
                stepNumber: 8,
                description: "Wet a sharp knife and slice the roll into 8 pieces.",
                recipe: { connect: { id: rainbowRoll.id } }
            }
        })
        const rainbowRollInstruction9 = await prisma.instruction.create({
            data: {
                stepNumber: 9,
                description: "In a bowl, mix together the sauce ingredients. Drizzle the sauce on top of the sushi rolls.",
                recipe: { connect: { id: rainbowRoll.id } }
            }
        })
        const rainbowRollInstruction10 = await prisma.instruction.create({
            data: {
                stepNumber: 10,
                description: "Serve the rolls with soy sauce, pickled ginger, and wasabi.",
                recipe: { connect: { id: rainbowRoll.id } }
            }
        })
        //Mushroom Risotto
        const risottoInstruction1 = await prisma.instruction.create({
            data: {
                stepNumber: 1,
                description: "In a pot, bring the vegetable broth to a simmer and keep it warm on low heat.",
                recipe: { connect: { id: risotto.id } }
            }
        })
        const risottoInstruction2 = await prisma.instruction.create({
            data: {
                stepNumber: 2,
                description: "In a large skillet, heat the olive oil over medium heat. Add the chopped onion and minced garlic and cook until softened.",
                recipe: { connect: { id: risotto.id } }
            }
        })
        const risottoInstruction3 = await prisma.instruction.create({
            data: {
                stepNumber: 3,
                description: "Add the sliced mushrooms to the skillet and cook until they release their liquid and become golden brown.",
                recipe: { connect: { id: risotto.id } }
            }
        })
        const risottoInstruction4 = await prisma.instruction.create({
            data: {
                stepNumber: 4,
                description: "Stir in the Arborio rice and cook for a minute, allowing the rice to toast slightly.",
                recipe: { connect: { id: risotto.id } }
            }
        })
        const risottoInstruction5 = await prisma.instruction.create({
            data: {
                stepNumber: 5,
                description: "Pour in the white wine and cook until it has been absorbed by the rice.",
                recipe: { connect: { id: risotto.id } }
            }
        })
        const risottoInstruction6 = await prisma.instruction.create({
            data: {
                stepNumber: 6,
                description: "Add a ladleful of warm vegetable broth to the skillet and stir constantly until the liquid has been absorbed by the rice. Continue adding broth in this manner, stirring constantly, until the rice is creamy and tender, but still slightly firm to the bite.",
                recipe: { connect: { id: risotto.id } }
            }
        })
        const risottoInstruction7 = await prisma.instruction.create({
            data: {
                stepNumber: 7,
                description: "Stir in the grated Parmesan cheese and butter until melted and fully incorporated.",
                recipe: { connect: { id: risotto.id } }
            }
        })
        const risottoInstruction8 = await prisma.instruction.create({
            data: {
                stepNumber: 8,
                description: "Season the mushroom risotto with salt and pepper to taste and stir in the chopped parsley before serving.",
                recipe: { connect: { id: risotto.id } }
            }
        })
        //Vegetarian Biryani
        const biryaniInstruction1 = await prisma.instruction.create({
            data: {
                stepNumber: 1,
                description: "In a large pot, heat a few tablespoons of vegetable oil over medium heat. Add the sliced onion and sauté until golden brown and crispy. ",
                recipe: { connect: { id: biryani.id } }
            }
        })
        const biryaniInstruction2 = await prisma.instruction.create({
            data: {
                stepNumber: 2,
                description: " In the same pot, add the mixed vegetables and cook until they start to soften.",
                recipe: { connect: { id: biryani.id } }
            }
        })
        const biryaniInstruction3 = await prisma.instruction.create({
            data: {
                stepNumber: 3,
                description: "Stir in the minced garlic, grated ginger, cumin, coriander, turmeric, and garam masala, cooking until fragrant.",
                recipe: { connect: { id: biryani.id } }
            }
        })
        const biryaniInstruction4 = await prisma.instruction.create({
            data: {
                stepNumber: 4,
                description: " Drain the soaked rice and add it to the pot, stirring to coat the grains with the vegetable and spice mixture.",
                recipe: { connect: { id: biryani.id } }
            }
        })
        const biryaniInstruction5 = await prisma.instruction.create({
            data: {
                stepNumber: 5,
                description: "Pour in 3 1/2 cups of water and bring to a boil. Reduce the heat, cover, and simmer for 15-20 minutes, or until the rice is tender and the liquid is absorbed.",
                recipe: { connect: { id: biryani.id } }
            }
        })
        const biryaniInstruction6 = await prisma.instruction.create({
            data: {
                stepNumber: 6,
                description: "In a small bowl, whisk the plain yogurt with the chopped cilantro and mint. Gently fold the yogurt mixture into the cooked rice.",
                recipe: { connect: { id: biryani.id } }
            }
        })
        const biryaniInstruction7 = await prisma.instruction.create({
            data: {
                stepNumber: 7,
                description: "Heat a little more vegetable oil in a small skillet and add the cinnamon stick, cloves, cardamom pods, and bay leaves. Fry the spices until fragrant, then pour them over the rice, gently mixing to distribute the flavor.",
                recipe: { connect: { id: biryani.id } }
            }
        })
        const biryaniInstruction8 = await prisma.instruction.create({
            data: {
                stepNumber: 8,
                description: "Remove the rice from the heat, and enjoy!",
                recipe: { connect: { id: biryani.id } }
            }
        })
        //Butternut Squash Mac and Cheese
        const macAndCheeseInstruction1 = await prisma.instruction.create({
            data: {
                stepNumber: 1,
                description: "Preheat the oven to 375°F and grease a baking dish.",
                recipe: { connect: { id: macAndCheese.id } }
            }
        })
        const macAndCheeseInstruction2 = await prisma.instruction.create({
            data: {
                stepNumber: 2,
                description: "Chop the butternut squash into 1/2 inch cubes.",
                recipe: { connect: { id: macAndCheese.id } }
            }
        })
        const macAndCheeseInstruction3 = await prisma.instruction.create({
            data: {
                stepNumber: 3,
                description: "Toss the squash with the olive oil, the chopped rosemary, and salt and pepper to taste.",
                recipe: { connect: { id: macAndCheese.id } }
            }
        })
        const macAndCheeseInstruction4 = await prisma.instruction.create({
            data: {
                stepNumber: 4,
                description: "Roast the squash in the oven until tender (30-40 minutes).",
                recipe: { connect: { id: macAndCheese.id } }
            }
        })
        const macAndCheeseInstruction5 = await prisma.instruction.create({
            data: {
                stepNumber: 5,
                description: "While the squash is cooking, grate all the cheese.",
                recipe: { connect: { id: macAndCheese.id } }
            }
        })
        const macAndCheeseInstruction6 = await prisma.instruction.create({
            data: {
                stepNumber: 6,
                description: "In a separate pot, melt the butter over medium heat. Slowly add the flour (start with 1 tablespoon at a time) while whisk to create a roux.",
                recipe: { connect: { id: macAndCheese.id } }
            }
        })
        const macAndCheeseInstruction7 = await prisma.instruction.create({
            data: {
                stepNumber: 7,
                description: "Then slowly (slowly is key! Less is more! Start with a 1/4 cup at a time) pour in the milk, stirring constantly until the mixture thickens.",
                recipe: { connect: { id: macAndCheese.id } }
            }
        })
        const macAndCheeseInstruction8 = await prisma.instruction.create({
            data: {
                stepNumber: 8,
                description: "Add the cheese to the pot (if the sauce is too thick afterwards, add more milk)",
                recipe: { connect: { id: macAndCheese.id } }
            }
        })
        const macAndCheeseInstruction9 = await prisma.instruction.create({
            data: {
                stepNumber: 9,
                description: "Set the sauce aside and cook the cavatappi pasta according to package instructions, then drain (do not rinse!) and set aside.",
                recipe: { connect: { id: macAndCheese.id } }
            }
        })
        const macAndCheeseInstruction10 = await prisma.instruction.create({
            data: {
                stepNumber: 10,
                description: "Add the cooked cavatappi pasta and roasted squash to the cheese sauce, stirring to coat the pasta evenly.",
                recipe: { connect: { id: macAndCheese.id } }
            }
        })
        const macAndCheeseInstruction11 = await prisma.instruction.create({
            data: {
                stepNumber: 11,
                description: "Transfer the macaroni and cheese to the prepared baking dish.",
                recipe: { connect: { id: macAndCheese.id } }
            }
        })
        const macAndCheeseInstruction12 = await prisma.instruction.create({
            data: {
                stepNumber: 12,
                description: "Bake for 20-25 minutes, or until the top is golden and bubbly. Serve hot.",
                recipe: { connect: { id: macAndCheese.id } }
            }
        })
        //<-------------------USER WITH RECIPEBOOK------------------->
        const user1 = await prisma.recipeBookItem.create({
            data: {
                user: {
                    create: {
                        name: "Kat",
                        username: "katc336",
                        email: "email@email.com",
                        password: "cookingQueen456",
                        level: 3,
                        isAdmin: true,
                        guildId: null
                    }
                },
                recipe: { connect: { id: asianChoppedSalad.id } },
            },
        })



    } catch (error) {
        console.log(error);
    }
    console.log("Database seeded!")
}

seed().then(async () => {
    await prisma.$disconnect();
}).catch(async (e) => {
    console.error(e)
    await prisma.$disconnect();
    process.exit(1)
})