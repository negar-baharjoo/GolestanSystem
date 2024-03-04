-- CreateTable
CREATE TABLE "_pre" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_pre_AB_unique" ON "_pre"("A", "B");

-- CreateIndex
CREATE INDEX "_pre_B_index" ON "_pre"("B");

-- AddForeignKey
ALTER TABLE "_pre" ADD CONSTRAINT "_pre_A_fkey" FOREIGN KEY ("A") REFERENCES "Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_pre" ADD CONSTRAINT "_pre_B_fkey" FOREIGN KEY ("B") REFERENCES "Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;
