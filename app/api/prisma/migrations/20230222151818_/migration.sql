-- AlterTable
ALTER TABLE "User" ALTER COLUMN "anonymize_date" DROP DEFAULT,
ALTER COLUMN "created_at" DROP NOT NULL,
ALTER COLUMN "data_erasure_date" DROP NOT NULL,
ALTER COLUMN "updated_at" DROP NOT NULL;
