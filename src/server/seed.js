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
                description: "The Leafsong Epicurean Fellowship is the oldest guild known for its expertise in technical cooking skills. They are known for their traditional approach to cooking, with a focus on classic culinary techniques and refined flavors. Chefs in this guild are meticulous and disciplined, mastering the art of precise measurements and execution.",
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
        const misirWot  = await prisma.recipe.create({
            data: {
                name: "Misir Wot (Ethiopian Spicy Lentil Stew)",
                image: "",
                description: "A rich and spicy Ethiopian lentil stew made with red lentils, onions, and garlic, seasoned with berbere spice blend and served with injera bread.",
                level: { connect: { id: level2.id } },
            }
        })
        const stuffedShells  = await prisma.recipe.create({
            data: {
                name: "Spinach and Ricotta Stuffed Pasta Shells",
                image: "",
                description: "Jumbo pasta shells stuffed with a creamy mixture of spinach and ricotta cheese, baked in marinara sauce and topped with melted mozzarella.",
                level: { connect: { id: level2.id } },
            }
        })
        const padThai  = await prisma.recipe.create({
            data: {
                name: "Vegetable Pad Thai",
                image: "",
                description: "Thai noodle dish made with stir-fried rice noodles, tofu, and an assortment of vegetables, tossed in a tangy and sweet sauce.",
                level: { connect: { id: level2.id } },
            }
        })
        const frittata  = await prisma.recipe.create({
            data: {
                name: "Asparagus and Swiss Frittata",
                image: "",
                description: "A light and fluffy egg dish filled with tender asparagus, nutty Swiss cheese, and fresh herbs, perfect for brunch or a light dinner.",
                level: { connect: { id: level2.id } },
            }
        })
        const pizza  = await prisma.recipe.create({
            data: {
                name: "Homemade Vegetarian Pizza",
                image: "",
                description: "A homemade pizza crust topped with fresh mozzerella chese and fresh basil.",
                level: { connect: { id: level2.id } },
            }
        })
        const spanakopita  = await prisma.recipe.create({
            data: {
                name: "Spinach and Feta Spanakopita",
                image: "",
                description: "A Greek savory pastry filled with a mixture of spinach, feta cheese, and herbs, wrapped in crispy, flaky phyllo dough.",
                level: { connect: { id: level2.id } },
            }
        })
        const 割包  = await prisma.recipe.create({
            data: {
                name: "Taiwanese Veggie Burger  (割包)",
                image: "",
                description: "A vegetarian spin on a traditional Taiwanese street food delight, featuring a colorful blend of pickled vegetables with marinated tofu; all wrapped in a fluffy bun.",
                level: { connect: { id: level2.id } },
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
        //Misir Wot (Ethiopian Spicy Lentil Stew)
        //Spinach and Ricotta Stuffed Pasta Shells
        //Vegetable Pad Thai
        //Asparagus and Swiss Frittata
        //Homemade Veggie Pizza
        //Spinach and Feta Spanakopita
        //Taiwanese Veggie Burger (割包)
        //African Peanut Stew
        //Eggplant Parmesan
        //Tofu Katsu
        //Baked Falafel with Tzatziki Sauce
        //Aussie “Veggie” Pie
        //Vegetarian Moussaka
        //Vegetarian Dumplings
        //Sweet Potato Avocado Roll
        //Mushroom Risotto
        //Vegetarian Biryani
        // Butternut Squash Mac and Cheese
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
        const paneerTikkaMasalaInstruction1= await prisma.instruction.create({
            data: {
                stepNumber: 1,
                description: "In a saucepan, sauté diced onion, minced garlic, and grated ginger until softened in a tablespoon of butter.",
                recipe: { connect: { id: paneerTikkaMasala.id } }
            }
        })
        const paneerTikkaMasalaInstruction2= await prisma.instruction.create({
            data: {
                stepNumber: 2,
                description: "Add diced tomatoes, garam masala, ground turmeric, ground cumin, and ground coriander. Cook until the tomatoes break down (about 30 minutes). Make sure to check liquid levels and add water when needed.",
                recipe: { connect: { id: paneerTikkaMasala.id } }
            }
        })
        const paneerTikkaMasalaInstruction3= await prisma.instruction.create({
            data: {
                stepNumber: 3,
                description: "Using an immersion blender (or remove the mixture and add to a normal blender), blend the mixture together.",
                recipe: { connect: { id: paneerTikkaMasala.id } }
            }
        })
        const paneerTikkaMasalaInstruction4= await prisma.instruction.create({
            data: {
                stepNumber: 4,
                description: " Set the sauce to the side. In the same saucepan add a tablespoon of butter. Add the cubed paneer and brown all the sides (cooking for 1 minute on each side). ",
                recipe: { connect: { id: paneerTikkaMasala.id } }
            }
        })
        const paneerTikkaMasalaInstruction5= await prisma.instruction.create({
            data: {
                stepNumber: 5,
                description: "Add the sauce and heavy cream back in the saucepan, and simmer for a few minutes until heated through.",
                recipe: { connect: { id: paneerTikkaMasala.id } }
            }
        })
        const paneerTikkaMasalaInstruction6= await prisma.instruction.create({
            data: {
                stepNumber: 6,
                description: "Garnish with fresh cilantro before serving.",
                recipe: { connect: { id: paneerTikkaMasala.id } }
            }
        })
        //Italian Quinoa Stuffed Bell Peppers
        const stuffedPeppersInstruction1= await prisma.instruction.create({
            data: {
                stepNumber: 1,
                description: "Preheat the oven to 375°F",
                recipe: { connect: { id: stuffedPeppers.id } }
            }
        })
        const stuffedPeppersInstruction2= await prisma.instruction.create({
            data: {
                stepNumber: 2,
                description: "Cook the quinoa according to package instructions.",
                recipe: { connect: { id: stuffedPeppers.id } }
            }
        })
        const stuffedPeppersInstruction3= await prisma.instruction.create({
            data: {
                stepNumber: 3,
                description: "In a skillet, sauté onions, herbs de provence, garlic, and zucchini until soft.",
                recipe: { connect: { id: stuffedPeppers.id } }
            }
        })
        const stuffedPeppersInstruction4= await prisma.instruction.create({
            data: {
                stepNumber: 4,
                description: "Add in the marinara sauce and heat through.",
                recipe: { connect: { id: stuffedPeppers.id } }
            }
        })
        const stuffedPeppersInstruction5= await prisma.instruction.create({
            data: {
                stepNumber: 5,
                description: "Add in the quinoa and mix together and set to the side",
                recipe: { connect: { id: stuffedPeppers.id } }
            }
        })
        const stuffedPeppersInstruction6= await prisma.instruction.create({
            data: {
                stepNumber: 6,
                description: "Take the bell peppers and cut them in half; removing the stems and seeds",
                recipe: { connect: { id: stuffedPeppers.id } }
            }
        })
        const stuffedPeppersInstruction7= await prisma.instruction.create({
            data: {
                stepNumber: 7,
                description: "Spoon the quinoa and vegetable mixture into halved and seeded bell peppers",
                recipe: { connect: { id: stuffedPeppers.id } }
            }
        })
        const stuffedPeppersInstruction8= await prisma.instruction.create({
            data: {
                stepNumber: 8,
                description: "Sprinkle with the cheeses and bake in the preheated for 25-30 minutes, or until the peppers are tender.",
                recipe: { connect: { id: stuffedPeppers.id } }
            }
        })
        //Ratatouille
        const ratatouilleIstruction1= await prisma.instruction.create({
            data: {
                stepNumber: 1,
                description: "In a large skillet, sauté diced eggplant, zucchini, red bell pepper, and onion until softened.",
                recipe: { connect: { id: ratatouille.id } }
            }
        })
        const ratatouilleIstruction2= await prisma.instruction.create({
            data: {
                stepNumber: 2,
                description: "Add minced garlic, diced tomatoes, tomato paste, dried thyme, and dried oregano. ",
                recipe: { connect: { id: ratatouille.id } }
            }
        })
        const ratatouilleIstruction3= await prisma.instruction.create({
            data: {
                stepNumber: 3,
                description: "Add in the vegetable broth and cook until the vegetables are tender.",
                recipe: { connect: { id: ratatouille.id } }
            }
        })
        const ratatouilleIstruction4= await prisma.instruction.create({
            data: {
                stepNumber: 4,
                description: "Garnish with fresh basil before serving.",
                recipe: { connect: { id: ratatouille.id } }
            }
        })
        //Black Bean Chili
        const blackBeanChiliIstruction1= await prisma.instruction.create({
            data: {
                stepNumber: 1,
                description: "In a large pot, sauté the diced onions, bell pepper, and minced garlic until softened.",
                recipe: { connect: { id: blackBeanChili.id } }
            }
        })
        const blackBeanChiliIstruction2= await prisma.instruction.create({
            data: {
                stepNumber: 2,
                description: "Add the chili powder, cumin, and smoked paprika. Cook for another 2 minutes.",
                recipe: { connect: { id: blackBeanChili.id } }
            }
        })
        const blackBeanChiliIstruction3= await prisma.instruction.create({
            data: {
                stepNumber: 3,
                description: "Add the black beans, diced tomatoes, vegetable broth, and adobo sauce.",
                recipe: { connect: { id: blackBeanChili.id } }
            }
        })
        const blackBeanChiliIstruction4= await prisma.instruction.create({
            data: {
                stepNumber: 4,
                description: "Simmer for 20-30 minutes to allow the flavors to meld.",
                recipe: { connect: { id: blackBeanChili.id } }
            }
        })
        const blackBeanChiliIstruction5= await prisma.instruction.create({
            data: {
                stepNumber: 5,
                description: "Ladle into bowls and serve with toppings.",
                recipe: { connect: { id: blackBeanChili.id } }
            }
        })
        //Garden Pasta
        const gardenPastaIstruction1= await prisma.instruction.create({
            data: {
                stepNumber: 1,
                description: "Cook the pasta according to package instructions.",
                recipe: { connect: { id: gardenPasta.id } }
            }
        })
        const gardenPastaIstruction2= await prisma.instruction.create({
            data: {
                stepNumber: 2,
                description: " As the pasta cooks, In a large skillet, heat the olive oil and sauté the diced zucchini, yellow squash, bell pepper, cherry tomatoes, and minced garlic until tender. (about 10 minutes).",
                recipe: { connect: { id: gardenPasta.id } }
            }
        })
        const gardenPastaIstruction3= await prisma.instruction.create({
            data: {
                stepNumber: 3,
                description: "Drain the pasta (do not rinse it!) and toss the cooked pasta with the sautéed vegetables, grated parmesan cheese, and salt and pepper to taste.",
                recipe: { connect: { id: gardenPasta.id } }
            }
        })
        const gardenPastaIstruction4= await prisma.instruction.create({
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
        //Misir Wot (Ethiopian Spicy Lentil Stew)
        //Spinach and Ricotta Stuffed Pasta Shells
        //Vegetable Pad Thai
        //Asparagus and Swiss Frittata
        //Homemade Veggie Pizza
        //Spinach and Feta Spanakopita
        //Taiwanese Veggie Burger (割包)
        //African Peanut Stew
        //Eggplant Parmesan
        //Tofu Katsu
        //Baked Falafel with Tzatziki Sauce
        //Aussie “Veggie” Pie
        //Vegetarian Moussaka
        //Vegetarian Dumplings
        //Sweet Potato Avocado Roll
        //Mushroom Risotto
        //Vegetarian Biryani
        // Butternut Squash Mac and Cheese
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