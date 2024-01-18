-- DropForeignKey
ALTER TABLE "UserIngredients" DROP CONSTRAINT "UserIngredients_userPostedRecipeId_fkey";

-- DropForeignKey
ALTER TABLE "UserInstructions" DROP CONSTRAINT "UserInstructions_userPostedRecipeId_fkey";

-- AddForeignKey
ALTER TABLE "UserIngredients" ADD CONSTRAINT "UserIngredients_userPostedRecipeId_fkey" FOREIGN KEY ("userPostedRecipeId") REFERENCES "UserPostedRecipe"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserInstructions" ADD CONSTRAINT "UserInstructions_userPostedRecipeId_fkey" FOREIGN KEY ("userPostedRecipeId") REFERENCES "UserPostedRecipe"("id") ON DELETE CASCADE ON UPDATE CASCADE;
