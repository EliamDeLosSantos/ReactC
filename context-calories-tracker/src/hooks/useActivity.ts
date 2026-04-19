import { useContext } from "react";
import { ActivityContext } from "../context/ActivityContext";

export const useActivity = () => {
    const context = useContext(ActivityContext)
    if(!context) throw new Error('useActivityContext hook must be inside an ActivityProvider')
    return context
}