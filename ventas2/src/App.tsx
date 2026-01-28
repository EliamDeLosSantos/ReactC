import VentasForm from "./components/VentasForm";
import VentasTable from "./components/VentasTable";
import { useVentasForm } from "./hooks/useVentasForm";

function App() {
  const {formData, ventas, handleChange, handleSubmit, handleDelete, setUpdatingState} = useVentasForm();
  return (
    <div className="">
        <h1 className="text-center font-black text-3xl">Formulario de ventas</h1>
        <VentasForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit}/>
        <VentasTable handleDelete={handleDelete} setUpdatingState={setUpdatingState} ventas={ventas}/>
    </div>
  )
}

export default App