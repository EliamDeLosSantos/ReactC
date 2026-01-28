import type { Ventas } from "../types"

type VentasTableProps = {
ventas:Ventas[],
handleDelete: ({indexToDelete}:{indexToDelete:number}) => void
setUpdatingState:({ indexToUpdate }: {indexToUpdate: number}) => void
}
export default function VentasTable({ventas, handleDelete, setUpdatingState}:VentasTableProps) {
  return (
        <div>
          {
            ventas.length>0 && (
              <>
                <h1 className="text-center font-black text-3xl">Listado de ventas</h1>
                <table>
                  <thead>
                    <tr>
                      <td>
                        Nombre
                      </td>
                      <td>
                        Descripcion
                      </td>
                      <td>
                        Precio
                      </td>
                      <td>
                        Acciones
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      ventas.map((venta, index) => (
                          <tr key={index}>
                            <td>
                              {venta.nombre}
                            </td>
                            <td>
                              {venta.descripcion}
                            </td>
                            <td>
                              {venta.price}
                            </td>
                            <td>
                              <button className="" onClick={()=>setUpdatingState({indexToUpdate:index})}>
                                Editar
                              </button>
                            </td>
                            <td>
                              <button className="" onClick={()=>handleDelete({indexToDelete:index})}>
                                Eliminar
                              </button>
                            </td>
                          </tr>
                      ))
                    }
                    <tr></tr>
                  </tbody>
                </table>
              </>
            )
          }
        </div>
  )
};

