/*
  Warnings:

  - A unique constraint covering the columns `[eventId,categoryId]` on the table `EventCategory` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[eventId,userId]` on the table `Favorites` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,categoryId]` on the table `UserCategory` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `EventCategory_eventId_categoryId_key` ON `EventCategory`(`eventId`, `categoryId`);

-- CreateIndex
CREATE UNIQUE INDEX `Favorites_eventId_userId_key` ON `Favorites`(`eventId`, `userId`);

-- CreateIndex
CREATE UNIQUE INDEX `UserCategory_userId_categoryId_key` ON `UserCategory`(`userId`, `categoryId`);
