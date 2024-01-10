/*
  Warnings:

  - You are about to drop the column `rating` on the `UserPostedRecipe` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UserPostedRecipe" DROP COLUMN "rating";

-- CreateTable
CREATE TABLE "Rating" (
    "id" SERIAL NOT NULL,
    "rating" INTEGER NOT NULL,
    "writtenReview" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "userPostedRecipeId" INTEGER NOT NULL,

    CONSTRAINT "Rating_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_userPostedRecipeId_fkey" FOREIGN KEY ("userPostedRecipeId") REFERENCES "UserPostedRecipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
