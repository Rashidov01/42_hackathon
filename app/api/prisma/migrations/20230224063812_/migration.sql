-- CreateTable
CREATE TABLE "_UserSkill" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_UserSkill_AB_unique" ON "_UserSkill"("A", "B");

-- CreateIndex
CREATE INDEX "_UserSkill_B_index" ON "_UserSkill"("B");

-- AddForeignKey
ALTER TABLE "CursusUser" ADD CONSTRAINT "CursusUser_cursus_id_fkey" FOREIGN KEY ("cursus_id") REFERENCES "Cursus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserSkill" ADD CONSTRAINT "_UserSkill_A_fkey" FOREIGN KEY ("A") REFERENCES "CursusUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserSkill" ADD CONSTRAINT "_UserSkill_B_fkey" FOREIGN KEY ("B") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;
