/*
  Warnings:

  - Made the column `status` on table `ProjectUser` required. This step will fail if there are existing NULL values in that column.
  - Made the column `current_team_id` on table `ProjectUser` required. This step will fail if there are existing NULL values in that column.
  - Made the column `marked` on table `ProjectUser` required. This step will fail if there are existing NULL values in that column.
  - Made the column `marked_at` on table `ProjectUser` required. This step will fail if there are existing NULL values in that column.
  - Made the column `retriable_at` on table `ProjectUser` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `ProjectUser` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `ProjectUser` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `ProjectUser` required. This step will fail if there are existing NULL values in that column.
  - Made the column `project_id` on table `ProjectUser` required. This step will fail if there are existing NULL values in that column.
  - Made the column `slug` on table `ProjectUser` required. This step will fail if there are existing NULL values in that column.
  - Made the column `validated` on table `ProjectUser` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "ProjectUser" ADD COLUMN     "cursus_ids" INTEGER[],
ALTER COLUMN "user_id" DROP DEFAULT,
ALTER COLUMN "status" SET NOT NULL,
ALTER COLUMN "current_team_id" SET NOT NULL,
ALTER COLUMN "marked" SET NOT NULL,
ALTER COLUMN "marked_at" SET NOT NULL,
ALTER COLUMN "retriable_at" SET NOT NULL,
ALTER COLUMN "created_at" SET NOT NULL,
ALTER COLUMN "updated_at" SET NOT NULL,
ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "project_id" SET NOT NULL,
ALTER COLUMN "slug" SET NOT NULL,
ALTER COLUMN "validated" SET NOT NULL;
DROP SEQUENCE "projectuser_user_id_seq";
