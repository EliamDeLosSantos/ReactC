import { tipOptions } from "../helpers";
import type { Dispatch } from "react";
import type { OrderActions } from "../reducers/order-reducer";

type TipPercentageFormProps ={
    dispatch: Dispatch<OrderActions>,
    tip: number
}

export default function TipPercentageForm({dispatch, tip}:TipPercentageFormProps) {
    return (
        <div>
            <h3 className="font-black text-2xl">
                Propina:
            </h3>
            <form>
                {tipOptions.map((tipOptions)=>(
                    <div key={tipOptions.id} className="flex gap-2">
                        <label htmlFor={tipOptions.id}>{tipOptions.label}</label>
                        <input
                            id={tipOptions.id}
                            name="tip"
                            type="radio"
                            value={tipOptions.value}
                            // El mas es para convertir ese value a number
                            onChange={e => dispatch({type:'set-tip', payload: {value: +e.target.value}})}
                            checked ={tipOptions.value === tip}
                        ></input>
                    </div>
                ))}
                        <button
                        className="w-50 rounded bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10"
                         type="button"
                         onClick={()=> dispatch({type:'set-tip', payload: {value: 0}})}
                         disabled={tip === 0}
                         >Remover propina</button>
            </form>
        </div>
    )
};

