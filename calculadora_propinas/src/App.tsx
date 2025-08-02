import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPercentageForm from "./components/TipPercentageForm";
import { menuItems } from "./data/db"
import userOrder from "./hooks/userOrder";
function App() {
  const { order, tip, setTip, addItem, removeItem, placeOrder } = userOrder()
  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black"> CALCULADORA PROPINAS</h1>
      </header>
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menu</h2>
          <div className="space-y-3 mt-5">
            {menuItems.map(item => (
              <MenuItem key={item.id}
                item={item}
                addItem={addItem} />
            ))}

          </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {
            order.length  ? 
            (
              <>
                <OrderContents order={order} removeItem={removeItem} />
                <OrderTotals tip={tip} order={order} placeOrder={placeOrder} />
                <TipPercentageForm setTip={setTip} tip={tip} />
              </>
            ) :
              (
                <p className="text-center">No hay ordenes</p>
              )
          }
        </div>
      </main>
    </>
  )
}

export default App
