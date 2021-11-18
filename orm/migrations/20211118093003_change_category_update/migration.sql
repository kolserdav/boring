-- CreateTable
CREATE TABLE `_Category_child` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_Category_child_AB_unique`(`A`, `B`),
    INDEX `_Category_child_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_Category_child` ADD FOREIGN KEY (`A`) REFERENCES `Category`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_Category_child` ADD FOREIGN KEY (`B`) REFERENCES `CategoryRelation`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
