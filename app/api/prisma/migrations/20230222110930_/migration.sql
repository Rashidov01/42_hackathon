/*
  Warnings:

  - You are about to drop the column `cursus_ids` on the `ProjectUser` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ProjectUser" DROP COLUMN "cursus_ids",
ALTER COLUMN "occurrence" SET DEFAULT 0,
ALTER COLUMN "final_mark" SET DEFAULT 0,
ALTER COLUMN "parent_id" SET DEFAULT 0;
