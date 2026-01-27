import { useVentasForm } from "../hooks/useVentasForm";

export default function VentasForm({formData, handleChange, handleSubmit}) {
    return (
        <div>
            <form>
                <h2>Formulario de Venta</h2>
                <label>Nombre</label>
                <input required id="name" type="text" value={formData.name} onChange={handleChange} />
                <label>Teléfono</label>
                <input pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required id="phone" type="tel" value={formData.phone} onChange={handleChange} />
                <label>Precio</label>
                <input id="price" type="number" value={formData.price} onChange={handleChange} />
                <button onClick={handleSubmit}>Go</button>
            </form>
        </div>
    )
};

