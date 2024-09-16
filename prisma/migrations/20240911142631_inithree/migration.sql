/*
  Warnings:

  - You are about to drop the `BlogModel` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "BlogModel";

-- CreateTable
CREATE TABLE "Blog" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "category" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "image" TEXT NOT NULL DEFAULT 'image',

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("id")
);
