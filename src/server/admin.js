const express = require('express');
const adminRouter = express.Router();

const { requireAdmin, requireUser } = require("./utils")

const jwt = require("jsonwebtoken")

require("dotenv").config();
const { JWT_SECRET } = process.env

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//<--------------------------------GET ALL USERS-------------------------------->
//NOTE: ADMIN ONLY
//GET /admin/all_users
adminRouter.get("/all_users", [requireUser, requireAdmin], async (req, res, next) => {
    try{
        const user = prisma.user;
        const users = await user.findMany();
        
        delete users.password;

        res.send(users);
    } catch (error) {
        next (error)
    }
})

module.exports = adminRouter;