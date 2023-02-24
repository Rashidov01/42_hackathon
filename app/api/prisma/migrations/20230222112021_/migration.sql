-- AlterTable
ALTER TABLE "ProjectUser" ALTER COLUMN "marked_at" DROP NOT NULL,
ALTER COLUMN "retriable_at" DROP NOT NULL,
ALTER COLUMN "created_at" DROP NOT NULL,
ALTER COLUMN "updated_at" DROP NOT NULL;
