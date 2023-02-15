/*
  Warnings:

  - You are about to alter the column `wallet` on the `User` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to drop the `Project` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProjectMeta` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Team` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserTeam` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[user_id]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[tg_id]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[login]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phone]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_projectMetaId_fkey";

-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_user.id_fkey";

-- DropForeignKey
ALTER TABLE "Team" DROP CONSTRAINT "Team_projectId_fkey";

-- DropForeignKey
ALTER TABLE "UserTeam" DROP CONSTRAINT "UserTeam_project_id_fkey";

-- DropForeignKey
ALTER TABLE "UserTeam" DROP CONSTRAINT "UserTeam_user.id_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "tg_id" SERIAL NOT NULL,
ADD COLUMN     "titles" TEXT[],
ADD COLUMN     "user_id" SERIAL NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "active" DROP NOT NULL,
ALTER COLUMN "active" DROP DEFAULT,
ALTER COLUMN "alumni" DROP NOT NULL,
ALTER COLUMN "alumni" DROP DEFAULT,
ALTER COLUMN "anonymize_date" DROP DEFAULT,
ALTER COLUMN "correction_point" DROP DEFAULT,
ALTER COLUMN "created_at" DROP DEFAULT,
ALTER COLUMN "data_erasure_date" DROP DEFAULT,
ALTER COLUMN "kind" SET DEFAULT 'null',
ALTER COLUMN "login" DROP DEFAULT,
ALTER COLUMN "phone" SET DEFAULT 'hidden',
ALTER COLUMN "pool_month" SET DATA TYPE TEXT,
ALTER COLUMN "pool_year" SET DATA TYPE TEXT,
ALTER COLUMN "staff" DROP DEFAULT,
ALTER COLUMN "updated_at" DROP DEFAULT,
ALTER COLUMN "url" SET DEFAULT 'null',
ALTER COLUMN "wallet" DROP DEFAULT,
ALTER COLUMN "wallet" SET DATA TYPE INTEGER;
DROP SEQUENCE "User_id_seq";

-- DropTable
DROP TABLE "Project";

-- DropTable
DROP TABLE "ProjectMeta";

-- DropTable
DROP TABLE "Team";

-- DropTable
DROP TABLE "UserTeam";

-- CreateTable
CREATE TABLE "Cursus" (
    "id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "kind" TEXT NOT NULL,

    CONSTRAINT "Cursus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "level" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CursusUser" (
    "id" INTEGER NOT NULL,
    "grade" TEXT,
    "level" DOUBLE PRECISION NOT NULL,
    "blackholed_at" TIMESTAMP(3),
    "begin_at" TIMESTAMP(3) NOT NULL,
    "end_at" TIMESTAMP(3) NOT NULL,
    "has_coalition" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "user_id" INTEGER NOT NULL,
    "cursus_id" INTEGER NOT NULL,

    CONSTRAINT "CursusUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserSkill" (
    "id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "skill_id" INTEGER NOT NULL,

    CONSTRAINT "UserSkill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectUser" (
    "id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "occurrence" INTEGER NOT NULL,
    "final_mark" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "validated?" BOOLEAN NOT NULL,
    "current_team_id" INTEGER NOT NULL,
    "marked" BOOLEAN NOT NULL,
    "marked_at" TIMESTAMP(3) NOT NULL,
    "retriable_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "project.id" INTEGER NOT NULL,
    "project.name" TEXT NOT NULL,
    "project.slug" TEXT NOT NULL,
    "project.parent_id" INTEGER,
    "cursus_ids" INTEGER[],

    CONSTRAINT "ProjectUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LanguagesUsers" (
    "id" SERIAL NOT NULL,
    "language_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "position" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LanguagesUsers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Achievement" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "tier" TEXT NOT NULL,
    "kind" TEXT NOT NULL,
    "visible" BOOLEAN NOT NULL,
    "image" TEXT NOT NULL,
    "nbr_of_success" INTEGER,
    "users_url" TEXT,

    CONSTRAINT "Achievement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_UserSkill" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_AchievementToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_UserSkill_AB_unique" ON "_UserSkill"("A", "B");

-- CreateIndex
CREATE INDEX "_UserSkill_B_index" ON "_UserSkill"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AchievementToUser_AB_unique" ON "_AchievementToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_AchievementToUser_B_index" ON "_AchievementToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "User_user_id_key" ON "User"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_tg_id_key" ON "User"("tg_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_login_key" ON "User"("login");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

-- AddForeignKey
ALTER TABLE "CursusUser" ADD CONSTRAINT "CursusUser_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CursusUser" ADD CONSTRAINT "CursusUser_cursus_id_fkey" FOREIGN KEY ("cursus_id") REFERENCES "Cursus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSkill" ADD CONSTRAINT "UserSkill_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSkill" ADD CONSTRAINT "UserSkill_skill_id_fkey" FOREIGN KEY ("skill_id") REFERENCES "Skill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectUser" ADD CONSTRAINT "ProjectUser_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LanguagesUsers" ADD CONSTRAINT "LanguagesUsers_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserSkill" ADD CONSTRAINT "_UserSkill_A_fkey" FOREIGN KEY ("A") REFERENCES "CursusUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserSkill" ADD CONSTRAINT "_UserSkill_B_fkey" FOREIGN KEY ("B") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AchievementToUser" ADD CONSTRAINT "_AchievementToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Achievement"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AchievementToUser" ADD CONSTRAINT "_AchievementToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
