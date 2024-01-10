-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_guildId_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "guildId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_guildId_fkey" FOREIGN KEY ("guildId") REFERENCES "Guild"("id") ON DELETE SET NULL ON UPDATE CASCADE;
