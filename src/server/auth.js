const express = require('express');
const authRouter = express.Router();

const { requireAdmin, requireUser } = require("./utils")

const jwt = require("jsonwebtoken")

require("dotenv").config();
const { JWT_SECRET } = process.env

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const bcrypt = require("bcrypt");
const SALT_COUNT = 10;

//<--------------------------------REGISTER USER-------------------------------->
// POST /auth/register
authRouter.post("/register", async (req, res, next) => {
    try {
        const { name, username, email, password, } = req.body
        const hashedPassword = await bcrypt.hash(password, SALT_COUNT)

        const user = await prisma.user.create({
            data: {
                name: name,
                username: username,
                email: email,
                password: hashedPassword
            }
        });
        const token = jwt.sign({ id: user.id, username }, process.env.JWT_SECRET);
        delete user.password
        res.send({ user, token });
    } catch (error) {
        next(error)
    }
});

//<--------------------------------LOGIN USERS-------------------------------->
//POST /auth/login
authRouter.post("/login", async (req, res, next) => {
    try {
        const { username, password } = req.body
        const user = await prisma.user.findUnique({
            where: {
                username: username
            },
        });
        const correctPassword = await bcrypt.compare(
            password,
            user?.password ?? ""
        );
        //Check user and password 
        if(!user) {
            return res.status(401).send("There is no user with that username")
        } else if (!correctPassword){
            return res.status(401).send("Incorrect password");
        }
        const token = jwt.sign({ id: user.id}, process.env.JWT_SECRET);
        delete user.password
        delete user.hashedPassword
        res.send({ token });
        console.log("Successful login!")
    } catch (error) {
        next(error)
    }
});
//<--------------------------------GET USER ACCOUNT-------------------------------->
//GET /auth/my_account
authRouter.get("/my_account", requireUser, async (req, res, next) => {
    try{
        const user = await prisma.user.findUnique({
            where: {
                id: req.user.id
            }
        });
        delete user.password
        res.send(user);
    } catch (error){
        next(error)
    }
});

//<--------------------------------GET ALL USERS-------------------------------->
//NOTE: ADMIN ONLY
//GET /auth/all_users
authRouter.get("/all_users", [requireUser, requireAdmin], async (req, res, next) => {
    try{
        const user = prisma.user;
        const users = await user.findMany();

        delete users.password;
        res.send(users);
    } catch (error) {
        next (error)
    }
})
module.exports = authRouter;