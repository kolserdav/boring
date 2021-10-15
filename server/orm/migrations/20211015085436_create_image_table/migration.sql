/*
  Warnings:

  - You are about to alter the column `image` on the `Category` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `image` on the `Event` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `Category` MODIFY `image` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Event` MODIFY `image` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Image` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fieldname` VARCHAR(191) NOT NULL,
    `originalname` VARCHAR(191) NOT NULL,
    `encoding` VARCHAR(191) NOT NULL,
    `mimetype` VARCHAR(191) NOT NULL,
    `destination` VARCHAR(191) NOT NULL,
    `origin` ENUM('category', 'event') NOT NULL,
    `filename` VARCHAR(191) NOT NULL,
    `path` VARCHAR(191) NOT NULL,
    `size` INTEGER NOT NULL,
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Image_path_key`(`path`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Category` ADD CONSTRAINT `Category_image_fkey` FOREIGN KEY (`image`) REFERENCES `Image`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Event` ADD CONSTRAINT `Event_image_fkey` FOREIGN KEY (`image`) REFERENCES `Image`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
