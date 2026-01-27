import { useState } from "react";
const initialFormDataState = {
    // id:uuid(),
    name: '',
    phone: '',
    price: '',
}

export function useVentasForm() {
    const [formData, setFormData] = useState(initialFormDataState)
    const [ventas, setVentas] = useState([])

    const handleChange = (event) => {
        const formValue = event.target.value
        setFormData({
            ...formData,
            [event.target.id]: formValue
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setVentas([...ventas, formData]);
    }

    const handleDelete = (indexToDelete) => {
        setVentas(ventas.filter((venta, index) => index !== indexToDelete))
    }
    return {formData, ventas, handleChange, handleSubmit, handleDelete}
}
