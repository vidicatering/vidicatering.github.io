-- AlterTable
ALTER TABLE "BlogModel" ADD COLUMN     "image" TEXT NOT NULL DEFAULT 'default-image.png',
ADD COLUMN     "tags" TEXT NOT NULL DEFAULT '';
