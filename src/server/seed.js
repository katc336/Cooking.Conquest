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
        const recipe1 = await prisma.recipe.create({
            data: {
                name: "Roasted Root Vegetables",
                image: "",
                description: "This hearty side dish packed full of nutrition and easy to make during a busy day. Pop it in the oven, and walk away!",
                level: { connect: { id: level1.id } },
            }
        })
        const recipe2 = await prisma.recipe.create({
            data: {
                name: "Tofu Stir-fry",
                image: "",
                description: "This quick and colorful stir-fry is a great way to showcase a variety of vibrant vegetables and savory flavors.",
                level: { connect: { id: level1.id } },
            }
        })
        const recipe3 = await prisma.recipe.create({
            data: {
                name: "Lentil Stew",
                image: "",
                description: "This hearty and aromatic stew is filled with warming spices and nourishing lentils, perfect for replenishing energy after a long journey.",
                level: { connect: { id: level1.id } },
            }
        })
        const recipe4 = await prisma.recipe.create({
            data: {
                name: "Black Bean Chili",
                image: "",
                description: "This rich and satisfying chili is filled with smoky spices and hearty black beans, perfect for refueling after a long quest.",
                level: { connect: { id: level1.id } },
            }
        })
        const recipe5 = await prisma.recipe.create({
            data: {
                name: "Cheese Tortellini",
                image: "",
                description: "",
                level: { connect: { id: level1.id } },
            }
        })
        //<-------------------INGREDIENTS------------------->
        const ingredient1 = await prisma.ingredient.create({
            data: {
                quantity: "1 lb",
                name: "Mixed root vegetables (carrots, parsnips, beets, etc.)",
                recipe: { connect: { id: recipe1.id } }
            }
        })
        const ingredient2 = await prisma.ingredient.create({
            data: {
                quantity: "1 block",
                name: "Extra-firm tofu",
                recipe: { connect: { id: recipe2.id } }
            }
        })
        const ingredient3 = await prisma.ingredient.create({
            data: {
                quantity: "2 cups",
                name: "Lentils",
                recipe: { connect: { id: recipe3.id } }
            }
        })
        const ingredient4 = await prisma.ingredient.create({
            data: {
                quantity: "1 can",
                name: "Black beans",
                recipe: { connect: { id: recipe4.id } }
            }
        })


        //<-------------------INSTRUCTIONS------------------->
        const instruction1 = await prisma.instruction.create({
            data: {
                stepNumber: 1,
                description: "Preheat oven to 425°F. Cut root vegetables into cubes or slices, and place on a baking sheet. Drizzle with olive oil, season with salt and pepper, and toss to coat. Roast in the oven for 25-30 minutes, or until tender and slightly caramelized.",
                recipe: { connect: { id: recipe1.id } }
            }
        })
        const instruction2 = await prisma.instruction.create({
            data: {
                stepNumber: 1,
                description: "Drain and press tofu to remove excess water. Cut into cubes or slices. Heat a nonstick skillet over medium-high heat with a small amount of oil. Add tofu and cook until browned on all sides, about 5-7 minutes. Add any desired vegetables (such as bell peppers, broccoli, or snow peas), and cook until tender-crisp. Add stir-fry sauce and simmer for 1-2 minutes, stirring constantly.",
                recipe: { connect: { id: recipe2.id } }
            }
        })
        const instruction3 = await prisma.instruction.create({
            data: {
                stepNumber: 1,
                description: "In a large pot or Dutch oven, heat olive oil over medium heat. Add diced onion, carrots, and celery, and sauté until softened. Add minced garlic and cook for 1 minute. Add lentils, diced tomatoes, vegetable broth, and seasonings. Bring to a boil, then reduce heat and simmer for 20-25 minutes, or until lentils are tender.",
                recipe: { connect: { id: recipe3.id } }
            }
        })
        const instruction4 = await prisma.instruction.create({
            data: {
                stepNumber: 1,
                description: "In a large pot or Dutch oven, heat olive oil over medium heat. Add diced onion, bell pepper, and jalapeno, and sauté until softened. Add garlic and cook for 1 minute. Add diced tomatoes, vegetable broth, black beans, and seasonings. Bring to a boil, then reduce heat and simmer for 15-20 minutes, stirring occasionally.",
                recipe: { connect: { id: recipe4.id } }
            }
        })


        //TO DO: ADD MORE RECIPES

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
                recipe: { connect: { id: recipe4.id } },
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