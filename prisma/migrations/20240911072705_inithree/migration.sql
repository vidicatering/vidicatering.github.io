/*
  Warnings:

  - You are about to drop the `UserModel` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "BlogModel" DROP CONSTRAINT "BlogModel_authorId_fkey";

-- DropTable
DROP TABLE "UserModel";
