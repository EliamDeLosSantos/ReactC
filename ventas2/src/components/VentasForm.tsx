import type { Ventas } from "../types"

type VentasFormProps = {
    formData:Ventas,
    handleSubmit: (event: React.SubmitEvent<HTMLFormElement>) => void,
    handleChange: (event: React.ChangeEvent<HTMLInputElement, Element>) => void
}

export default function VentasForm({formData, handleSubmit, handleChange}: VentasFormProps){
    return(
               <div>
          <form onSubmit={handleSubmit} className="justify-items-center">
            <div className="grid grid-cols">
                <label htmlFor="nombre" className="text-2xl font-bold">
                    Nombre del articulo:
                </label>
              <input className="border border-gray-400 rounded p-2 m-5 w-100 font-bold" value={formData.nombre} onChange={handleChange} id="nombre" name="nombre" placeholder="Pan, Queso, etc" type="text"/>
            </div>
            <div className="grid grid-cols">
                <label htmlFor="nombre" className="text-2xl font-bold">
                    Descripcion del articulo:
                </label>
              <input className="border border-gray-400 rounded p-2 m-5 w-100 font-bold" value={formData.descripcion} onChange={handleChange} id="descripcion" name="descripcion" placeholder="Este es mi articulo" type="text"/>
            </div>
            <div className="grid grid-cols">
                <label htmlFor="nombre" className="text-2xl font-bold">
                    Precio del articulo:
                </label>
              <input className="border border-gray-400 rounded p-2 m-5 w-100 font-bold" value={formData.price} onChange={handleChange} id="price" name="price" placeholder="3" type="number"/>
            </div>
            <input className="bg-blue-300 py-5 px-10 uppercase rounded-xl text-white font-bold" type="submit" value={'Guardar'}/>
          </form>
        </div>
    )
}