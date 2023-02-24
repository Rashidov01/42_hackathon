-- AlterTable
CREATE SEQUENCE cursususer_cursus_id_seq;
ALTER TABLE "CursusUser" ALTER COLUMN "cursus_id" SET DEFAULT nextval('cursususer_cursus_id_seq');
ALTER SEQUENCE cursususer_cursus_id_seq OWNED BY "CursusUser"."cursus_id";
