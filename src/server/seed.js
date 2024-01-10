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
    await prisma.user.deleteMany();
    await prisma.recipe.deleteMany();
    await prisma.level.deleteMany();
    try {
         //<-------------------Levels------------------->
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
        //TO DO: UPDATE RECIPES (Placeholder recipes)
        //<-------------------RECIPES------------------->
        //LEVEL 1
        const recipe1 = await prisma.recipe.create({
            data: {
                name: "Veggie Burger",
                image: "",
                description: "This hearty veggie burger is packed with protein and flavor, perfect for fueling up to conquer all the days challenges",
                ingredients: "Black beans, Onion, Garlic, One chchopped bell pepper, Canned chipotles and adobo sauce, Balsamic vinegar and tamari, Panko bread crumbs, An egg  ",
                instructions: "",
                level: { connect: { id: level1.id } },
                exp: 70
            }
        })
        const recipe2 = await prisma.recipe.create({
            data: {
                name: "Tofu Stirfry",
                image: "",
                description: "This quick and colorful stir-fry is a great way to showcase a variety of vibrant vegetables and savory flavors.",
                ingredients: "1 container of firm tofu, 1 tablespoon of soy sauce, 2 tablespoons of cornstarch, 4 cloves of garlic (minced), 1/2 inch piece of ginger (minced), 2 tablespoons of sesame oil, 1 bell pepper (sliced), 1 small bunch of broccoli (chopped), Mushrooms (sliced)  ",
                instructions: "",
                level: { connect: { id: level1.id } },
                exp: 110
            }
        })
        const recipe3 = await prisma.recipe.create({
            data: {
                name: "Lentil Stew",
                image: "",
                description: "This hearty and aromatic stew is filled with warming spices and nourishing lentils, perfect for replenishing energy after a long journey.",
                ingredients: "One onion (chopped), 1 teaspong of ground corriander, 1 teaspoon of ground cumin, 1/2 teaspoon of ground tumeric, 1 inch peice of giner, peeled nd minced, 3 cloves of garlic, 1 large chopped sweet potatoe, 1/2 cup of lentils, Vegtable stock, 1 can of coconut milk, Spinach (chopped or frozen), Chopped cilantro" ,
                instructions: "",
                level: { connect: { id: level1.id } },
                exp: 70
            }
        })
        const recipe4 = await prisma.recipe.create({
            data: {
                name: "Black Bean Chili",
                image: "",
                description: "This rich and satisfying chili is filled with smoky spices and hearty black beans, perfect for refueling after a long quest.",
                ingredients: "1 tablespoon olive oil, 1 onion (diced), 1 medium carrot (chopped), 1 jalapeno (minced), 5 cloves garlic (minced), 1 tablespoon of chili powder, 1 tablespoon of cumin, 1 can of fire roasted tomatoes, 2 teaspoons diced chipotles in adobo, 1 can of blacks beans, 2 cups of vegtable broth, 1 lime (juiced), Chopped cilantro and an avocado sliced (to top)  ",
                instructions: "",
                level: { connect: { id: level1.id } },
                exp: 100
            }
        })
        const recipe5 = await prisma.recipe.create({
            data: {
                name: "Cheese Tortellini",
                image: "",
                description: "",
                ingredients: "1 package of cheese tortellini, 28 ounce can crushed fire roasted tomatoes, 2 tablespoons olive oil, 3 garlic cloves (minced), 1 teaspoon of dried Italian herb mix, 3 cups baby spinach leaves, tightly packed (or chopped spinach), 8 fresh basil leaves, 4 ounces of goat",
                instructions: "",
                level: { connect: { id: level1.id } },
                exp: 90
            }
        })
        //LEVEL 2
        const recipe6 = await prisma.recipe.create({
            data: {
                name: "Cauliflower Steak Saga",
                image: "",
                description: "Embark on a spicy and flavorful voyage with this innovative harissa-spiced cauliflower steak, introducing novice cooks to the art of vegetarian grilling.",
                ingredients: "- 1 large head of cauliflower - 3 tbsp harissa paste - 2 tbsp olive oil - 1 tbsp lemon juice - Salt and pepper, to taste - Fresh mint leaves, for garnish",
                instructions: "- Preheat the grill to medium-high heat. - Trim the leaves and stem from the cauliflower, then slice it into 1-inch thick slices. - In a bowl, mix the harissa paste, olive oil, lemon juice, salt, and pepper. - Brush the harissa mixture on both sides of the cauliflower steaks. - Grill the cauliflower steaks for 5-7 minutes on each side, or until charred and tender. - Garnish with fresh mint leaves and serve this spicy harissa cauliflower steak as a bold addition to your vegetarian cooking repertoire.",
                level: { connect: { id: level2.id } },
                exp: 200
            }
        })
        const recipe7 = await prisma.recipe.create({
            data: {
                name: "Sorcerer's Shakshuka",
                image: "",
                description: "Embark on a flavorfull quest filled with bold spices with this aromatic shakshuka. For intermediate chefs reading to poach the perfect egg.",
                ingredients: "-Olive oil (about 1 tablespoon) - 1 onion (diced) -1 bell pepper(diced), -3 cloves of garlic (or to taste) -1 teaspoon of cumin - 2 teaspoons of paprika, 1 tablespoon of harissa -28oz of peeled tomatoes (fresh or canned) -6 large eggs -fresh cilantro (chopped), -Crumbled feta (optional) -Salt and pepper to taste ",
                instructions: "- In a large, oven-safe skillet, heat the olive oil over medium heat and sauté the chopped onion and diced bell pepper until softened. - Add the minced garlic, ground cumin, paprika, and harissa, and cook for a minute until fragrant. - Pour in the diced tomatoes and simmer the mixture for 10-15 minutes, until it thickens slightly. - Create small wells in the tomato mixture and crack the eggs into them, then season the eggs with salt and pepper.- Cover the skillet and cook for 5-7 minutes, or until the egg whites are set but the yolks are still runny. - Garnish with fresh parsley or cilantro and crumbled feta.",
                level: { connect: { id: level2.id } },
                exp: 250
            }
        })
        
        // const recipe8 = await prisma.recipe.create({
        //     data: {
        //         name: "",
        //         image: "",
        //         description: "",
        //         ingredients: "",
        //         instructions: "",
        //         level: { connect: { id: level2.id } },
        //         exp: 130
        //     }
        // })
        // const recipe9 = await prisma.recipe.create({
        //     data: {
        //         name: "Sorcerer's Shakshuka",
        //         image: "",
        //         description: "",
        //         ingredients: "",
        //         instructions: "",
        //         level: { connect: { id: level2.id } },
        //         exp: 130
        //     }
        // })
        // const recipe10 = await prisma.recipe.create({
        //     data: {
        //         name: "",
        //         image: "",
        //         description: "",
        //         ingredients: "",
        //         instructions: "",
        //         level: { connect: { id: level2.id } },
        //         exp: 130
        //     }
        // })
        //LEVEL 3
        const recipe11 = await prisma.recipe.create({
            data: {
                name: "Mushroom Risotto",
                image: "",
                description: "Delve into the enchanting world of vegetarian risotto with this more complex and flavorful dish that will awaken culinary creativity.",
                ingredients: "  - 6 cups vegetable broth - 2 tbsp olive oil- 1 onion, finely chopped - 2 cups arborio rice - 1/2 cup dry white wine - 1 lb assorted mushrooms, sliced  - 1/2 cup grated Parmesan cheese (optional for vegan option)   - Salt and pepper, to taste  - Fresh parsley, for garnish",
                instructions: "- In a large pot, heat the vegetable broth until warm and keep it on low heat.  - In a separate pot, sauté the chopped onion in olive oil until translucent.  - Add the arborio rice to the pot and cook for 1-2 minutes, stirring constantly.  - Pour in the white wine and cook until it is absorbed.  - Gradually add the warm vegetable broth, one ladle at a time, stirring constantly, until the rice is cooked and the risotto is creamy.  - In a separate pan, sauté the sliced mushrooms until golden brown.  - Stir the sautéed mushrooms into the risotto and add grated Parmesan cheese if desired. - Season with salt and pepper, garnish with fresh parsley, and savor this delightful mushroom magic risotto.",
                level: { connect: { id: level3.id } },
                exp: 330
            }
        })
        const recipe12 = await prisma.recipe.create({
            data: {
                name: "Eggplant Parmesan",
                image: "",
                description: "Enchanct others with your culinary prowess with this healthier baked eggplant parmesan, perfect for cooks seeking a new challenge!",
                ingredients: "- 2 eggplants, sliced into rounds - 2 cups seasoned breadcrumbs  - 2 eggs, beaten (or flaxseed eggs for vegan option)  - 2 cups marinara sauce - 1 cup shredded mozzarella cheese (use vegan cheese for vegan option) - 1/2 cup grated Parmesan cheese (use vegan Parmesan for vegan option)  - Fresh basil leaves, for garnish",
                instructions: "- Preheat the oven to 375°F (190°C). - Dip the sliced eggplant rounds into the beaten eggs, then coat them in seasoned breadcrumbs. - Place the breaded eggplant rounds on a baking sheet and bake for 15-20 minutes, or until golden brown and tender. - In a baking dish, spoon a layer of marinara sauce, then arrange a layer of baked eggplant rounds on top. - Sprinkle with mozzarella cheese and grated Parmesan cheese, then repeat the layers.- Bake the assembled eggplant parmesan for 25-30 minutes, until bubbly and golden brown. - Let it rest for a few minutes, garnish with fresh basil leaves, and savor this exquisite eggplant parmesan.",
                level: { connect: { id: level3.id } },
                exp: 330
            }
        })
        // const recipe13 = await prisma.recipe.create({
        //     data: {
        //         name: "",
        //         image: "",
        //         description: "",
        //         ingredients: "",
        //         instructions: "",
        //         level: { connect: { id: level3.id } },
        //         exp: 130
        //     }
        // })
        // const recipe14 = await prisma.recipe.create({
        //     data: {
        //         name: "",
        //         image: "",
        //         description: "",
        //         ingredients: "",
        //         instructions: "",
        //         level: { connect: { id: level3.id } },
        //         exp: 130
        //     }
        // })
        // const recipe15 = await prisma.recipe.create({
        //     data: {
        //         name: "Sorcerer's Shakshuka",
        //         image: "",
        //         description: "",
        //         ingredients: "",
        //         instructions: "",
        //         level: { connect: { id: level3.id } },
        //         exp: 130
        //     }
        // })

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