-- CreateTable
CREATE TABLE "public"."Order" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "orderReadyAt" TIMESTAMP(3),

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."OrderProducts" (
    "id" SERIAL NOT NULL,
    "OrderId" INTEGER NOT NULL,
    "ProductId" INTEGER NOT NULL,

    CONSTRAINT "OrderProducts_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."OrderProducts" ADD CONSTRAINT "OrderProducts_OrderId_fkey" FOREIGN KEY ("OrderId") REFERENCES "public"."Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."OrderProducts" ADD CONSTRAINT "OrderProducts_ProductId_fkey" FOREIGN KEY ("ProductId") REFERENCES "public"."Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
