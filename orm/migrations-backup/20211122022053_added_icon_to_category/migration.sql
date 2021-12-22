/*
  Warnings:

  - Added the required column `icon` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Category` ADD COLUMN `icon` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Category` ADD CONSTRAINT `Category_icon_fkey` FOREIGN KEY (`icon`) REFERENCES `Image`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
