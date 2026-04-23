import { useState, type ChangeEvent, type SubmitEvent } from "react";
import { countries } from "../../data/countries";
import styles from './Form.module.css'
import type { Search } from "../../types";
import Alert from "../Alert/Alert";

type FormProps = {
    fetchWeather: (search: Search) => Promise<void>
}

export default function Form({fetchWeather}: FormProps) {

    const initialState = {
        city: '',
        country: ''
    }

    const [search, setSearch] = useState<Search>(initialState)
    const [alert, setAlert] = useState('')

    const handleChange = (e:ChangeEvent<HTMLInputElement> |  ChangeEvent<HTMLSelectElement>) => {
        setSearch({
            ...search,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(Object.values(search).includes('')){
            setAlert('Todos los campos son obligatorios')
            return
        }
        fetchWeather(search)
        setAlert('')
    }

    return (
        <form onSubmit={handleSubmit} action="" className={styles.form}>
            {alert && (
                <Alert>{alert}</Alert>
                )}
            <div className={styles.field}>
                <label htmlFor="city">Ciudad</label>
                <input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="Ciudad"
                    value={search.city}
                    onChange={handleChange}
                />
            </div>
            <div className={styles.field}>
                <label htmlFor="country">Pais</label>
                <select name="country" id="country"
                    value={search.country}
                    onChange={handleChange}
                    >
                    <option value="">--Seleccione un pais--</option>
                    {
                        countries.map(country => (
                            <option key={country.code} value={country.code}>{country.name}</option>
                        ))
                    }
                </select>
            </div>
            <input className={styles.submit} type="submit" value="Consultar Clima" />
        </form>
    )
};

