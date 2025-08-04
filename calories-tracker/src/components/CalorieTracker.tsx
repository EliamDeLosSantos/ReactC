import { useMemo } from "react"
import type { Activity } from "../types"
import CalorieDisplay from "./CalorieDisplay"

type CalorieTrackerProps = {
    activities: Activity[]
}

export default function CalorieTracker({activities}: CalorieTrackerProps) {
    const caloriesConsumed = useMemo( () => activities.reduce((total, activity) => activity.category === 1 ? activity.calories + total : total, 0), [activities])
    const caloriesBurned = useMemo( () => activities.reduce((total, activity) => activity.category === 2 ? activity.calories + total : total, 0), [activities])
    const caloriesDiff = useMemo( () => caloriesConsumed - caloriesBurned, [activities])
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

