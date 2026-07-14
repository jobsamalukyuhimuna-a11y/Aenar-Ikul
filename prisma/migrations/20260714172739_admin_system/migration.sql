/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `Admin` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `autoplay` on the `Music` table. All the data in the column will be lost.
  - You are about to drop the column `loop` on the `Music` table. All the data in the column will be lost.
  - You are about to drop the column `volume` on the `Music` table. All the data in the column will be lost.
  - You are about to drop the column `coverImage` on the `Story` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Admin" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Admin" ("createdAt", "id", "password", "username") SELECT "createdAt", "id", "password", "username" FROM "Admin";
DROP TABLE "Admin";
ALTER TABLE "new_Admin" RENAME TO "Admin";
CREATE UNIQUE INDEX "Admin_username_key" ON "Admin"("username");
CREATE TABLE "new_Character" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT,
    "kingdom" TEXT,
    "race" TEXT,
    "universe" TEXT,
    "status" TEXT,
    "image" TEXT,
    "quote" TEXT,
    "description" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Character" ("createdAt", "description", "id", "image", "kingdom", "name", "quote", "race", "slug", "status", "title", "universe") SELECT "createdAt", "description", "id", "image", "kingdom", "name", "quote", "race", "slug", "status", "title", "universe" FROM "Character";
DROP TABLE "Character";
ALTER TABLE "new_Character" RENAME TO "Character";
CREATE UNIQUE INDEX "Character_slug_key" ON "Character"("slug");
CREATE TABLE "new_Music" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "file" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Music" ("createdAt", "file", "id", "name") SELECT "createdAt", "file", "id", "name" FROM "Music";
DROP TABLE "Music";
ALTER TABLE "new_Music" RENAME TO "Music";
CREATE TABLE "new_Story" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "subtitle" TEXT,
    "description" TEXT,
    "content" TEXT NOT NULL,
    "cover" TEXT,
    "background" TEXT,
    "music" TEXT,
    "status" TEXT NOT NULL DEFAULT 'draft',
    "language" TEXT NOT NULL DEFAULT 'English',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Story" ("content", "createdAt", "description", "id", "language", "music", "slug", "status", "subtitle", "title", "updatedAt") SELECT "content", "createdAt", "description", "id", "language", "music", "slug", "status", "subtitle", "title", "updatedAt" FROM "Story";
DROP TABLE "Story";
ALTER TABLE "new_Story" RENAME TO "Story";
CREATE UNIQUE INDEX "Story_slug_key" ON "Story"("slug");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
