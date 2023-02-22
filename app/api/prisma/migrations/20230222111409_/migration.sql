/*
  Warnings:

  - You are about to drop the column `parent_id` on the `ProjectUser` table. All the data in the column will be lost.
  - You are about to drop the column `project_id` on the `ProjectUser` table. All the data in the column will be lost.
  - You are about to drop the column `slug` on the `ProjectUser` table. All the data in the column will be lost.

*/
-- AlterTable
CREATE SEQUENCE projectuser_user_id_seq;
ALTER TABLE "ProjectUser" DROP COLUMN "parent_id",
DROP COLUMN "project_id",
DROP COLUMN "slug",
ALTER COLUMN "user_id" SET DEFAULT nextval('projectuser_user_id_seq');
ALTER SEQUENCE projectuser_user_id_seq OWNED BY "ProjectUser"."user_id";
