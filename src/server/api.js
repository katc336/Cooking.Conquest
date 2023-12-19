const express = require('express');
const apiRouter = express.Router();

const { requireAdmin, requireUser } = require("./utils")

const { PrismaClient } = require("@prisma/client");
const { recipeBookItem, recipeBook } = require('./client');
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

//<-----------------GET ALL LEVELS----------------->

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