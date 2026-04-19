import { createContext, useMemo, useReducer, type Dispatch, type ReactNode } from "react";
import { activityReducer, initialState, type ActivityActions, type ActivityState } from "../reducers/activityReducer";
import { categories } from "../data/categories";
import type { Activity } from "../types";

type ActivityProviderProps = {
    children: ReactNode
}

type ActivityContextProps = {
    state: ActivityState
    dispatch: Dispatch<ActivityActions>
    caloriesConsumed:number
    caloriesBurned:number
    caloriesDiff:number
    categoryName: (category: Activity['category']) => string[]
    isEmptyActivities: boolean
}

export const ActivityContext = createContext<ActivityContextProps>({} as ActivityContextProps)

export const ActivityProvider = ({ children }: ActivityProviderProps) => {

    const [state, dispatch] = useReducer(activityReducer, initialState)
    const caloriesConsumed = useMemo( () => state.activities.reduce((total, activity) => activity.category === 1 ? activity.calories + total : total, 0), [state.activities])
    const caloriesBurned = useMemo( () => state.activities.reduce((total, activity) => activity.category === 2 ? activity.calories + total : total, 0), [state.activities])
    const caloriesDiff = useMemo( () => caloriesConsumed - caloriesBurned, [state.activities])
    const categoryName = useMemo(() => (category: Activity['category']) => categories.map(cat => cat.id === category ? cat.name : ''), [state.activities])
    const isEmptyActivities = useMemo(()=> state.activities.length === 0,[state.activities])
    
    return (
        <ActivityContext.Provider
            value={{
                state,
                dispatch,
                caloriesConsumed,
                caloriesBurned,
                caloriesDiff,
                categoryName,
                isEmptyActivities
            }}
        >
            {children}
        </ActivityContext.Provider>
    )
}