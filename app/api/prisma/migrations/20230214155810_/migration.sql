/*
  Warnings:

  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "name",
ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "alumni" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "alumnized_at" TIMESTAMP(3),
ADD COLUMN     "anonymize_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "correction_point" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "data_erasure_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "displayname" TEXT,
ADD COLUMN     "first_name" TEXT,
ADD COLUMN     "kind" TEXT,
ADD COLUMN     "last_name" TEXT,
ADD COLUMN     "location" TEXT,
ADD COLUMN     "login" TEXT NOT NULL DEFAULT 'null',
ADD COLUMN     "phone" TEXT,
ADD COLUMN     "pool_month" INTEGER,
ADD COLUMN     "pool_year" INTEGER,
ADD COLUMN     "staff" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "url" TEXT,
ADD COLUMN     "usual_first_name" TEXT,
ADD COLUMN     "usual_full_name" TEXT,
ADD COLUMN     "wallet" DOUBLE PRECISION NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "Project" (
    "id" INTEGER NOT NULL,
    "occurrence" INTEGER NOT NULL,
    "final_mark" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "validated?" BOOLEAN NOT NULL,
    "current_team_id" INTEGER NOT NULL,
    "cursus_ids" INTEGER[],
    "marked_at" TIMESTAMP(3) NOT NULL,
    "marked" BOOLEAN NOT NULL,
    "retriable_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "user.id" INTEGER NOT NULL,
    "projectMetaId" INTEGER NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectMeta" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "parent_id" INTEGER,

    CONSTRAINT "ProjectMeta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Team" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "final_mark" INTEGER NOT NULL,
    "project_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,
    "terminating_at" TIMESTAMP(3),
    "locked?" BOOLEAN NOT NULL,
    "validated?" BOOLEAN NOT NULL,
    "closed?" BOOLEAN NOT NULL,
    "repo_url" TEXT,
    "repo_uuid" TEXT,
    "locked_at" TIMESTAMP(3),
    "closed_at" TIMESTAMP(3),
    "project_session_id" INTEGER NOT NULL,
    "project_gitlab_path" TEXT,
    "projectId" INTEGER,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserTeam" (
    "id" INTEGER NOT NULL,
    "user.id" INTEGER NOT NULL,
    "project_id" INTEGER NOT NULL,
    "leader" BOOLEAN NOT NULL,
    "occurrence" INTEGER NOT NULL,
    "validated" BOOLEAN NOT NULL,
    "projects_user_id" INTEGER,

    CONSTRAINT "UserTeam_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_user.id_fkey" FOREIGN KEY ("user.id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_projectMetaId_fkey" FOREIGN KEY ("projectMetaId") REFERENCES "ProjectMeta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserTeam" ADD CONSTRAINT "UserTeam_user.id_fkey" FOREIGN KEY ("user.id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserTeam" ADD CONSTRAINT "UserTeam_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
