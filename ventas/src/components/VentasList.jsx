
export default function VentasList({ ventas, handleDelete }) {
    return (
        <div>
            {
                ventas.length > 0 ? (
                    <>
                        <h1>¡Mis ventas!</h1>
                        {
                            ventas.map((venta, index) => ( // TODO: create uuid for id
                                <div className="py-3" key={index}>
                                    <div className="flex">
                                        <p className="text-3xl font-black"><span className="text-black">Nombre: {''}</span>{venta.name}</p>
                                    </div>
                                    <div className="flex">
                                        <p className="text-3xl font-black"><span className="text-black">Telefono: {''}</span>{venta.phone}</p>
                                    </div>
                                    <div className="flex">
                                        <p className="text-3xl font-black"><span className="text-black">Precio: {''}</span>{venta.price}</p>
                                    </div>
                                    <button onClick={() => handleDelete(index)}>
                                        Eliminar
                                    </button>
                                </div>
                            ))
                        }
                    </>
                ) : (
                    <p>No hay ventas!</p>
                )
            }
        </div>
    )
};

