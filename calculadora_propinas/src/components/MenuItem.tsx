import type { MenuItems } from "../types"

type MenuItemProps = {
  item: MenuItems,
  addItem: (item: MenuItems) => void
}
export default function MenuItem({ item, addItem }: MenuItemProps) {
  return (
    <button onClick={() => addItem(item)} 
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