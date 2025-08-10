import type { Dispatch } from "react"
import type { MenuItems } from "../types"
import type { OrderActions } from "../reducers/order-reducer"

type MenuItemProps = {
  item: MenuItems,
  dispatch: Dispatch<OrderActions>
}
export default function MenuItem({ item, dispatch }: MenuItemProps) {
  return (
    <button onClick={() => dispatch({type: 'add-item', payload: {item}})} 
    className="border-2 border-teal-400 hover:bg-teal-200 hover:cursor-pointer w-full p-3 text-lg rounded-lg flex justify-between">
      <p>
        {item.name}
      </p>
      <p className="font-black">
        ${item.price}
      </p>
    </button>
  )
};