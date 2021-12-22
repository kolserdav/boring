-- AlterTable
ALTER TABLE `Image` MODIFY `origin` ENUM('category', 'event', 'icon', 'icon_sub') NOT NULL;
