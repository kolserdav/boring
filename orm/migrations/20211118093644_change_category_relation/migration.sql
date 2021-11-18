/*
  Warnings:

  - You are about to drop the column `childId` on the `Category` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Category` DROP FOREIGN KEY `Category_childId_fkey`;

-- AlterTable
ALTER TABLE `Category` DROP COLUMN `childId`;
