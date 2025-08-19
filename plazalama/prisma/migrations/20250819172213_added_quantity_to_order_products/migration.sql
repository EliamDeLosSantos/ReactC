/*
  Warnings:

  - Added the required column `Quantity` to the `OrderProducts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."OrderProducts" ADD COLUMN     "Quantity" INTEGER NOT NULL;
