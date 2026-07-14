/*
  Warnings:

  - You are about to drop the column `kingdom` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `quote` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `race` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `universe` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `background` on the `Story` table. All the data in the column will be lost.
  - You are about to drop the column `language` on the `Story` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Story` table. All the data in the column will be lost.
  - You are about to drop the column `subtitle` on the `Story` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Story` table. All the data in the column will be lost.
  - Made the column `image` on table `Character` required. This step will fail if there are existing NULL values in that column.
  - Made the column `title` on table `Character` required. This step will fail if there are existing NULL values in that column.
  - Made the column `cover` on table `Story` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `Story` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Character" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Character" ("createdAt", "description", "id", "image", "name", "slug", "title") SELECT "createdAt", "description", "id", "image", "name", "slug", "title" FROM "Character";
DROP TABLE "Character";
ALTER TABLE "new_Character" RENAME TO "Character";
CREATE UNIQUE INDEX "Character_slug_key" ON "Character"("slug");
CREATE TABLE "new_Story" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "cover" TEXT NOT NULL,
    "music" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Story" ("content", "cover", "createdAt", "description", "id", "music", "slug", "title") SELECT "content", "cover", "createdAt", "description", "id", "music", "slug", "title" FROM "Story";
DROP TABLE "Story";
ALTER TABLE "new_Story" RENAME TO "Story";
CREATE UNIQUE INDEX "Story_slug_key" ON "Story"("slug");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
