-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" DATETIME,
    "password" TEXT,
    "birthdate" TEXT,
    "phoneNumber" TEXT,
    "superAdmin" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO "new_User" ("birthdate", "email", "emailVerified", "id", "name", "password", "phoneNumber", "superAdmin", "userId") SELECT "birthdate", "email", "emailVerified", "id", "name", "password", "phoneNumber", "superAdmin", "userId" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_userId_key" ON "User"("userId");
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
