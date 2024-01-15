/*
  Warnings:

  - You are about to drop the column `ingredients` on the `UserPostedRecipe` table. All the data in the column will be lost.
  - You are about to drop the column `instructions` on the `UserPostedRecipe` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UserPostedRecipe" DROP COLUMN "ingredients",
DROP COLUMN "instructions";

-- CreateTable
CREATE TABLE "UserIngredients" (
    "id" SERIAL NOT NULL,
    "quantity" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "userPostedRecipeId" INTEGER NOT NULL,

    CONSTRAINT "UserIngredients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserInstructions" (
    "id" SERIAL NOT NULL,
    "stepNumber" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "userPostedRecipeId" INTEGER NOT NULL,

    CONSTRAINT "UserInstructions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserIngredients" ADD CONSTRAINT "UserIngredients_userPostedRecipeId_fkey" FOREIGN KEY ("userPostedRecipeId") REFERENCES "UserPostedRecipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserInstructions" ADD CONSTRAINT "UserInstructions_userPostedRecipeId_fkey" FOREIGN KEY ("userPostedRecipeId") REFERENCES "UserPostedRecipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
