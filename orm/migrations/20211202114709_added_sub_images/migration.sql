-- AlterTable
ALTER TABLE `Image` ADD COLUMN `parentId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Image` ADD CONSTRAINT `Image_parentId_fkey` FOREIGN KEY (`parentId`) REFERENCES `Image`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
