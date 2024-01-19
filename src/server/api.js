const express = require('express');
const apiRouter = express.Router();

const { requireAdmin, requireUser } = require("./utils")

const { PrismaClient } = require("@prisma/client");
const { recipeBookItem, recipeBook, level, userPostedRecipe } = require('./client');
const prisma = new PrismaClient();

//<-----------------GET ALL RECIPES----------------->
// GET /api/recipes
apiRouter.get("/recipes", async (req, res, next) => {
    try {
        const recipes = await prisma.recipe.findMany();
        res.send(recipes);
    } catch (error) {
        next(error);
    }
})
//<-----------------GET SINGLE RECIPE----------------->
//GET /api/recipe/:id
apiRouter.get("/recipe/:id", async (req, res, next) => {
    try {
        const recipe = await prisma.recipe.findUnique({
            where: {
                id: Number(req.params.id)
            },
            include: {
                ingredients: true,
                instructions: true
            }
        });
        res.send(recipe);
    } catch (error) {
        next(error);
    }
})

//<-----------------GET ALL LEVELS----------------->
//GET /api/levels
apiRouter.get("/levels", async (req, res, next) => {
    try {
        const levels = await prisma.level.findMany();
        res.send(levels);
    } catch (error) {
        next(error);
    }
})
//<-----------------GET ALL GUILDS----------------->
//GET /api/levels
apiRouter.get("/guilds", async (req, res, next) => {
    try {
        const guilds = await prisma.guild.findMany();
        res.send(guilds);
    } catch (error) {
        next(error);
    }
})
//<-----------------GET SINGLE LEVELS----------------->
//GET /api/level/:id
//split
apiRouter.get("/level/:id", async (req, res, next) => {
    try {
        const level = await prisma.level.findUnique({
            where: {
                id: Number(req.params.id)
            },
            include: {
                userIngredients: true,
                userInstructions: true
            }
        });
        res.send(level);
    } catch (error) {
        next(error);
    }
})
//<-----------------GET RECIPES BY LEVEL----------------->
//GET /api/recipes/level/:id
apiRouter.get("/recipes/:levelId", async (req, res, next) => {
    try {

        const recipes = await prisma.recipe.findMany({
            where: {
                levelId: Number(req.params.levelId)
            },
            include: { level: true }
        });
        res.send(recipes);
    } catch (error) {
        next(error);
    }
});
//<-----------------GET LEVEL 1 RECIPES----------------->
//GET /api/recipes/level-one
apiRouter.get("/recipes-level-one", async (req, res, next) => {
    try {
        // Find level one 
        const levelOne = await prisma.level.findFirst({
            where: { level: "one" }
        });
        // Find recipes from level one
        const levelOneRecipes = await prisma.recipe.findMany({
            where: {
                levelId: levelOne.id
            }
        });
        res.send(levelOneRecipes);
    } catch (error) {
        next(error)
    }
});
//<-----------------GET LEVEL 2 RECIPES----------------->
//GET /api/recipes/level-two
apiRouter.get("/recipes-level-two", async (req, res, next) => {
    try {
        // Find level two
        const levelTwo = await prisma.level.findFirst({
            where: {
                level: "two"
            }
        });
        // Find recipes from level two
        const levelTwoRecipes = await prisma.recipe.findMany({
            where: {
                levelId: levelTwo.id
            }
        });
        res.send(levelTwoRecipes);
    } catch (error) {
        next(error)
    }
});
//<-----------------GET LEVEL 3 RECIPES----------------->
//GET /api/recipes/level-three
apiRouter.get("/recipes-level-three", async (req, res, next) => {
    try {
        // Find level three
        const levelThree = await prisma.level.findFirst({
            where: {
                level: "three"
            }
        });
        // Find recipes from level three
        const levelThreeRecipes = await prisma.recipe.findMany({
            where: {
                levelId: levelThree.id
            }
        });
        res.send(levelThreeRecipes);

    } catch (error) {
        next(error)
    }
});
//<-----------------ADD RECIPE TO USER ACCOUNT----------------->
apiRouter.post("/myRecipeBook", requireUser, async (req, res, next) => {
    const recipeId = req.body.recipeId
    try {
        //Count the total number of incomplete recipeBookitems...
        const userRecipeCountIncomplete = await prisma.recipeBookItem.count({
            where: { userId: req.user.id, completed: false },
        });
        //If there are 4 incomplete recipes added, don't allow another recipe to be added
        if (userRecipeCountIncomplete >= 4) {
            return res.status(400).send("You have the maximum incomplete recipes of 4 that you can have at one time")
        };
        //Check to see if the recipe already exists in the user's recipe book...
        const existingRecipe = await prisma.recipeBookItem.findFirst({
            where: { userId: req.user.id, recipeId: recipeId },
        });
        //If it already exists, dont allow it to be added twice...
        if (existingRecipe) {
            return res.status(400).send("You cannot add the same recipes to your recipe book twice");
        }
        //Add recipe if previous conditions don't exist
        const newRecipe = await prisma.recipeBookItem.create({
            data: {
                user: { connect: { id: req.user.id } },
                recipe: { connect: { id: recipeId } }
            }
        });
        res.send({ newRecipe, message: 'Recipe added!' });

    } catch (error) {
        next(error)
    }
});
//<-----------------GET RECIPEBOOKITEM BY USER----------------->
apiRouter.get("/myRecipeBook", requireUser, async (req, res, next) => {
    try {
        const recipes = await prisma.recipeBookItem.findMany({
            where: { userId: req.user.id },
            include: {
                recipe: {
                    include: {
                        level: true
                    }
                }
            }
        });
        res.send(recipes)
    } catch (error) {
        next(error);
    }
});
//<-----------------PATCH RECIPEBOOKITEM TO COMPLETED----------------->
apiRouter.patch("/myRecipeBook_complete/:id", requireUser, async (req, res, next) => {
    try {
        //Update recipe to completed
        const recipeCompleted = await prisma.recipeBookItem.update({
            where: { id: Number(req.params.id) },
            data: { completed: true }
        });
        // Find user with recipe
        const user = await prisma.user.findUnique({
            where: { id: recipeCompleted.userId }
        });
        // Update the user's totalExp by 1 when completed
        const updatedUser = await prisma.user.update({
            where: { id: user.id },
            data: {
                totalExp: { increment: 1 }
            }
        });
        // Check if the updated user has reached level 2
        if (updatedUser.totalExp >= 4) {
            // Update the user's level to 2
            await prisma.user.update({
                where: { id: user.id },
                data: { level: 2 }
            });
        }
        // Check if the updated user has reached level 3
        if (updatedUser.totalExp >= 8) {
            // Update the user's level to 3
            await prisma.user.update({
                where: { id: user.id },
                data: { level: 3 }
            });
        }
        // Check if the updated user has reached level 4
        if (updatedUser.totalExp >= 12) {
            // Update the user's level to 4
            await prisma.user.update({
                where: { id: user.id },
                data: { level: 4 }
            });
        }
        res.send({ message: "Quest complete!" });
    } catch (error) {
        next(error);
    }
})
//<-----------------DELETE USER'S RECIPESBOOK ITEM----------------->
apiRouter.delete("/myRecipeBook_delete/:id", requireUser, async (req, res, next) => {
    try {
        const deletedRecipe = await prisma.recipeBookItem.delete({
            where: { id: +req.params.id },
        });
        if (deletedRecipe.userId !== req.user.id || !deletedRecipe) {
            return res.status(404).send("Recipe not found.");
        }
        res.send(deletedRecipe);
    } catch (error) {
        next(error);
    }
})
//<-----------------GET ALL RATINGS FOR A RECIPE----------------->
apiRouter.get("/recipeRatings/:userPostedRecipeId", async (req, res, next) => {
    try {
        const ratings = await prisma.rating.findMany({
            where: { userPostedRecipeId: Number(req.params.userPostedRecipeId) },
            include: { userPostedRecipe: true }
        });
        res.send(ratings);
    } catch (error) {
        next(error);
    }
});
//<---------------------------------AFTER LEVEL 3-------------------------------------->

