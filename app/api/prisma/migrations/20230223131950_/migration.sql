-- DropForeignKey
ALTER TABLE "CursusUser" DROP CONSTRAINT "CursusUser_user_id_fkey";

-- AlterTable
CREATE SEQUENCE cursususer_user_id_seq;
ALTER TABLE "CursusUser" ALTER COLUMN "grade" SET DEFAULT 'null',
ALTER COLUMN "blackholed_at" SET DEFAULT 'null',
ALTER COLUMN "blackholed_at" SET DATA TYPE TEXT,
ALTER COLUMN "begin_at" SET DATA TYPE TEXT,
ALTER COLUMN "end_at" SET DEFAULT 'null',
ALTER COLUMN "end_at" SET DATA TYPE TEXT,
ALTER COLUMN "has_coalition" SET DEFAULT false,
ALTER COLUMN "user_id" DROP NOT NULL,
ALTER COLUMN "user_id" SET DEFAULT nextval('cursususer_user_id_seq');
ALTER SEQUENCE cursususer_user_id_seq OWNED BY "CursusUser"."user_id";

-- AddForeignKey
ALTER TABLE "CursusUser" ADD CONSTRAINT "CursusUser_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
