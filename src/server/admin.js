const express = require('express');
const adminRouter = express.Router();

const { requireAdmin, requireUser } = require("./utils")

const jwt = require("jsonwebtoken")

require("dotenv").config();
const { JWT_SECRET } = process.env

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//<--------------------------------GET ALL USERS-------------------------------->
//GET /admin/all_users
adminRouter.get("/all_users", [requireUser, requireAdmin], async (req, res, next) => {
    try {
        const user = await prisma.user.findMany({
            include: {
                userPostedRecipes: true,
                guild: true
            },
        });
        //Removes password from each user object
        let removedPassword = user.map(user => {
            delete user.password
            return user
        })
        res.send(removedPassword);
    } catch (error) {
        next(error)
    }
});
//<--------------------------------DELETE A USER-------------------------------->
adminRouter.delete("/user/:id", [requireUser, requireAdmin], async (req, res, next) => {
    try {
        const deletedUser = await prisma.user.delete({
            where: { id: +req.params.id },
        });
        res.send({ deletedUser, message: "User deleted!" });
    } catch (error) {
        next(error);
    }
});
//<--------------------------------DELETE A USER'S RECIPE-------------------------------->
adminRouter.delete("/user_recipe/:id", [requireUser, requireAdmin], async (req, res, next) => {
    try {
        const deletedRecipe = await prisma.userPostedRecipe.delete({
            where: { id: +req.params.id },
        });
        res.send({ deletedRecipe, message: "User deleted!" });
    } catch (error) {
        next(error);
    }
});

module.exports = adminRouter;