const express = require('express');
const apiRouter = express.Router();

const { requireAdmin, requireUser } = require("./utils")

const { PrismaClient } = require("@prisma/client");
const { recipeBookItem, recipeBook } = require('./client');
const prisma = new PrismaClient();

//TO DO 

module.exports = apiRouter;