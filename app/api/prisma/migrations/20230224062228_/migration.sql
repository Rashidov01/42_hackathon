/*
  Warnings:

  - Made the column `user_id` on table `CursusUser` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "CursusUser" DROP CONSTRAINT "CursusUser_user_id_fkey";

-- AlterTable
ALTER TABLE "CursusUser" ALTER COLUMN "user_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "CursusUser" ADD CONSTRAINT "CursusUser_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