//<-----------------ADD GUILD TO USER ACCOUNT----------------->
apiRouter.patch("/myGuild/:id", requireUser, async (req, res, next) => {
    try {
        const { guildId } = req.body;  // Extract 'guildId' from req.body
        const updatedGuild = await prisma.user.update({
            where: { id: Number(req.user.id) },
            data: {
                guild: guildId ? { connect: { id: guildId } } : undefined,
            },
            include: { guild: true },
        });
        delete updatedGuild.password;
        res.send({ updatedGuild, message: "Welcome to the guild!" });
    } catch (error) {
        next(error);
    }
});

//<-----------------GET GUILD BY USER----------------->
apiRouter.get("/myGuild", requireUser, async (req, res, next) => {
    try {
        const guildUser = await prisma.user.findFirst({
            where: { id: req.user.id },
            include: { guild: true }
        });
        if (guildUser) {
            res.send(guildUser.guild);
        } else {
            res.status(404).send({ message: "You are not part of any guild." });
        }
    } catch (error) {
        next(error);
    }
});
//<-----------------GET ALL GUILD RECIPES----------------->
apiRouter.get("/guildRecipe", async (req, res, next) => {
    try {
        const recipes = await prisma.userPostedRecipe.findMany();
        res.send(recipes);
    } catch (error) {
        next(error);
    }
})
//<-----------------GET A SINGLE GUILD RECIPE----------------->
apiRouter.get("/guildRecipe/:id", async (req, res, next) => {
    try {
        const recipe = await prisma.userPostedRecipe.findUnique({
            where: { id: Number(req.params.id) },
            include: {
                userIngredients: true,
                UserInstructions: true
            },
        });
        res.send(recipe)
    } catch (error) {
        next(error)
    }
});
//<-----------------POST USER RECIPE----------------->
apiRouter.post("/guildRecipe", requireUser, async (req, res, next) => {
    try {
        const { name, image, description } = req.body
        const newRecipe = await prisma.userPostedRecipe.create({
            data: {
                user: { connect: { id: req.user.id } },
                name,
                image,
                description,
                guild: { connect: { id: req.user.guildId } },
            },
            include: {
                user: true,
                guild: true
            }
        });
        delete newRecipe.user.password
        res.status(201).send({ newRecipe, message: "Recipe added!" });
    } catch (error) {
        next(error);
    }
})
//<-----------------POST USER RECIPE INGREDIENTS----------------->
apiRouter.post("/guildRecipe_ingredients", requireUser, async (req, res, next) => {
    try {
        const { quantity, name, userPostedRecipeId } = req.body
        const addIngredients = await prisma.userIngredients.create({
            data: {
                quantity,
                name,
                userPostedRecipe: { connect: { id: userPostedRecipeId } }
            }
        })
        res.send(addIngredients)
    }
    catch (error) {
        next(error);
    }
})
//<-----------------POST USER RECIPE INSTRUCTIONS----------------->
apiRouter.post("/guildRecipe_instructions", requireUser, async (req, res, next) => {
    try {
        const { stepNumber, description, userPostedRecipeId } = req.body
        const addInstructions = await prisma.userInstructions.create({
            data: {
                stepNumber,
                description,
                userPostedRecipe: { connect: { id: userPostedRecipeId } }
            }
        })
        res.send(addInstructions);
    } catch (error) {
        next(error);
    }
})
//<-----------------DELETE USER POSTED RECIPE----------------->
apiRouter.delete("/guildRecipe/:id", requireUser, async (req, res, next) => {
    try {
        const deletedRecipe = await prisma.userPostedRecipe.delete({
            where: { id: +req.params.id },
        });
        if (deletedRecipe.userId !== req.user.id || !deletedRecipe) {
            return res.status(404).send("Recipe not found.");
        }
        res.send(deletedRecipe);
    } catch (error) {
        next(error);
    }
})

