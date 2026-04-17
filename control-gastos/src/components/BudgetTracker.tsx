import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import { useBudget } from "../hooks/useBudget"
import AmountDisplay from "./AmountDisplay"
import 'react-circular-progressbar/dist/styles.css'
export default function BudgetTracker() {
    const {dispatch,state, totalExpenses, remainingBudget} = useBudget()
    const percentage = +((totalExpenses/state.budget) * 100).toFixed()
    console.log(percentage);
    const progressBarPathColor = percentage === 100 ? '#dc2626' : '#3b82f6';
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex justify-center h-75">
            {/* <img src="/assets/grafico.jpg" alt="Grafico de gastos"/> */}
            <CircularProgressbar
                value={percentage}
                styles={buildStyles({
                    pathColor: progressBarPathColor,
                    trailColor:'#f5f5f5',
                    textColor: progressBarPathColor
                })}
                text={`${percentage}%`}
            />
        </div>
        <div className="flex flex-col justify-center items-center gap-8">
            <button
                onClick={()=>dispatch({type:'reset-app'})}
                type="button"
                className="bg-pink-600 w-full p-2 text-white uppercase font-bold rounded-lg"
            >
                Reset
            </button>
            <AmountDisplay
                label="Presupuesto"
                amount={state.budget}
            />
            <AmountDisplay
                label="Disponible"
                amount={remainingBudget}
            />
            <AmountDisplay
                label="Gastado"
                amount={totalExpenses}
            />
        </div>
    </div>
  )
};

