/*
  Warnings:

  - Made the column `grade` on table `CursusUser` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "CursusUser" ALTER COLUMN "grade" SET NOT NULL;
