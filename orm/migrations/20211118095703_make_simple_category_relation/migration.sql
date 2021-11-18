/*
  Warnings:

  - You are about to drop the `CategoryRelation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_Category_child` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Category` DROP FOREIGN KEY `Category_parentId_fkey`;

-- DropForeignKey
ALTER TABLE `_Category_child` DROP FOREIGN KEY `_Category_child_ibfk_1`;

-- DropForeignKey
ALTER TABLE `_Category_child` DROP FOREIGN KEY `_Category_child_ibfk_2`;

-- DropTable
DROP TABLE `CategoryRelation`;

-- DropTable
DROP TABLE `_Category_child`;

-- AddForeignKey
ALTER TABLE `Category` ADD CONSTRAINT `Category_parentId_fkey` FOREIGN KEY (`parentId`) REFERENCES `Category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