//<-----------------UPDATE USER POSTED RECIPE----------------->
apiRouter.patch("/guildRecipe/:id", requireUser, async (req, res, next) => {
    try {
        const findRecipe = await prisma.userPostedRecipe.findFirst({
            where: {
                id: Number(req.params.id)
            },
        });
        const { name, image, description } = req.body;
        const updatedRecipe = await prisma.userPostedRecipe.update({
            where: {
                id: Number(req.params.id)
            },
            data: {
                name: name || undefined,
                image: image || undefined,
                description: description || undefined,
            },
        })
        res.send(updatedRecipe)
    } catch (error) {
        next(error);
    }
});
//<-----------------GET ALL USER'S RECIPEs----------------->
apiRouter.get("/myGuildRecipes", requireUser, async (req, res, next) => {
    try {
        const recipes = await prisma.userPostedRecipe.findMany({
            where: { userId: req.user.id },
            include: { 
                user: true,
                userIngredients: true,
                UserInstructions: true }
        });
        res.send(recipes);
    } catch (error) {
        next(error);
    }
});
//<-----------------GET A SINGLE USER'S RECIPE----------------->
apiRouter.get("/myGuildRecipe/:id", requireUser, async (req, res, next) => {
    try {
        const recipe = await prisma.userPostedRecipe.findUnique({
            where: {
                userId: req.user.id,
                id: Number(req.params.id)
            },
            include: {
                userIngredients: true,
                UserInstructions: true
            },
        });
        res.send(recipe)
    } catch (error) {
        next(error)
    }
});


//<-----------------RATE USER'S RECIPE----------------->
//POST /api/comment
apiRouter.post("/rateRecipe", requireUser, async (req, res, next) => {
    try {
        const { rating, writtenReview, userPostedRecipeId } = req.body
        const addRating = await prisma.rating.create({
            data: {
                user: { connect: { id: req.user.id } },
                rating,
                writtenReview,
                userPostedRecipe: { connect: { id: userPostedRecipeId } },
            },
            include: {
                user: true,
                userPostedRecipe: true
            }
        });
        res.status(201).send({ addRating, message: "Rating added!" });
    } catch (error) {
        next(error);
    }
})

//<-----------------PATCH RECIPES----------------->
//NOTE: ADMIN ONLY

//<-----------------DELETE RECIPES----------------->
//NOTE: ADMIN ONLY
module.exports = apiRouter;