/*
  Warnings:

  - You are about to drop the column `cursus_id` on the `CursusUser` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "CursusUser" DROP CONSTRAINT "CursusUser_cursus_id_fkey";

-- AlterTable
ALTER TABLE "CursusUser" DROP COLUMN "cursus_id";
