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
})

module.exports = authRouter;