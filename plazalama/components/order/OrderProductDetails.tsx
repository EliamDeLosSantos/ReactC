import { useStore } from "@/src/store"
import { OrderItem } from "@/src/types"
import { formatCurrency } from "@/src/utils"
import { MinusIcon, PlusIcon } from "@heroicons/react/16/solid"
import { XCircleIcon } from "@heroicons/react/24/outline"
import { useMemo } from "react"

type OrderProductDetails = {
  orderItem: OrderItem
}

export default function OrderProductDetails({ orderItem }: OrderProductDetails) {
  const MIN_ITEMS = 1
  const MAX_ITEMS = 10

  const increaseQuantity = useStore(state => state.increaseQuantity)
  const decreaseQuantity = useStore(state => state.decreaseQuantity)
  const removeItem = useStore(state => state.removeItem)
  const decreaseButtonDisabled = useMemo(() => orderItem.quantity === MIN_ITEMS, [orderItem])
  const increaseButtonDisabled = useMemo(() => orderItem.quantity === MAX_ITEMS, [orderItem])
  return (
    <div className="shadow space-y-1 p-4 bg-white  border-t border-gray-200 ">
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <p className="text-xl font-bold">{orderItem.name} </p>

          <button
            type="button"
            className=" cursor-pointer"
            onClick={() => { removeItem(orderItem.id) }}
          >
            <XCircleIcon className="text-red-600 h-8 w-8" />
          </button>
        </div>
        <p className="text-2xl text-amber-500 font-black">
          {formatCurrency(orderItem.price)}
        </p>
        <div className="flex gap-5 px-10 py-2 bg-gray-100 w-fit rounded-lg">
          <button
            type="button"
            onClick={() => { decreaseQuantity(orderItem.id) }}
            disabled ={decreaseButtonDisabled}
            className="cursor-pointer disabled:opacity-10"
          >
            <MinusIcon className="h-6 w-6" />
          </button>

          <p className="text-lg font-black ">
            {orderItem.quantity}
          </p>

          <button
            type="button"
            className=" cursor-pointer disabled:opacity-10"
            disabled = {increaseButtonDisabled}
            onClick={() => { increaseQuantity(orderItem.id) }}
          >
            <PlusIcon className="h-6 w-6" />
          </button>
        </div>
        <p className="text-xl font-black text-gray-700 cursor-pointer">
          Subtotal: {orderItem.subtotal}
          <span className="font-normal">

          </span>
        </p>
      </div>
    </div>
  )
};

