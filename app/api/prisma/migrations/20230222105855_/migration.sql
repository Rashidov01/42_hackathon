/*
  Warnings:

  - You are about to drop the column `project.id` on the `ProjectUser` table. All the data in the column will be lost.
  - You are about to drop the column `project.name` on the `ProjectUser` table. All the data in the column will be lost.
  - You are about to drop the column `project.parent_id` on the `ProjectUser` table. All the data in the column will be lost.
  - You are about to drop the column `project.slug` on the `ProjectUser` table. All the data in the column will be lost.
  - You are about to drop the column `validated?` on the `ProjectUser` table. All the data in the column will be lost.

*/
-- AlterTable
CREATE SEQUENCE projectuser_user_id_seq;
ALTER TABLE "ProjectUser" DROP COLUMN "project.id",
DROP COLUMN "project.name",
DROP COLUMN "project.parent_id",
DROP COLUMN "project.slug",
DROP COLUMN "validated?",
ADD COLUMN     "name" TEXT,
ADD COLUMN     "parent_id" INTEGER,
ADD COLUMN     "project_id" INTEGER,
ADD COLUMN     "slug" TEXT,
ADD COLUMN     "validated" BOOLEAN,
ALTER COLUMN "user_id" SET DEFAULT nextval('projectuser_user_id_seq'),
ALTER COLUMN "occurrence" DROP NOT NULL,
ALTER COLUMN "final_mark" DROP NOT NULL,
ALTER COLUMN "status" DROP NOT NULL,
ALTER COLUMN "current_team_id" DROP NOT NULL,
ALTER COLUMN "marked" DROP NOT NULL,
ALTER COLUMN "marked_at" DROP NOT NULL,
ALTER COLUMN "retriable_at" DROP NOT NULL,
ALTER COLUMN "created_at" DROP NOT NULL,
ALTER COLUMN "updated_at" DROP NOT NULL;
ALTER SEQUENCE projectuser_user_id_seq OWNED BY "ProjectUser"."user_id";
