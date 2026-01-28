import { useState, type ChangeEvent, type SubmitEvent } from "react"
import type { Ventas } from "../types"

export function useVentasForm() {
    const initialState: Ventas = {
        nombre: '',
        descripcion: '',
        price: 0
    }
    const [formData, setFormData] = useState<Ventas>(initialState)
    const [ventas, setVentas] = useState<Ventas[]>([])
    const [indexUpdating, setIndexUpdating] = useState<number | null>(null)

    function handleChange(event: ChangeEvent<HTMLInputElement>): void {
        setFormData({
            ...formData,
            [event.target.id]: event.target.value
        })
    }

    function handleSubmit(event: SubmitEvent<HTMLFormElement>): void {
        event.preventDefault()
        if(indexUpdating != null){
            handleUpdate()
        }else{
            handleCreate()
        }
        setFormData(initialState)
    }

    function handleDelete({indexToDelete}:{indexToDelete:number}){
        setVentas(ventas.filter((_venta, index) => index !== indexToDelete))
    }

    function handleUpdate(){
        setVentas(ventas.map((venta, index) => index === indexUpdating ? 
            formData: venta))
        setIndexUpdating(null)
    }

    function handleCreate(){
        setVentas([...ventas, formData])
    }

    function setUpdatingState({indexToUpdate}:{indexToUpdate:number}){
        setIndexUpdating(indexToUpdate)
        const updatingVenta = ventas.find((_, index) => index === indexToUpdate)
        updatingVenta && setFormData(updatingVenta)        
    }

    return {formData, ventas, handleChange, handleSubmit, handleDelete, setUpdatingState}
}