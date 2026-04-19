import CalorieDisplay from "./CalorieDisplay"
import { useActivity } from "../hooks/useActivity"

export default function CalorieTracker() {
    const { caloriesConsumed, caloriesBurned, caloriesDiff} = useActivity()

    return (
        <>
            <h2 className="text-4xl font-black text-center "> Resumen de Calorias</h2>
            <div className="flex flex-cols items-center md:flex-row md:justify-between gap-5 mt-10">
                <CalorieDisplay calories={caloriesConsumed} text="Consumidas" color="teal"/>
                <CalorieDisplay calories={caloriesBurned} text="Quemadas" color="red"/>
                <CalorieDisplay calories={caloriesDiff} text="Diferencia" color="white"/>
            </div>
        </>
    )
};

