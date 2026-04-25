import { useState, type ChangeEvent, type SubmitEvent } from "react";
import { currencies } from "../data";
import { useCryptoStore } from "../store";
import type { Pair } from "../types";
import ErrorMessage from "./ErrorMessage";

export default function CryptoSearchForm() {
    const { cryptocurrencies, fetchConversionCryptos } = useCryptoStore()

    const initialState = {
        currency:'',
        criptocurrency:''
    }
    const [pair, setPair] = useState<Pair>(initialState)
    const [error, setError] = useState('')

    function handleChange(e: ChangeEvent<HTMLSelectElement>) {
        setPair({
            ...pair,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
        e.preventDefault()
        if(Object.values(pair).includes('')){
            setError('Todos los campos son obligatorios')
            return
        }
        setError('')
        fetchConversionCryptos(pair)
    }

    return (
        <form action="" className="form" onSubmit={handleSubmit}>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <div className="field">
                <label htmlFor="currency">Moneda:</label>
                <select name="currency" id="currency" value={pair.currency} onChange={handleChange}>
                    <option value="">--Seleccione--</option>
                    {currencies?.map(currency => (
                        <option key={currency.code} value={currency.code}> {currency.name} </option>
                    ))}
                </select>
            </div>
            <div className="field">
                <label htmlFor="criptocurrency">Criptomoneda:</label>
                <select name="criptocurrency" id="criptocurrency" value={pair.criptocurrency} onChange={handleChange}>
                    <option value="">--Seleccione--</option>
                    {cryptocurrencies?.map(cryptocurrency => (
                        <option
                            key={cryptocurrency.CoinInfo.Id}
                            value={cryptocurrency.CoinInfo.Name}
                        > {cryptocurrency.CoinInfo.FullName}
                        </option>
                    ))}
                </select>
            </div>
            <input type="submit" value="Cotizar" />
        </form>
    )
};

