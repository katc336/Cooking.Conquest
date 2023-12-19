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
//<-----------------GET SINGLE LEVELS----------------->

//<-----------------GET RECIPES BY LEVEL----------------->

//<-----------------ADD RECIPE TO USER ACCOUNT----------------->

//<-----------------GET ALL USER'S RECIPES----------------->

//<-----------------GET SINGLE USER'S RECIPE----------------->

//<-----------------DELETE USER'S RECIPES----------------->

//<-----------------PATCH RECIPES----------------->
//NOTE: ADMIN ONLY

//<-----------------DELETE RECIPES----------------->
//NOTE: ADMIN ONLY
module.exports = apiRouter;