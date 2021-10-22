/*
  Warnings:

  - You are about to drop the column `categoryId` on the `Favorites` table. All the data in the column will be lost.
  - Added the required column `eventId` to the `Favorites` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Favorites` DROP FOREIGN KEY `Favorites_categoryId_fkey`;

-- AlterTable
ALTER TABLE `Favorites` DROP COLUMN `categoryId`,
    ADD COLUMN `eventId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Favorites` ADD CONSTRAINT `Favorites_eventId_fkey` FOREIGN KEY (`eventId`) REFERENCES `Event`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
