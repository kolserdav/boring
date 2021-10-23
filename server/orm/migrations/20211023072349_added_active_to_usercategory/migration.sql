/*
  Warnings:

  - You are about to drop the column `active` on the `Category` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Category` DROP COLUMN `active`;

-- AlterTable
ALTER TABLE `UserCategory` ADD COLUMN `active` BOOLEAN NOT NULL DEFAULT false;
