/*
  Warnings:

  - Added the required column `guildId` to the `UserPostedRecipe` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserPostedRecipe" ADD COLUMN     "guildId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "UserPostedRecipe" ADD CONSTRAINT "UserPostedRecipe_guildId_fkey" FOREIGN KEY ("guildId") REFERENCES "Guild"("id") ON DELETE CASCADE ON UPDATE CASCADE;
