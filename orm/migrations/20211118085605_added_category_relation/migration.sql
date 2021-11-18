/*
  Warnings:

  - A unique constraint covering the columns `[childId]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[parentId]` on the table `Category` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Category` ADD COLUMN `childId` INTEGER NULL,
    ADD COLUMN `parentId` INTEGER NULL;

-- CreateTable
CREATE TABLE `CategoryRelation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Category_childId_key` ON `Category`(`childId`);

-- CreateIndex
CREATE UNIQUE INDEX `Category_parentId_key` ON `Category`(`parentId`);

-- AddForeignKey
ALTER TABLE `Category` ADD CONSTRAINT `Category_childId_fkey` FOREIGN KEY (`childId`) REFERENCES `CategoryRelation`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Category` ADD CONSTRAINT `Category_parentId_fkey` FOREIGN KEY (`parentId`) REFERENCES `CategoryRelation`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
