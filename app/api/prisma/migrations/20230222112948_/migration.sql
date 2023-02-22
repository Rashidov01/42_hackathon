/*
  Warnings:

  - Made the column `validated` on table `ProjectUser` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "ProjectUser" ALTER COLUMN "validated" SET NOT NULL;
