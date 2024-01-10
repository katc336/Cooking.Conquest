/*
  Warnings:

  - You are about to drop the column `exp` on the `Recipe` table. All the data in the column will be lost.
  - You are about to drop the column `totalExp` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Recipe" DROP COLUMN "exp";

-- AlterTable
ALTER TABLE "RecipeBookItem" ADD COLUMN     "completed" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "totalExp",
ADD COLUMN     "guildId" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "levelOneExp" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "levelThreeExp" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "levelTwoExp" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "UserPostedRecipe" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL,
    "ingredients" TEXT NOT NULL,
    "instructions" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "UserPostedRecipe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Guild" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "score" INTEGER NOT NULL,

    CONSTRAINT "Guild_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_guildId_fkey" FOREIGN KEY ("guildId") REFERENCES "Guild"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPostedRecipe" ADD CONSTRAINT "UserPostedRecipe_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
