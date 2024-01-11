/*
  Warnings:

  - You are about to drop the column `levelOneExp` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `levelThreeExp` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `levelTwoExp` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "levelOneExp",
DROP COLUMN "levelThreeExp",
DROP COLUMN "levelTwoExp",
ADD COLUMN     "totalExp" INTEGER NOT NULL DEFAULT 0;
