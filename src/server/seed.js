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
                name: "Quest for the Quinoa Salad",
                image: "",
                description: "Embark on a new culinary adventure with this simple and nourishing quinoa salad, perfect for beginners on their quest for vegetarian cooking",
                ingredients: "- 1 cup quinoa  - 2 cups vegetable broth - 1 cucumber, diced - 1 bell pepper, diced - 1/4 cup of  pitted Kalamata olives - 1/4 cup chopped fresh parsley - 2 tbsp olive oil - 2 tbsp lemon juice -4 ounces of goat cheese",
                instructions: "- Rinse the quinoa, then cook it in vegetable broth according to package instructions. - Fluff the cooked quinoa with a fork, and let it cool. - In a large bowl, mix the cooked quinoa with the diced cucumber, bell pepper, olives, crumbled goat cheese, and fresh parsley. - Drizzle with olive oil and lemon juice, season with salt and pepper, and gently toss to combine. - Serve this refreshing quinoa salad as a delightful addition to your culinary repertoire.",
                level: { connect: { id: level1.id } },
                exp: 70
            }
        })
        const recipe2 = await prisma.recipe.create({
            data: {
                name: "Persuit of the Stuffed Peppers",
                image: "",
                description: "Embark on the quest to perfect these fragrant and aromatic stuffed bell peppers, testing the skills of a beginner vegetarian cook.",
                ingredients: " 4 large bell peppers - 1 cup cooked couscous or quinoa - 1 can chickpeas, drained and rinsed - 1/2 cup diced dried apricots - 1/4 cup chopped fresh mint - 1/4 cup chopped fresh cilantro - 1 tsp ground cumin - 1 tsp ground coriander - 1/2 tsp cinnamon - Salt and pepper, to taste - Whole milk yogurt sauce for serving (optional)",
                instructions: " - Preheat the oven to 375°F (190°C).  - Cut the tops off the bell peppers and remove the seeds and membranes. - In a bowl, mix the cooked couscous, chickpeas, diced dried apricots, chopped fresh mint, chopped fresh cilantro, ground cumin, ground coriander, cinnamon, salt, and pepper. - Stuff the bell peppers with the couscous mixture and place them in a baking dish. - Bake the stuffed bell peppers for 25-30 minutes, or until the peppers are tender and the filling is heated through. - Serve with a drizzle of mint yogurt sauce for a taste of Morocco's culinary marvels.",
                level: { connect: { id: level1.id } },
                exp: 110
            }
        })
        const recipe3 = await prisma.recipe.create({
            data: {
                name: "Tortellini Treasures",
                image: "",
                description: "A comforting tortellini dish that saves one of the most valuable treasures of all; time! Perfect fot beginner vegetarian cooks.",
                ingredients: "- 1 package of tortellini - 2 tbsp olive oil  - 3 cloves garlic, mince - 1 cup cherry tomatoes, halved - 1/4 cup chopped fresh basil - 1/4 cup grated Parmesan cheese (use vegan Parmesan for vegan option) - Salt and pepper, to taste",
                instructions: " - Cook the fresh tortellini according to the package instructions, then drain and set aside. - In a large skillet, sauté the minced garlic in olive oil until fragrant. - Add the halved cherry tomatoes to the skillet and cook for a few minutes, until they start to soften.  - Stir in the cooked tortellini and chopped fresh basil, and toss to coat. - Season with salt and pepper, sprinkle with grated Parmesan cheese",
                level: { connect: { id: level1.id } },
                exp: 70
            }
        })
        const recipe4 = await prisma.recipe.create({
            data: {
                name: "Dorayaki - Dora-Yum-Ki Quest",
                image: "",
                description: "Embark on the ancient quest of crafting the legendary Dorayaki, a sweet treat that promises a delightful adventure for your taste buds.",
                ingredients: "2 eggs, 1/2 cup sugar, 1 teaspoon honey, 1 cup all-purpose flour, 1 teaspoon baking powder, Red bean paste or Nutella",
                instructions: "1. Whisk the eggs, sugar, and honey together until they fuse into a formidable concoction.  2. Combine the flour and the baking powder into your egg mixture, stirring them into a batter of unmatched brewing potential.  3. Equip your pan and deploy small quantities of your batter onto the battlefield to forge your pancakes.  4. Once your pancakes are done, unleash your Red Bean Paste or Nutella as the perfect shield for your pancakes, creating your Dorayaki masterpieces.  5. Relish in your Dorayaki conquest and enjoy the spoils of your victory! ",
                level: { connect: { id: level1.id } },
                exp: 100
            }
        })
        const recipe5 = await prisma.recipe.create({
            data: {
                name: "Valliant Veggie Quesadilla Quest",
                image: "",
                description: "Gather your ingredients and embrace the challenge as you prepare to conquer and create the ultimate Veggie Quesadillas. Customize your toppings and be the master of your quesadilla quest.",
                ingredients: "Flour tortillas, Shredded cheddar cheese, Sliced bell peppers, Sliced tomatoes, Sliced mushrooms, Sliced onions, Olive oil",
                instructions: "1. Warm up your pan like you're about to enter an epic culinary battle.  2. Spread your flour tortillas on your quest board (baking sheets) and start building your cheesy empire.  3. Sprinkle the shredded cheddar cheese on half of your tortilla canvas, preparing for a cheesy conquest.  4. Fortify your cheesy stronghold with sliced bell peppers, tomatoes, mushrooms, and onions – a sign of a true hero.  5. Cloak your masterpiece with another tortilla and press it down firmly, getting ready for the grand battle of flavors!  6. Cook your quesadilla for 2-3 minutes on each side until your cheese is melted and the quest is won.  7. Let your Veggie Quesadilla cool off and enjoy your savory victory!",
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
                name: "Mystical Mushroom Risotto",
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
                name: "Enchanting Eggplant Parmesan",
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