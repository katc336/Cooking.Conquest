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
        const recipe1 = await prisma.recipe.create({
            data: {
                name: "Peanut Butter and Jelly Sandwich Quest",
                image: "",
                description: "Get ready to master the art of assembling the ultimate Peanut Butter and Jelly Sandwich! This easy yet legendary recipe is a must for all aspiring cooking champions.",
                ingredients: "2 slices of bread, Peanut Butter, Jelly",
                instructions: "1. Grab your selected bread and lay it flat on your battlefield (kitchen counter).  2. Arm your bread with a generous spread of peanut butter on one side, and a heroic slather of jelly on the other side.  3. Merge the two slices of bread together to form a legendary sandwich.  4. If you're feeling bold, take your cutting sword and slice the sandwich heroically in half, diagonally or not; it's your choice!  5. Consume your masterfully crafted Peanut Butter and Jelly Sandwich with triumph!",
                level: { connect: { id: level1.id } },
                exp: 50
            }
        })
        const recipe2 = await prisma.recipe.create({
            data: {
                name: "Che Thai (Vietnamese Fruit Cocktail)",
                image: "",
                description: "Embark on an exotic quest to create the ultimate Thai Fruit Salad! This delightful concoction will bring a burst of fruity joy to your taste bud.",
                ingredients: "1 mango, diced, 1 cup pineapple chunks, 1 cup strawberries, sliced, 1/2 cup of thai basil leaves torn, 1/4 cup lime juice, 2 tablespoons honey, 1/4 cup of coconut creme",
                instructions: "1. Gather your fresh mango, pineapple, and strawberries, and toss them into your treasure chest (mixing bowl). 2. Add in the torn basil leaves as an uncommon twist in your fruit salad adventure. 3. Whisk together the lime juice and honey to create a magical elixir to pour over your fruits. 4. Let your fruit salad chill in the fridge like a good adventure being prepared for battle. 5. Consume your delicious Thai Fruit Salad and revel in the unique flavors!",
                level: { connect: { id: level1.id } },
                exp: 70
            }
        })
        const recipe3 = await prisma.recipe.create({
            data: {
                name: "Mini Pizzas Pursuit",
                image: "",
                description: "Prepare for the ultimate Mini Pizza quest where you will create your very own mini pizza masterpiece! Customize your toppings and become a pizza hero.",
                ingredients: "English muffins, Pizza sauce, Shredded mozzarella cheese, Toppings of your choice (pepperoni, bell peppers, mushrooms, etc.)",
                instructions: "1. Preheat your oven to 400°F and prepare your pizza battleground (baking sheet).  2. Split your English muffins in half and lay them out on the baking sheet.  3. Spread pizza sauce all over the English muffin – like an artist creating their canvas.  4. Sprinkle the shredded mozzarella cheese over the sauce to form a cheesy fortress.  5. Add your favorite toppings to the mini pizzas and prepare them for the grand oven battle!  6. Bake your mini pizzas for 10-12 minutes until the cheese is melted and bubbly like a victorious storm of flavor.  7. Let your mini pizzas cool and then savor your hard-earned mini pizzas of power.",
                level: { connect: { id: level1.id } },
                exp: 90
            }
        })
        const recipe4 = await prisma.recipe.create({
            data: {
                name: "Dorayaki - Dora-Yum-Ki Quest",
                image: "",
                description: "Embark on the ancient quest of crafting the legendary Dorayaki, a Japanese sweet treat that promises a delightful adventure for your taste buds.",
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
                exp: 100
            }
        })
        const recipe6 = await prisma.recipe.create({
            data: {
                name: "Chicken and Vegetable Stir-Fry",
                image: "",
                description: "Get ready to conquer the culinary realm with your Chicken and Vegetable Stir-Fry prowess! Assemble your ingredients and unleash your wok-wielding skills in this sizzling stir-fry showdown.",
                ingredients: "1 pound chicken breast, cut into strips, Assorted veggies (bell peppers, broccoli, carrots, snap peas), 2 tablespoons soy sauce, 1 tablespoon hoisin sauce, 1 teaspoon cornstarch, Rice on the side",
                instructions: "1. Arm yourself with your trusty wok or skillet and heat it to medium-high, like a true kitchen warrior. 2. Toss in your chicken strips and cook them until they are cooked through and golden-brown, ensuring your protein is battle-ready. 3. Add in your assortment of veggies and let them join in the stir-fry showdown, like a captivating dance of flavors. 4. In a bowl, mix the soy sauce, hoisin sauce, and cornstarch to create a powerful stir-fry sauce, ready to add a burst of umami to your ingredients. 5. Pour the sauce over your sizzling stir-fry and give it a good toss until everything is coated in your flavorful victory elixir.  6. Serve your Chicken and Vegetable Stir-Fry atop a throne of rice or noodles and revel in your scrumptious conquest!",
                level: { connect: { id: level2.id } },
                exp: 140
            }
        })
        const recipe7 = await prisma.recipe.create({
            data: {
                name: "Spaghetti and Meatballs",
                image: "",
                description: "Embark on a legendary quest to create the ultimate Spaghetti and Meatballs feast! Prepare for a taste of victory as you roll your way to culinary glory.",
                ingredients: " Spaghetti pasta, Ground beef and ground pork, Breadcrumbs, Egg, Garlic, minced,  Tomato sauce, Parmesan cheese",
                instructions: "1. Gather your ground beef or chicken, breadcrumbs, egg, and minced garlic to shape your meatballs, like a true culinary knight.  2. Roll your meatball troops into bite-sized-balls to prepare for the meaty conquest.  3. Cook your spaghetti pasta to al dente perfection, like a true spaghetti master.  4. In a separate skillet, brown your meatballs in a mighty display of culinary prowess.  5. Pour your tomato sauce over your meatballs and let them simmer together to concoct a sauce of heavenly flavors.  6. Nestle your victorious meatballs and sauce atop your al dente spaghetti and garnish with shredded Parmesan cheese, savoring the sweet taste of triumph!",
                level: { connect: { id: level2.id } },
                exp: 130
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