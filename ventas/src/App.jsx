import VentasForm from "./components/VentasForm";
import VentasList from "./components/VentasList";
import { useVentasForm } from "./hooks/useVentasForm";

export function App() {
      const {formData,ventas, handleChange, handleSubmit, handleDelete} = useVentasForm()
  return (
    <div>
      <h1>Seguimiento de Ventas de Vestidos</h1>
      <VentasForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit}/>
      <VentasList ventas={ventas} handleDelete={handleDelete}/>
    </div>
  );
}

export default App