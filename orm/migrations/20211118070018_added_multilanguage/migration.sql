/*
  Warnings:

  - You are about to drop the column `description` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Event` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[titleRu]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[titleUk]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[titleEn]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `descriptionEn` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descriptionRu` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descriptionUk` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titleEn` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titleRu` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titleUk` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descriptionEn` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descriptionRu` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descriptionUk` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titleEn` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titleRu` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titleUk` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Category_title_key` ON `Category`;

-- DropIndex
DROP INDEX `Event_title_key` ON `Event`;

-- AlterTable
ALTER TABLE `Category` DROP COLUMN `description`,
    DROP COLUMN `title`,
    ADD COLUMN `descriptionEn` MEDIUMTEXT NOT NULL,
    ADD COLUMN `descriptionRu` MEDIUMTEXT NOT NULL,
    ADD COLUMN `descriptionUk` MEDIUMTEXT NOT NULL,
    ADD COLUMN `titleEn` VARCHAR(191) NOT NULL,
    ADD COLUMN `titleRu` VARCHAR(191) NOT NULL,
    ADD COLUMN `titleUk` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Event` DROP COLUMN `description`,
    DROP COLUMN `title`,
    ADD COLUMN `descriptionEn` MEDIUMTEXT NOT NULL,
    ADD COLUMN `descriptionRu` MEDIUMTEXT NOT NULL,
    ADD COLUMN `descriptionUk` MEDIUMTEXT NOT NULL,
    ADD COLUMN `titleEn` VARCHAR(191) NOT NULL,
    ADD COLUMN `titleRu` VARCHAR(191) NOT NULL,
    ADD COLUMN `titleUk` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Category_titleRu_key` ON `Category`(`titleRu`);

-- CreateIndex
CREATE UNIQUE INDEX `Category_titleUk_key` ON `Category`(`titleUk`);

-- CreateIndex
CREATE UNIQUE INDEX `Category_titleEn_key` ON `Category`(`titleEn`);
