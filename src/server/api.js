const express = require('express');
const apiRouter = express.Router();

const { requireAdmin, requireUser } = require("./utils")

const { PrismaClient } = require("@prisma/client");
const { recipeBookItem, recipeBook, level } = require('./client');
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
apiRouter.get("/level/:id", async (req, res, next) => {
    try {
        const level = await prisma.level.findUnique({
            where: {
                id: Number(req.params.id)
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
apiRouter.post("/myRecipe", requireUser, async (req, res, next) => {
    const recipeId = req.body.recipeId
    try {
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

//GET /api/:user/comments 
apiRouter.get("/myRecipeBook", requireUser, async (req, res, next) => {
    try {
        const recipes = await prisma.recipeBookItem.findMany({
            where: { userId: req.user.id },
            include: { user: true }
        });
         //TO DO: SECURITY ISSUE SENDING PASSWORD TO FRONTEND
        res.send(recipes);
    } catch (error) {
        next(error);
    }
});
//<-----------------GET ALL USER'S RECIPES----------------->
apiRouter.get("/myRecipes", requireUser, async (req, res, next) => {
    try {
        const recipes = await prisma.recipeBookItem.findMany({
            where: { userId: req.user.id },
            include: { user: true }
        })
        delete recipes.user.password
        //TO DO: SECURITY ISSUE SENDING PASSWORD TO FRONTEND
        res.send(recipes)
    } catch (error) {
        next(error);
    }
});

//
//<---------------------------------AFTER LEVEL 3-------------------------------------->
//<-----------------ADD GUILD TO USER ACCOUNT----------------->
apiRouter.patch("/myGuild/:id", requireUser, async (req, res, next) => {
    try {
        const { guildId } = req.body;
        const updatedGuild = await prisma.user.update({
            where: { id: Number(req.params.id) },
            data: {
                guild: guildId ? { connect: { id: guildId } } : undefined,
            },
            include: { guild: true },
        });
        delete updatedGuild.password
        res.send(updatedGuild);
    } catch (error) {
        next(error);
    }
})

//<-----------------RATE USER'S RECIPE----------------->
//POST /api/comment
apiRouter.post("/rateRecipe", requireUser, async (req, res, next) => {
    try {
       
    } catch (error) {
        next(error);
    }
})

//<-----------------DELETE USER'S RECIPES----------------->

//<-----------------PATCH RECIPES----------------->
//NOTE: ADMIN ONLY

//<-----------------DELETE RECIPES----------------->
//NOTE: ADMIN ONLY
module.exports = apiRouter;