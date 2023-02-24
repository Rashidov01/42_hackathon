/*
  Warnings:

  - You are about to drop the `_UserSkill` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CursusUser" DROP CONSTRAINT "CursusUser_cursus_id_fkey";

-- DropForeignKey
ALTER TABLE "_UserSkill" DROP CONSTRAINT "_UserSkill_A_fkey";

-- DropForeignKey
ALTER TABLE "_UserSkill" DROP CONSTRAINT "_UserSkill_B_fkey";

-- DropTable
DROP TABLE "_UserSkill";
